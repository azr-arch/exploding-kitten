interface CardWrapperProps {
    imagePath?: string;
    title: string;
    onClick: (cardTitle: string) => void;
}

export const CardWrapper = ({ title, imagePath, onClick }: CardWrapperProps) => {
    return (
        <div
            onClick={() => onClick(title)}
            className="rounded-3xl w-[200px] h-[300px] p-8 bg-white shadow-md flex flex-col justify-between"
        >
            <p className=" text-2xl">{title}</p>
            <img src={imagePath} alt={title} className="w-[100%] aspect-square object-contain" />
            <p className="ml-auto text-2xl">{title}</p>
        </div>
    );
};
