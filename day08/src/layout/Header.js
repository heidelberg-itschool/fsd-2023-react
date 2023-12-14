import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

function Header() {
    const { user, setUser } = useContext(UserContext);

    function resetUser() {
        setUser({});
    }

    return ( 
    <div className="App-header">
        <div className="navigation">
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            <Link to='/product'>Product</Link>
            <Link to='/todo'>To-Do</Link>
            {!user.name ?
                    <Link to='/login'>Log In</Link> : 
                    <button onClick={resetUser}>Log out</button>}
        </div>
    </div>);
}

export default Header;