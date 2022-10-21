import styled from "styled-components";

export const ShortenedCardStyle = styled.article`
    background-color: #fff;
    padding: 15px 0;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
    border-radius: 8px;

    @media (max-width: 950px) {
        flex-direction: column;
        align-items: flex-start;
    }

    @media (max-width: 600px) {
        gap: 15px;
    }

    a {
        text-decoration: none;
        font-size: 1.2rem;

        @media (max-width: 376px) {
            font-size: 1rem;
        }
    }

    .original__link {
        padding: 0 25px;

        @media (max-width: 950px) {
            border-bottom: 1px solid hsl(0, 0%, 88%);
            min-width: 100%;
            padding: 0 25px 15px 25px;
        }

        @media (max-width: 600px) {
            padding: 0 15px 15px 15px;
            max-width: 305px;
            overflow-x: auto;
        }

        a {
            color: hsl(255, 11%, 22%);
        }
    }

    .shortened__link {
        display: flex;
        align-items: center;
        gap: 25px;
        padding: 0 25px;

        @media (max-width: 950px) {
            min-width: 100%;
            justify-content: space-between;
        }

        @media (max-width: 600px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
            padding: 0 15px;
        }

        a {
            color: hsl(180, 66%, 49%);
        }

        input {
            display: none;
        }
    }
`;