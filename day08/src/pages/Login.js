import { useContext, useRef } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function Login() {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const inputRef = useRef();

    function login() {
        setUser({name: inputRef.current.value});
        navigate('/');
    }

    return ( <>
        <h1>Log in page</h1> 
        <input ref={inputRef}/>
        <button onClick={login}>Log in</button>
    </>);
}

export default Login;