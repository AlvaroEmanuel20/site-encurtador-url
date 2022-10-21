import styled from "styled-components";
import { IMenuMobile } from ".";

export const MenuMobileContainer = styled.div<IMenuMobile>`
    background-color: hsl(257, 27%, 26%);
    border-radius: 10px;
    padding: 35px 20px;
    position: absolute;
    top: 7.5rem;
    right: 20px;
    z-index: 10;
    min-width: 335px;
    display: ${props => props.isOpen ? "block" : "none"};

    @media (min-width: 760px) {
        display: none;
    }

    nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 25px;
        padding-bottom: 30px;
        margin-bottom: 30px;
        border-bottom: 1px solid hsl(257, 7%, 40%);

        a {
            color: #fff;
            font-size: 1.1rem;

            &:hover {
                color: #fff;
                text-decoration: underline;
            }
        }
    }

    div {
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 25px;

        a {
            font-size: 1.1rem;
            color: #fff;

            &:hover {
                color: #fff;
                text-decoration: underline;
            }
        }
    }
`;