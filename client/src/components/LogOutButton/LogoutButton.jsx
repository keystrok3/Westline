import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from 'react-router-dom';

import './LogoutButton.css';


const LogoutButton = () => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleLogout = async () => {
        const result = await logout();
        if (result.success) {
            navigate('/login');
        } else {
            // Handle error - maybe show a notification
            console.error('Logout failed:', result.error);
        }
    };

    return (
        <button className="logout-btn" onClick={handleLogout}>
            Logout
        </button>
    );
};

export default LogoutButton;