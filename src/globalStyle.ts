import { createGlobalStyle } from "styled-components";

export const GlobalStyle =  createGlobalStyle`
    html, body {
        overflow-x: hidden;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        border: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }
`;
