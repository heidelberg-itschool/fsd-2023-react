import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function Login() {

    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    function login() {
        setUser({name: 'Jon'});
        navigate('/');
    }

    return ( <>
        <h1>Log in page</h1> 
        <button onClick={login}>Log in</button>
    </>);
}

export default Login;