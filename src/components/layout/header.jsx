import './header.css';
import { NavLink } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineUsers } from "react-icons/hi2";
import { GiBlackBook } from "react-icons/gi";
import { CiLogin } from "react-icons/ci";


const Header = () => {

    return (
        <div className="header-nav">
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

            <ul className="nav-links">
                {/* <li className="nav-link-item center">
                    <NavLink to="/register" className="item-icon">
                        <span style={{ marginRight: 5, marginTop: 2 }}> <CiLogin /></span>
                        <span>Register</span>
                    </NavLink>
                </li> */}
                <li className="nav-link-item center">
                    <NavLink to="/login" className="item-icon">
                        <span style={{ marginRight: 5, marginTop: 2 }}> <CiLogin /></span>
                        <span>Log in</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Header;