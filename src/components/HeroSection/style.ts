import styled from "styled-components";

export const HeroContainer = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 80px 150px;

    @media (max-width: 1268px) {
        padding: 80px 40px;
    }
    
    @media (max-width: 950px) {
        flex-direction: column-reverse;
        padding: 40px 40px;
    }

    @media (max-width: 760px) {
        padding: 40px 20px;
    }

    .hero__content {
        max-width: 70%;
        padding-top: 80px;

        @media (max-width: 950px) {
            max-width: 100%;
            text-align: center;
            padding-top: 50px;
        }

        h1 {
            font-size: 5rem;
            line-height: 5.8rem;
            color: hsl(255, 11%, 22%);
            letter-spacing: -0.1rem;

            @media (max-width: 1060px) {
                font-size: 3.5rem;
                line-height: 4rem;
            }

            @media (max-width: 950px) {
                font-size: 3.2rem;
            }

            @media (max-width: 376px) {
                font-size: 2.8rem;
                line-height: 3.5rem;
            }
        }

        p {
            font-size: 1.4rem;
            max-width: 70%;
            color: hsl(257, 7%, 63%);
            margin-bottom: 30px;

            @media (max-width: 1060px) {
                font-size: 1.2rem;
            }

            @media (max-width: 950px) {
                max-width: 100%;
                margin-top: 15px;
            }
        }
    }

    .hero__img {
        position: relative;

        img {
            position: absolute;
            right: -18rem;

            @media (max-width: 950px) {
                position: static;
                right: 0;
            }

            @media (max-width: 425px) {
                width: 500px;
            }
        }
    }
`;