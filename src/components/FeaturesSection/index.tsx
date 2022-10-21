import { FeatureCard } from "../FeatureCard";
import { FeaturesContainer } from "./style";
import BrandRecognition from "../../assets/icon-brand-recognition.svg";
import DetailedRecords from "../../assets/icon-detailed-records.svg";
import FullyCustomizable from "../../assets/icon-fully-customizable.svg";
import Line from "../../assets/line-card.svg";

export const FeaturesSection = () => {
    return (
        <FeaturesContainer>
            <div className="features__title">
                <h2>Advanced Statistics</h2>
                <p>Track how your links are performing across the web with <br/> our advanced statistics dashboard.</p>
            </div>

            <div className="features__cards">
                <div className="card1">
                    <img className="line" src={Line} alt="Line" />

                    <FeatureCard
                        icon={BrandRecognition}
                        title="Brand Recognition"
                        subtitle="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
                    />
                </div>
                <div className="card2">
                    <img className="line" src={Line} alt="Line" />

                    <FeatureCard
                        icon={DetailedRecords}
                        title="Detailed Records"
                        subtitle="Gain insights into who is clicking your links. Knowing when and where 
                        people engage with your content helps inform better decisions."
                    />
                </div>
                <div className="card3">
                    <FeatureCard
                        icon={FullyCustomizable}
                        title="Fully Customizable"
                        subtitle="Improve brand awareness and content discoverability through customizable 
                        links, supercharging audience engagement."
                    />
                </div>
            </div>
        </FeaturesContainer>
    );
}