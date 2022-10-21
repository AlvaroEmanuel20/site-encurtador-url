import styled from "styled-components";

export interface IButtonStyle {
    padding?: string;
    borderRadius?: string;
    fontSize?: string;
}

export const ButtonStyle = styled.button<IButtonStyle>`
    background-color: hsl(180, 66%, 49%);
    color: #fff;
    padding: ${props => props.padding || "14px 40px"};
    border-radius: ${props => props.borderRadius || "30px"};
    font-weight: bold;
    font-size: ${props => props.fontSize || "1.2rem"};
    cursor: pointer;

    &:hover {
        color: #fff;
        background-color: hsl(255, 11%, 22%);
        transition-duration: 300ms;
    }
`;
