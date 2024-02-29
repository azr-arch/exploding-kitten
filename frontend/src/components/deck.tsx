import { useState } from "react";
import { CatCard } from "../cards";
import { Shuffler } from "./shuffler";

export const Deck = () => {
    const [cards, setCards] = useState([
        { type: "cat", revealed: false },
        { type: "defuse", revealed: false },
        { type: "shuffle", revealed: false },
        { type: "boom", revealed: false },
    ]);

    return (
        <div>
            <Shuffler cards={cards} />
        </div>
    );
};
