import './header.css';

const Header = () => {

    return (
        <ul class="nav-links">
            <li><a href="#">Dashboard</a></li>
            <li class="center"><a href="/users">User</a></li>
            <li class="center"><a href="/products">Product</a></li>
            {/* <li class="center"><a href="/login">Login</a></li>
            <li class="center"><a href="/register">Register</a></li> */}
        </ul>
    )
}

export default Header;