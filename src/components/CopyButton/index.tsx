import { IButton } from "../Button";
import { useState } from "react";
import { CopyButtonStyle } from "./style";

interface IButtonCopy extends IButton {
    copyClipboard: () => void;
}

export const CopyButton = ({
    text,
    padding,
    borderRadius,
    fontSize,
    type,
    copyClipboard
}: IButtonCopy) => {
    const [copyed, setCopyed] = useState(false);
    const copyedFeature = () => {
        copyClipboard();
        setCopyed(true);
        setTimeout(() => setCopyed(false), 500);
    }

    return (
        <CopyButtonStyle
            padding={padding}
            borderRadius={borderRadius}
            fontSize={fontSize}
            type={type ? type : "button"}
            onClick={copyedFeature}
        >
            {!copyed ? text : "Copied!"}
        </CopyButtonStyle>
    );
};
