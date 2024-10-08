import { Link } from "react-router-dom";

import './landing.css';

const Landing = () => {


    return (
        <div className="landing-page">
            <header>
                <h1>Westline</h1>
                <div className="login-link">
                    <Link style={{ marginRight: '1em'}} to='/register'>Sign Up</Link>
                    <hr />
                    <Link style={{ marginLeft: '1em' }} to='/login'>Login</Link>
                </div>
            </header>
        </div>
    )
};


export default Landing;