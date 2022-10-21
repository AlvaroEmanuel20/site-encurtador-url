import { ButtonStyle, IButtonStyle } from "./style";

export interface IButton extends IButtonStyle {
    text: string;
    type?: "button" | "reset" | "submit";
}

interface IButtonCopy extends IButton {
    copyClipboard: () => void;
}

export const Button = ({
    text,
    padding,
    borderRadius,
    fontSize,
    type,
}: IButton) => {
    return (
        <ButtonStyle
            padding={padding}
            borderRadius={borderRadius}
            fontSize={fontSize}
            type={type ? type : "button"}
        >
            {text}
        </ButtonStyle>
    );
};

export const ButtonCopy = ({
    text,
    padding,
    borderRadius,
    fontSize,
    type,
    copyClipboard
}: IButtonCopy) => {
    return (
        <ButtonStyle
            padding={padding}
            borderRadius={borderRadius}
            fontSize={fontSize}
            type={type ? type : "button"}
            onClick={copyClipboard}
        >
            {text}
        </ButtonStyle>
    );
};
