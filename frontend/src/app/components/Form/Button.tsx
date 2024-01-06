interface IButtonProps {
    title: string;
    className?: string;
}

export const Button = ({ title, className }: IButtonProps) => {
    return (
        <div className="flex items-center justify-center w-full">
            <button className={`bg-green rounded-2xl px-4 py-2 w-full ${className}`}>
                {title}
            </button>
        </div>
    );
};    