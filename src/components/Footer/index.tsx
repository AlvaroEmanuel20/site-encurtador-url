import { FooterContainer } from "./style";
import Logo from "../../assets/logo.svg";

export const Footer = () => {
    return (
        <FooterContainer>
            <div className="footer__info">
                <div className="footer__logo">
                    <img src={Logo} alt="Logo" />
                </div>

                <div className="footer__links">
                    <h4>Features</h4>
                    <ul>
                        <li><a href="#">Link Shortening</a></li>
                        <li><a href="#">Branded Links</a></li>
                        <li><a href="#">Analytics</a></li>
                    </ul>
                </div>

                <div className="footer__links">
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Developers</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>

                <div className="footer__links">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Our Team</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="footer__socials">
                    <div>
                        <a href="#">
                            <i className="fab fa-facebook-square"></i>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <i className="fab fa-pinterest"></i>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer__attribution">
                <h5>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                Coded by <a href="https://github.com/AlvaroEmanuel20" target="_blank">Álvaro Emanuel</a>.</h5>
            </div>
        </FooterContainer>
    );
}