import { Navigate } from 'react-router-dom';
import { userAuthentication } from '../context/AuthContext';



const ProtectedRoute = ({ children }) => {
    const { user } = userAuthentication()

    if (!user) {
        return <Navigate to="/login" />
    }
    return children
}

export default ProtectedRoute