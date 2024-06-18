import s from './Button.module.css'
import c from "./Counter.module.css";

type ButtonType = {
    title: string
    onClick: () => void
    disable: boolean
    className?: string
};
export const Button = ({title, onClick, disable, className}: ButtonType) => {
    return (
        <button className={`${s.button} ${disable ? s.disable : ''}`} onClick={onClick} disabled={disable}>{title}</button>
    );
};

