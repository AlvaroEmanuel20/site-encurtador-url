import { useRef } from "react";
import { CopyButton } from "../CopyButton";
import { ShortenedCardStyle } from "./style";

interface IShortenedCard {
    link: string;
    shortLink: string;
}

export const ShortenedCard = ({link, shortLink}: IShortenedCard) => {
    const inputShortLink = useRef<null | HTMLInputElement>(null);
    const copyToClipboard = () => {
        inputShortLink.current?.select();
        inputShortLink.current?.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(inputShortLink.current?.value || "");
    }

    return (
        <ShortenedCardStyle>
            <div className="original__link">
                <a href={link}>{link}</a>
            </div>

            <div className="shortened__link">
                <div>
                    <a href={shortLink}>{shortLink}</a>
                    <input ref={inputShortLink} type="url" defaultValue={shortLink}/>
                </div>

                <CopyButton
                    text="Copy"
                    borderRadius="8px"
                    padding="9px 34px"
                    fontSize="1rem"
                    copyClipboard={copyToClipboard}
                />
            </div>
        </ShortenedCardStyle>
    );
}