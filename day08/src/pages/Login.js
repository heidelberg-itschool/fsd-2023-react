import { useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {

    const { setUser } = useContext(UserContext);

    function login() {
        setUser({name: 'Jon'});
    }

    return ( <>
        <h1>Log in page</h1> 
        <button onClick={login}>Log in</button>
    </>);
}

export default Login;