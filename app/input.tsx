'use client';

import { HTMLAttributes, ReactElement, ReactEventHandler, useState } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
// import { toast } from "react-hot-toast";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
    id: string;
    type?: string;
    disabled?: boolean;
    required?: boolean;
    errors: FieldErrors;
    value?: string;
    onClick?: () => void;
    readonly?: boolean;
    w?: number;
}
const Input: React.FC<InputProps> = ({
    id,
    type = 'text',
    disabled,
    required,
    errors,
    value,
    onClick,
    readonly,
    className,
    w
}) => {

    // if (errors[id]?.type === 'required') toast.error(`${id.toUpperCase()} is required...`)

    return (
        <div className={``}>
            <input
                readOnly={readonly}
                id={id}
                max={'2010-01-01'}
                disabled={disabled}
                // {...register(id, { required })}
                placeholder=' '
                type={type}
                size={w}
                value={value}
                className={` outline-none ${className}`}
            />
        </div>
    );
};

// 
// peer py-3 px-2 font-light rounded-md
// transition disabled:opacity-70 disabled:cursor-not-allowed
export default Input;