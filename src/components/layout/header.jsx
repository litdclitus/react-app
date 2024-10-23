// import './header.css';
// import { NavLink } from "react-router-dom";
// import { RxDashboard } from "react-icons/rx";
// import { HiOutlineUsers } from "react-icons/hi2";
// import { GiBlackBook } from "react-icons/gi";
// import { CiLogin } from "react-icons/ci";


// const Header = () => {

//     return (
//         <div className="header-nav">
//             <ul className="nav-links">
//                 <li className='nav-link-item'>
//                     <NavLink to="/" className="item-icon">
//                         <span style={{ marginRight: 5, marginTop: 2 }}> <RxDashboard /></span>
//                         <span>Dashboard</span>
//                     </NavLink>
//                 </li>
//                 <li className="nav-link-item center">
//                     <NavLink to="/users" className="item-icon">
//                         <span style={{ marginRight: 5, marginTop: 2 }}> <HiOutlineUsers /></span>
//                         <span>User</span>
//                     </NavLink>
//                 </li>
//                 <li className="nav-link-item center">
//                     <NavLink to="/books" className="item-icon">
//                         <span style={{ marginRight: 5, marginTop: 2 }}> <GiBlackBook /></span>
//                         <span>Books</span>
//                     </NavLink>
//                 </li>
//             </ul>

//             <ul className="nav-links">
//                 <li className="nav-link-item center">
//                     <NavLink to="/login" className="item-icon">
//                         <span style={{ marginRight: 5, marginTop: 2 }}> <CiLogin /></span>
//                         <span>Log in</span>
//                     </NavLink>
//                 </li>
//             </ul>
//         </div>
//     )
// }

// export default Header;
import { Link, NavLink } from 'react-router-dom';
import { Menu, message } from 'antd';
import { UsergroupAddOutlined, HomeOutlined, AuditOutlined, SettingOutlined } from '@ant-design/icons';
import { useContext, useState } from 'react';
import { MdOutlineManageAccounts } from "react-icons/md";
import { GiBlackBook } from "react-icons/gi";
import { AuthContext } from '../context/auth.context';
import { IoIosLogIn } from "react-icons/io";
import { MdAppRegistration } from "react-icons/md";
import { TbHandLoveYou } from "react-icons/tb";
import { LuLayoutDashboard } from "react-icons/lu";
import { CiTextAlignRight } from 'react-icons/ci';
import { logoutAPI } from '../../services/api.services';
import { useNavigate } from 'react-router-dom';




const Header = () => {
    const [current, setCurrent] = useState('');

    const { userLogin, setUserLogin } = useContext(AuthContext);

    const navigate = useNavigate();

    const onClick = (e) => {
        // console.log('click ', e);
        setCurrent(e.key);
    };

    const handleOnLogout = async () => {
        const res = await logoutAPI();
        if (res.data) {
            localStorage.removeItem("access_token");
            setUserLogin({
                email: "",
                phone: "",
                fullName: "",
                role: "",
                avatar: "",
                id: ""
            })
            message.success("logout thành công");
            navigate("/");
        }
    }

    const items = [

        {
            label: <Link to={"/"}>Dashboard</Link>,
            key: 'home',
            icon: <LuLayoutDashboard />,
        },

        {
            label: <Link to={"/users"}>Users</Link>,
            key: 'users',
            icon: <UsergroupAddOutlined />
        },
        {
            label: <Link to={"/books"}>Books</Link>,
            key: 'books',
            icon: <GiBlackBook />,
        },

        ...(userLogin.id ? [{
            label: `Welcome ${userLogin.fullName}`,
            key: 'account',
            icon: <TbHandLoveYou />,
            children: [
                {
                    label: <span onClick={() => { handleOnLogout() }}>Log out</span>,
                    key: 'logout',
                },
            ],
            style: { position: "absolute", right: 0 },
        }] : []),

        ...(!userLogin.id ? [{
            label: <Link to={"/login"} style={{}}>Sign in</Link>,
            key: 'login',
            icon: <IoIosLogIn />,
            style: { position: "absolute", right: 100 },
        },
        {
            label: <Link to={"/register"} style={{}}>Sign up</Link>,
            key: 'register',
            icon: <MdAppRegistration />,
            style: { position: "absolute", right: 0 },
        }] : []),
    ];

    return (
        <Menu style={{ display: "flex", }}
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
        />
    )
}

export default Header;
