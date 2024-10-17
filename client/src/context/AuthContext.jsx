import { createContext, useEffect, useState } from "react";


// create context
export const AuthContext = createContext();

// AuthContext provider component
export const AuthProvider = ({ children }) => {
    const [ isAuthenticated, setIsAuthenticated ] = useState(false);
    const [ user, setUser ] = useState(null)
    const [ isLoading, setIsLoading ] = useState(false);
    const [csrfToken, setCsrfToken] = useState(null);
    
    useEffect(() => {
        verify_Token();
        fetchCsrfToken();
    }, []);

    const verify_Token = async () => {
      try {
        const res = await fetch('/api/auth/verify_token', {
          method: "GET",
          credentials: 'include'
        });

        const data = await res.json()

        setIsAuthenticated(data.valid)

        if(data.valid && data.userId) {
          setUser(data.userId)
        }

      } catch (error) {
          console.error('Token verification failed:', error);
          setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    const fetchCsrfToken = async () => {
      try {
          const response = await fetch('/api/auth/csrf_token', {
              credentials: 'include'
          });
          const data = await response.json();
          setCsrfToken(data.csrfToken);
      } catch (error) {
          console.error('Failed to fetch CSRF token:', error);
      } finally {
          setIsLoading(false);
      }
    };


    const login = async (credentials) => {
      try {
        const response = await fetch('/api/auth/login', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(credentials)
        })

        const data = await response.json();

        if(!response.ok) {
          throw new Error("Login failed")
        }

        setUser(data.userId);
        setIsAuthenticated(true);

        return { success: true };
      } catch (error) {
        return {
          success: false,
          error: error.message
        }
      }
    };

    const logout = async () => {
      if (!csrfToken) {
          console.error('CSRF token not available');
          return { success: false, error: 'CSRF token not available' };
      }

      try {
          const response = await fetch('/api/auth/logout', {
              method: 'POST',
              credentials: 'include',
              headers: {
                  'CSRF-Token': csrfToken
              }
          });

          if (response.ok) {
              setIsAuthenticated(false);
              return { success: true };
          } else {
              throw new Error('Logout failed');
          }
      } catch (error) {
          console.error('Logout error:', error);
          return { success: false, error: error.message };
      }
    };

    return (
        <AuthContext.Provider 
          value={{ 
            isAuthenticated, 
            isLoading, 
            user,
            login,
            logout
        }}>
            { children }
        </AuthContext.Provider>
    )
    
}
