import { NavbarContainer } from "./style";
import Logo from "../../assets/logo.svg";
import { Button } from "../Button";
import { MenuMobile } from "../MenuMobile";
import { useState } from "react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleMenu = () => setIsOpen(!isOpen);

    return (
        <NavbarContainer>
            <div className="nav__links">
                <a href="#">
                    <img src={Logo} alt="Logo" />
                </a>

                <nav>
                    <a href="#">Features</a>
                    <a href="#">Pricing</a>
                    <a href="#">Resources</a>
                </nav>
            </div>

            <div className="nav__buttons">
                <a href="#">Login</a>
                <Button text="Sign Up" padding="9px 24px" fontSize="1rem" />
            </div>

            <div className="nav__responsive">
                {isOpen ? (
                    <i id="close" onClick={handleMenu} className="fas fa-times"></i>
                ) : (
                    <i onClick={handleMenu} className="fas fa-bars"></i>
                )}
            </div>

            <MenuMobile isOpen={isOpen} />
        </NavbarContainer>
    );
};
