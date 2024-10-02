import './footer.css';
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    const yearNow = new Date().getFullYear();

    return (
        <div>
            <footer>
                <div class="footer">
                    <div class="row">
                        <a href="https://www.facebook.com/"><i><FaFacebookF /></i></a>
                        <a href="https://github.com/litdclitus"><i><FaGithub /></i></a>
                        <a href="#"><i><FaInstagram /></i></a>
                        <a href="#"><i></i></a>
                    </div>

                    <div class="row">
                        <ul>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Our Services</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Career</a></li>
                        </ul>
                    </div>

                    <div class="row">
                        &copy;<span>{yearNow} LitDClitus. All rights reserved.</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer;