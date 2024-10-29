

// AdminRoute.jsx
import { useContext, useEffect } from "react"
import { AuthContext } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
    const { user, isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            return navigate('/login');
        }

        if (!user || user.role !== 'admin') {
            return navigate('/home');
        }
    }, [isAuthenticated, user, navigate]);

    return children;
};

export default AdminRoute;