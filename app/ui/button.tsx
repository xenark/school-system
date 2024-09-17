
import { HTMLAttributes } from "react";
import { IconType } from "react-icons/lib";

interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    icon?: IconType;
    outline?: boolean
    def?: boolean
    className?: string
}

const Button: React.FC<ButtonProps> = ({def, outline, className, label, onClick, disabled, icon: Icon }) => {


    return (
        <button
            onClick={onClick} disabled={disabled}
            className={`  ${outline? 'outline': ''} ${def? 'outline-gray-200': ''} py-2 px-3 disabled:bg-slate-400 disabled:opacitiy-70 disabled:cursor-not-allowed
            ${className} transition hover:shadow-lg rounded-lg relative flex justify-center items-center`}>
            {Icon && (
                <Icon size={24} className="mr-4"/>
            )}
            {label}</button>
    );
};

export default Button;