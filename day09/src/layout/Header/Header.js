import { NavLink } from "react-router-dom";
import './Header.scss';
import logo from './../../assets/images/logo.png';

function Header() {
    return ( 
        <header className="header">
            <div className="links">
                <NavLink to='/'><img id="logo" src={logo} alt="logo"/></NavLink>
            </div>
            <div className="links navigate">
                <NavLink to='/products'>Products</NavLink>
                <NavLink to='/card'>Card</NavLink>
            </div>
        </header>
    );
}

export default Header;