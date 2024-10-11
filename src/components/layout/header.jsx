import './header.css';
import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineUsers } from "react-icons/hi2";
import { GiBlackBook } from "react-icons/gi";

const Header = () => {

    return (
        <ul className="nav-links">
            <li className='nav-link-item'>
                <NavLink to="/" className="item-icon">
                    <span style={{ marginRight: 5, marginTop: 2 }}> <RxDashboard /></span>
                    <span>Dashboard</span>
                </NavLink>
            </li>
            <li className="nav-link-item center">

                <NavLink to="/users" className="item-icon">
                    <span style={{ marginRight: 5, marginTop: 2 }}> <HiOutlineUsers /></span>
                    <span>User</span>
                </NavLink>
            </li>
            <li className="nav-link-item center">
                <NavLink to="/books" className="item-icon">
                    <span style={{ marginRight: 5, marginTop: 2 }}> <GiBlackBook /></span>
                    <span>Books</span>
                </NavLink>
            </li>
        </ul>
    )
}

export default Header;