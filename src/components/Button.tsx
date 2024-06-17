type ButtonType = {
    title: string
    onClick: () => void
    disable: boolean
    className?: string
};
export const Button = ({title, onClick, disable, className}: ButtonType) => {
    return (
        <button className={className} onClick={onClick} disabled={disable}>{title}</button>
    );
};

