import { HeroContainer } from "./style";
import WorkIllustration from "../../assets/illustration-working.svg";
import { Button } from "../Button";

export const HeroSection = () => {
    return (
        <HeroContainer>
            <div className="hero__content">
                <h1>More than just shorter links</h1>
                <p>Build your brand's recognition and get detailed insights 
                on how your links are performing.</p>
                <Button text="Get Started"/>
            </div>

            <div className="hero__img">
                <img src={WorkIllustration} alt="Work illustration" />
            </div>
        </HeroContainer>
    );
}