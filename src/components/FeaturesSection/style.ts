import styled from "styled-components";

export const FeaturesContainer = styled.section`
    background-color: #EFF1F7;
    padding: 7rem 0;

    .features__title {
        text-align: center;

        @media (max-width: 760px) {
            padding: 0 20px;
        }

        h2 {
            color: hsl(255, 11%, 22%);
            font-size: 2.5rem;
            letter-spacing: -0.05rem;

            @media (max-width: 950px) {
                font-size: 2rem;
            }

            @media (max-width: 376px) {
                font-size: 1.8rem;
            }
        }

        p {
            margin-top: 10px;
            padding-bottom: 40px;
            color: hsl(257, 7%, 63%);
            font-size: 1.15rem;

            @media (max-width: 950px) {
                font-size: 1.1rem;
            }

            @media (max-width: 376px) {
                font-size: 1rem;
            }
        }
    }

    .features__cards {
        margin: 80px 150px 0 150px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;

        @media (max-width: 1268px) {
            margin: 80px 40px 0 40px;
        }

        @media (max-width: 900px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 760px) {
            margin: 80px 20px 0 20px;
        }

        @media (max-width: 660px) {
            grid-template-columns: 1fr;
        }

        .line {
            position: absolute;
            right: -3rem;

            @media (max-width: 900px) {
                display: none;
            }

            @media (max-width: 660px) {
                display: block;
            }
        }

        .card1, .card2 {
            position: relative;
        }

        .card1 {
            .line {
                top: 9.3rem;

                @media (max-width: 660px) {
                    top: 111%;
                    left: 45%;
                    transform: rotate(90deg);
                }

                @media (max-width: 540px) {
                    left: 43%;
                }

                @media (max-width: 401px) {
                    top: 110%;
                    left: 42%;
                }

                @media (max-width: 376px) {
                    top: 110%;
                    left: 41%;
                }
            }
        }

        .card2 {
            margin-top: 2.8rem;

            @media (max-width: 660px) {
                margin-top: 5rem;
            }

            .line {
                top: 6.5rem;

                @media (max-width: 660px) {
                    top: 110%;
                    left: 45%;
                    transform: rotate(90deg);
                }

                @media (max-width: 540px) {
                    left: 43%;
                }

                @media (max-width: 401px) {
                    left: 42%;
                }

                @media (max-width: 376px) {
                    top: 109%;
                    left: 41%;
                }
            }
        }

        .card3 {
            margin-top: 5.6rem;

            @media (max-width: 900px) {
                margin-top: 0;
            }

            @media (max-width: 660px) {
                margin-top: 5rem;
            }
        }
    }
`;