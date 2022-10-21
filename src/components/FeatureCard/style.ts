import styled from "styled-components";

export const FeatureCardContainer = styled.article`
    background-color: #fff;
    padding: 30px;
    position: relative;
    border-radius: 8px;

    @media (max-width: 660px) {
        display: flex;
        justify-content: center;
    }

    .card__img {
        background-color: #3B2F53;
        width: 90px;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        position: absolute;
        top: -3rem;
    }

    .card__content {
        padding-top: 2.8rem;
        padding-bottom: 15px;

        @media (max-width: 660px) {
            text-align: center;
        }

        h3 {
            color: hsl(255, 11%, 22%);
            font-size: 1.4rem;
            margin-bottom: 15px;
        }

        p {
            color: hsl(257, 7%, 63%);
            line-height: 1.6rem;
        }
    }
`;