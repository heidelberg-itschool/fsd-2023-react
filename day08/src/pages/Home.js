import { useContext } from "react";
import UserContext from "../context/UserContext";

function Home() {
    const { user } = useContext(UserContext);
    console.log(user);

    return ( <>
        <h1>Home page</h1> 
        {user.name && <p>Welcome user {user.name}</p>}
    </>);
}

export default Home;