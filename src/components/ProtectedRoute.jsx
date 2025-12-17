import { Navigate } from "react-router";

const ProtectedRoute = ({children}) => {

    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    return(
        isLoggedIn ? children : <Navigate to = "/login"/>

    )
}
export default ProtectedRoute