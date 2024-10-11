import './footer.css';
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";


const Footer = () => {
    const yearNow = new Date().getFullYear();

    return (
        <div>
            <div class="clear"></div>

            <div className="footer">
                <div className="row">
                    <a href="https://www.facebook.com/" target='_blank'><i><FaFacebookF /></i></a>
                    <a href="https://github.com/litdclitus" target='_blank'><i><FaGithub /></i></a>
                    <a href="mailto:dangnh799@gmail.com" target='_blank'><i><BiLogoGmail /></i></a>
                </div>
                <div className="row">
                    &copy;<span>{yearNow} LitDClitus. All rights reserved.</span>
                </div>
            </div>

        </div>
    )
}
export default Footer;