import './header.css';
import { Outlet, NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineUsers } from "react-icons/hi2";
import { GiBlackBook } from "react-icons/gi";
import $ from 'jquery';


const Header = () => {



    return (
        <ul className="nav-links">
            <li className='nav-link-item'>
                <i className='nav-link-icon'><RxDashboard /></i>
                <NavLink to="/"> Dashboard</NavLink>
            </li>
            <li className="nav-link-item center">
                <i><HiOutlineUsers /></i>
                <NavLink to="/users">User</NavLink></li>
            <li className="nav-link-item center">
                <i><GiBlackBook /></i>
                <NavLink to="/books">Books</NavLink></li>
        </ul>
    )
}

export default Header;