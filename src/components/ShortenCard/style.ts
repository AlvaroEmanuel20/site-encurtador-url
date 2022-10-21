import styled from "styled-components";
import BgShorten from "../../assets/bg-shorten-desktop.svg";
import BgShortenMobile from "../../assets/bg-shorten-mobile.svg";

interface IShortenCard {
    error: boolean;
}

export const ShortenCardContainer = styled.section<IShortenCard>`
    margin-top: 60px;

    .shorten__form {
        background-color: hsl(257, 27%, 26%);
        background-image: url(${BgShorten});
        background-repeat: no-repeat;
        background-size: cover;
        margin: 0 150px;
        border-radius: 10px;
        padding: 50px 60px;
        position: relative;

        @media (max-width: 1268px) {
            margin: 0 40px;
        }

        @media (max-width: 760px) {
            margin: 0 20px;
            padding: 20px;
            background-image: url(${BgShortenMobile});
            background-position: 5.5rem -2rem;
        }

        form {
            display: flex;
            gap: 30px;

            @media (max-width: 760px) {
                flex-direction: column;
                gap: 15px;
            }

            .form__input {
                flex-grow: 1;
                position: relative;

                p {
                    position: absolute;
                    top: 4.4rem;
                    font-size: 15px;
                    color: hsl(0, 87%, 67%);
                    font-style: italic;

                    @media (max-width: 760px) {
                        position: static;
                        margin-top: 0.5rem;
                    }
                }
            }

            input {
                border-radius: 10px;
                padding: 16px 20px;
                font-size: 1.2rem;
                width: 100%;
                border: ${props => props.error ? "3px solid hsl(0, 87%, 67%)" : "0"};

                &::placeholder {
                    font-size: 1.15rem;
                    color: ${props => props.error ? "hsl(0, 87%, 83%)" : "hsl(0, 0%, 75%)"};
                }

                @media (max-width: 376px) {
                    font-size: 1rem;
                }
            }
        }
    }

    .shorten__results {
        background-color: #EFF1F7;
        margin-top: -4.7rem;
        padding: 6.2rem 150px 0 150px;
        display: flex;
        flex-direction: column;
        gap: 16px;

        @media (max-width: 1268px) {
            padding: 6.2rem 40px 0 40px;
        }

        @media (max-width: 760px) {
            padding: 6.2rem 20px 0 20px;
        }
    }
`;