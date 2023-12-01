import { Link, NavLink } from "react-router-dom";

function Header() {
    return ( 
        <div className="App-header">
            <Link to='/'>Home</Link>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/dashboard'>Dashboard</NavLink>
            {/* <a href="/">Home</a> // this will reload the page, use Link instead */}
        </div> 
    );
}

export default Header;