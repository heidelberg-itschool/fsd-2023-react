import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import UserContext from "../context/UserContext";

function RouterRedirect() {
    const { user } = useContext(UserContext);
    const location = useLocation();

    const isHomePage = location.pathname === "/";

    return ( <>
        {user.name || isHomePage ? <Outlet/> : <Navigate to='/login' />}
    </> );
}

export default RouterRedirect;