import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { Button } from "../Button";
import { ShortenedCard } from "../ShortenedCard";
import { ShortenCardContainer } from "./style";

export interface ILinks {
    link: string;
    shortLink: string;
}

export const ShortenCard = () => {
    const [value, setValue] = useState("");
    const [links, setLinks] = useState<ILinks[]>();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
        setError("");
        setValue(e.target.value);
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!value) {
            setError(value ? "" : "Please add a link");
            return null;
        }

        const url = "https://api.shrtco.de/v2/shorten?url=" + value;
        const res = await fetch(url, {method: "POST"});
        const shortLink = await res.json();
        
        if (!shortLink.ok) {
            setError(shortLink.error);
        } else {
            const linksArray: ILinks[] = JSON.parse(
                localStorage.getItem("links") || "[]"
            );
            linksArray.push({
                link: value,
                shortLink: shortLink.result.full_short_link
            });
            setLinks(linksArray);
            localStorage.setItem("links", JSON.stringify(linksArray));
        }
    }

    useEffect(() => {
        const linksStoraged: ILinks[] = JSON.parse(
            localStorage.getItem("links") || "[]"
        );

        setLinks(linksStoraged);
        setLoading(false);
    }, []);

    return (
        <ShortenCardContainer error={error ? true : false}>
            <div className="shorten__form">
                <form onSubmit={handleSubmit}>
                    <div className="form__input">
                        <input 
                            type="url" 
                            placeholder="Shorten a link here..." 
                            value={value}
                            onChange={handleValue}
                        />

                        <p>{error && error}</p>
                    </div>

                    <Button
                        text="Shorten It!"
                        padding="16px 40px"
                        borderRadius="10px"
                        type="submit"
                    />
                </form>
            </div>

            <div className="shorten__results">
                {(!loading && links) && links.map((item, index) => 
                    <ShortenedCard
                        key={index}
                        link={item.link}
                        shortLink={item.shortLink}
                    />    
                )}
            </div>
        </ShortenCardContainer>
    );
}