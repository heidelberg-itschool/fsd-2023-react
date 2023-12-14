import { useContext } from "react";
import UserContext from "../context/UserContext";

function Products() {
    const user = useContext(UserContext);
    console.log(user);
    return ( <h1>Products</h1> );
}

export default Products;