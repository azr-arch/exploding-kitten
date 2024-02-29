import { CatCard } from "../cards";
import { shuffleArray } from "../lib/utils";

export const Shuffler = ({
    cards,
}: {
    cards: {
        type: string;
        revealed: boolean;
    }[];
}) => {
    const shuffledCards = shuffleArray(cards);

    return (
        <div className="flex flex-col w-[90%]">
            {shuffledCards.map((card) => {
                switch (card.type) {
                    case "cat":
                        return <CatCard onClick={} />;
                }
            })}
        </div>
    );
};
