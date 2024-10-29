import { useContext, useEffect } from "react"
import { AuthContext } from "../../context/AuthContext"
import { useNavigate } from "react-router-dom";


const ProtectedRoute = ({ children }) => {
    const { user,  isAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();


    useEffect(() => {
        if(!isAuthenticated) {
            return navigate('/login')
        }
        if(user.role === 'admin') {
            return navigate('/admin');
        }
    }, [ isAuthenticated, user, navigate ])

    return children;
};

export default ProtectedRoute;