

import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {



    return (
        <div className="login-page">
            <div className="login-form">
                <h1>Login</h1>
                <div className="id" style={{ marginTop: '1.5em' }}>
                    <label htmlFor="id-field">ID or Passport Number</label>
                    <input type="text" id='id-field' />
                </div>
                <div className="password">
                    <label htmlFor="password-field">Password</label>
                    <input type="password" id="password-field" />
                </div>


                <div className="submit">
                    <button className="submit-btn">Log In</button>
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