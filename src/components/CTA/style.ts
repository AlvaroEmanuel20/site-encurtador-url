import styled from "styled-components";
import BgCTA from "../../assets/bg-boost-desktop.svg";
import BgCTAMobile from "../../assets/bg-boost-mobile.svg";

export const CTAContainer = styled.section`
    background-image: url(${BgCTA});
    background-color: hsl(257, 27%, 26%);
    background-size: cover;
    background-repeat: no-repeat;
    text-align: center;
    padding: 55px 0;

    @media (max-width: 760px) {
        padding: 100px 20px;
        background-image: url(${BgCTAMobile});
    }

    h2 {
        color: #fff;
        font-size: 2.5rem;
        letter-spacing: -0.05rem;
        margin-bottom: 20px;

        @media (max-width: 950px) {
            font-size: 2rem;
        }

        @media (max-width: 376px) {
            font-size: 1.8rem;
        }
    }
`;