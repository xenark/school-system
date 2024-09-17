'use client';

import { HTMLAttributes, ReactElement, ReactEventHandler, useState } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface LabelProps extends HTMLAttributes<HTMLLabelElement>{
    id: string;
    label: string;
    errors: FieldErrors,
    disabled?: boolean,
    required?: boolean
}
const Label: React.FC<LabelProps> = ({
    id,
    label,
    disabled,
    errors,
    required
}) => {


    // if (errors[id]?.type === 'required') toast.error(`${id.toUpperCase()} is required...`)

    return (
        <div className='relative my-1'>
            <label className={`
             bg-white text-sm 
             ${errors ? 'text-rose-500' : 'text-zinc-400'}
            `}>
                {label}
                {required && <span className="text-red-500">{'*'}</span>}
            </label>
        </div>
    );
};

export default Label;