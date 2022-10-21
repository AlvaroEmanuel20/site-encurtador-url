import { FeatureCardContainer } from "./style";

interface IFeatureCard {
    icon: string;
    title: string;
    subtitle: string;
}

export const FeatureCard = ({icon, title, subtitle}: IFeatureCard) => {
    return (
        <FeatureCardContainer>
            <div className="card__img">
                <img src={icon} alt={title} />
            </div>

            <div className="card__content">
                <h3>{title}</h3>
                <p>{subtitle}</p>
            </div>
        </FeatureCardContainer>
    );
}