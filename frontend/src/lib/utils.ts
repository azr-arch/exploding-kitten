import { redirect } from "react-router-dom";

export const getAuth = () => {
    const username = localStorage.getItem("username");
    if (!username) {
        // Not logged in
        throw redirect("/new");
    }
    return true;
};

export const shuffleArray = (
    array: {
        type: string;
        revealed: boolean;
    }[]
) => {
    const shuffledArray = [...array]; // Create a copy of the original array

    for (let i = shuffledArray.length - 1; i > 0; i--) {
        // Generate a random index between 0 and i (inclusive)
        const randomIndex = Math.floor(Math.random() * (i + 1));

        // Swap elements at randomIndex and i
        [shuffledArray[i], shuffledArray[randomIndex]] = [
            shuffledArray[randomIndex],
            shuffledArray[i],
        ];
    }

    return shuffledArray;
};
