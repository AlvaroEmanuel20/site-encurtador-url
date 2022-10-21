import styled from "styled-components";

export const NavbarContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px 150px 0 150px;
    position: relative;

    @media (max-width: 1268px) {
        padding: 50px 40px 0 40px;
    }

    @media (max-width: 760px) {
        padding: 50px 20px 0 20px;
    }

    a {
        text-decoration: none;
        color: hsl(257, 7%, 63%);
        font-weight: bold;

        &:hover {
            color: hsl(255, 11%, 22%);
            transition-duration: 300ms;
        }
    }

    .nav__links {
        display: flex;
        align-items: center;
        gap: 40px;

        a img {
            padding-top: 5px;
        }

        nav {
            display: flex;
            gap: 25px;

            @media (max-width: 760px) {
                display: none;
            }
        }
    }

    .nav__buttons {
        display: flex;
        gap: 30px;
        align-items: center;

        @media (max-width: 760px) {
            display: none;
        }
    }

    .nav__responsive {
        display: none;

        @media (max-width: 760px) {
            display: block;
        }

        i {
            font-size: 2rem;
            color: hsl(0, 0%, 75%);
            cursor: pointer;

            &:hover {
                color: hsl(180, 66%, 49%);
                transition-duration: 300ms;
            }
        }

        @keyframes close-animation {
            0% {opacity: 0;}
            50% {opacity: 0.5;}
            100% {opacity: 1;}
        }

        #close {
            animation-name: close-animation;
            animation-duration: 1s;
        }
    }
`;
