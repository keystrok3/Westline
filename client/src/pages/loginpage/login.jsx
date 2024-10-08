

import { Link } from 'react-router-dom';
import './login.css';
import { useState } from 'react';

const Login = () => {

    const [ loginData, setLoginData ] = useState({
        user_id: "",
        password: ""
    });

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

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...loginData })
            });

            const responseData = await response.json();

            if(response.ok) {
                document.cookie(`token=${responseData.msg}; path=/; secure; samesite=strict`)
                alert("logged in")
                return;
            }

            alert(response.statusText)
        } catch (error) {
            console.error('Could not log in: ', error);
        }
    }


    return (
        <div className="login-page">
            <div className="login-form">
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
                    <button onClick={handleSubmit} className="submit-btn">Log In</button>
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