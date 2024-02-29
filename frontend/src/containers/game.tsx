import { useState } from "react";
import { Deck } from "../components/deck";

export const Game = () => {
    const [hasStarted, setHasStarted] = useState(false);

    const startGame = () => {
        setHasStarted(true);
    };

    return (
        <div className="w-full h-full flex items-center justify-center bg-darkRed">
            {!hasStarted ? (
                <button
                    className="rounded-md text-4xl  text-white border-2 border-black bg-darkRed hover:bg-softRed active:scale-95 transition px-3 py-1"
                    onClick={startGame}
                >
                    Start Game
                </button>
            ) : (
                <Deck />
            )}
        </div>
    );
};
