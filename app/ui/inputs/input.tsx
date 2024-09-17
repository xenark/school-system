'use client';

import { ReactElement, ReactEventHandler, useState } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
// import { toast } from "react-hot-toast";

interface InputProps {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors
}
const Input: React.FC<InputProps> = ({
    id,
    label,
    type = 'text',
    disabled,
    register,
    required,
    errors
}) => {


    // if (errors[id]?.type === 'required') toast.error(`${id.toUpperCase()} is required...`)

    return (
        <div className='w-full relative my-1'>

            <input

                id={id}
                disabled={disabled}
                {...register(id, { required })}
                placeholder=' '
                type={type}
                className={`
           min-w-80 peer w-full p-4 pt-2 font-light bg-white border-2 rounded-md outline-none
            transition disabled:opacity-70 disabled:cursor-not-allowed
            ${errors[id] ? 'border-rose-500 focus:border-rose-500' : 'border-neutral-300 focus:border-blue'}`}
            />
            <label className={`
             bg-white px-2 absolute text-sm top-1 left-5 text-md duration-150 z-10 transform -translate-y-3 origin-[0]
             peer-placeholder-shown:scale-75
             peer-focus:bg-white
            
            
            ${errors[id] ? 'text-rose-500' : 'text-zinc-400'}`}>
                {label}
            </label>
        </div>
    );
};

export default Input;