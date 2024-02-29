import { CardWrapper } from "./card-wrapper";

export const CatCard = ({ onClick }: { onClick: (key: string) => void }) => {
    return <CardWrapper title="cat" onClick={onClick} imagePath="/card/cat.jpg" />;
};

export const DefuseCard = ({ onClick }: { onClick: (key: string) => void }) => {
    return <CardWrapper title="defuse" onClick={onClick} imagePath="/card/defuse.png" />;
};

export const BoomCard = ({ onClick }: { onClick: (key: string) => void }) => {
    return <CardWrapper title="boom" onClick={onClick} imagePath="/card/boom.jpg" />;
};

export const ShuffleCard = ({ onClick }: { onClick: (key: string) => void }) => {
    return <CardWrapper title="shuffle" onClick={onClick} imagePath="/card/shuffle.jpg" />;
};
