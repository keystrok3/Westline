import LogoutButton from "../LogOutButton/LogoutButton"
import './Header.css';


const Header = () => {


    return (
        <header className="main-header">
            <h1 >Westline</h1>
            <LogoutButton />
        </header>
    )
};


export default Header;