import { useContext } from "react";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";

function Home() {
    const { user } = useContext(UserContext);
    console.log(user);

    return ( <>
        <h1>Home page</h1> 
        {user.name ? <p>Welcome user {user.name}</p> : <Link to='/login'>Please log in</Link>}
    </>);
}

export default Home;