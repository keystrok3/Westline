import { createContext, useEffect, useState } from "react";


// create context
export const AuthContext = createContext();

// AuthContext provider component
export const AuthProvider = ({ children }) => {
    const [ isAuthenticated, setIsAuthenticated ] = useState(false);
    const [ user, setUser ] = useState(null)
    const [ isLoading, setIsLoading ] = useState(false);
    
    useEffect(() => {
        verify_Token();
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
      try {
          await fetch('/api/auth/logout', {
              method: 'POST',
              credentials: 'include',
          });
      } finally {
          setIsAuthenticated(false);
          setUser(null);
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
