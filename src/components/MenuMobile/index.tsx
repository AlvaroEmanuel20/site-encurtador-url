import { Button } from "../Button";
import { MenuMobileContainer } from "./style";

export interface IMenuMobile {
    isOpen: boolean;
}

export const MenuMobile = ({isOpen}: IMenuMobile) => {
    return (
        <MenuMobileContainer isOpen={isOpen}>
            <nav>
                <a href="#">Features</a>
                <a href="#">Pricing</a>
                <a href="#">Resources</a>
            </nav>

            <div>
                <a href="#">Login</a>
                <Button
                    text="Sign Up"
                    padding="9px 24px" 
                    fontSize="1rem" 
                />
            </div>
        </MenuMobileContainer>
    );
}