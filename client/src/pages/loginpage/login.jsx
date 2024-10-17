

import { Link, useLocation, useNavigate } from 'react-router-dom';
import './login.css';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
    const [ loginData, setLoginData ] = useState({
        user_id: "",
        password: ""
    });
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChangeId = (e) => {
        setLoginData(prev => {
            return {
                user_id: e.target.value,
                password: prev.password
            }
        });
    };

    const handleChangePassword = (e) => {

        setLoginData(prev => {
            return {
                user_id: prev.user_id,
                password: e.target.value
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setError('');

        const result = await login(loginData);

        if(result.success) {
            // Redirect to the attempted page or default to home
            const from = location.state?.from || '/home';
            navigate(from, { replace: true })
        } else {
            setError(result.error);
        }

        setIsLoading(false);
    }


    return (
        <div className="login-page">
            <div className="login-form">
                { error && <div className="error-message">{error}</div> }
                <h1>Login</h1>
                <div className="id" style={{ marginTop: '1.5em' }}>
                    <label htmlFor="id-field">ID or Passport Number</label>
                    <input onChange={handleChangeId} type="text" id='id-field' />
                </div>
                <div className="password">
                    <label htmlFor="password-field">Password</label>
                    <input onChange={handleChangePassword} type="password" id="password-field" />
                </div>


                <div className="submit">
                    <button 
                        onClick={handleSubmit} 
                        className="submit-btn"
                        disabled={isLoading}
                    >{isLoading ? "Logging In" : "Log In" }</button>
                </div>

                <div className="not-signed">
                    <p>Not yet signed up?</p>
                    <Link to='/register'>Sign Up</Link>
                </div>
            </div>
        </div>
    )
};


export default Login;