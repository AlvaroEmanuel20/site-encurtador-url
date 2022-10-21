import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: hsl(260, 8%, 14%);
    padding: 0 150px;

    @media (max-width: 1268px) {
        padding: 0 40px;
    }

    @media (max-width: 760px) {
        padding: 0 20px;
    }

    .footer__info {
        padding: 80px 0;
        display: flex;
        justify-content: space-between;
        gap: 20px;

        @media (max-width: 780px) {
            flex-wrap: wrap;
            gap: 40px;
        }

        @media (max-width: 376px) {
            padding: 60px 0;
            flex-direction: column;
            text-align: center;
            align-items: center;
        }

        .footer__logo {
            flex-grow: 3;

            img {
                filter: brightness(500%); 
            }
        }

        .footer__links {
            flex-grow: 1;

            h4 {
                color: #fff;
                margin-bottom: 20px;
            }

            ul {
                list-style: none;
                display: flex;
                flex-direction: column;
                gap: 10px;

                li > a {
                    text-decoration: none;
                    color: hsl(257, 7%, 63%);

                    &:hover {
                        color: hsl(180, 66%, 49%);
                        transition-duration: 300ms;
                    }
                }
            }
        }

        .footer__socials {
            display: flex;
            gap: 28px;
            
            a {
                color: #fff;
                font-size: 24px;

                &:hover {
                    color: hsl(180, 66%, 49%);
                    transition-duration: 300ms;
                }
            }
        }
    }

    .footer__attribution {
        padding-bottom: 20px;
        text-align: center;
        color: #fff;

        a {
            text-decoration: none;
            color: hsl(180, 66%, 49%);

            &:hover {
                text-decoration: underline;
            }
        }
    }
`;