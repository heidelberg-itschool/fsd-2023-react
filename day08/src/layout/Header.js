import { Link } from "react-router-dom";

function Header() {
    return ( 
    <div className="App-header">
        <div className="navigation">
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            <Link to='/product'>Product</Link>
            <Link to='/login'>Log In</Link>
        </div>
    </div>);
}

export default Header;