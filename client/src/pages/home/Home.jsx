import LogoutButton from "../../components/LogOutButton/LogoutButton";

import './Home.css';


const Home = () => {
    return (
        <div className="home-page">
            <header>
                <h1 >Westline</h1>
                <LogoutButton />
            </header>
            
        </div>
    )
};

export default Home;