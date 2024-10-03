import './header.css';
import { Outlet, NavLink } from "react-router-dom";


const Header = () => {

    return (
        <ul className="nav-links">
            <li><NavLink to="/">Dashboard</NavLink></li>
            <li className="center"><NavLink to="/users">User</NavLink></li>
            <li className="center"><NavLink to="/books">Books</NavLink></li>
            {/* <li className="center"><a href="/login">Login</a></li>
            <li className="center"><a href="/register">Register</a></li> */}
        </ul>
    )
}

export default Header;