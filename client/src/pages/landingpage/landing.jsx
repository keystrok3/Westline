import { Link } from "react-router-dom";

import './landing.css';

const Landing = () => {


    return (
        <div className="landing-page">
            <header>
                <h1>Westline</h1>
                <div className="login-link">
                    <Link to='/login'>Login</Link>
                </div>
            </header>
        </div>
    )
};


export default Landing;