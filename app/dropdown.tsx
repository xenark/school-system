import { AiOutlineDown } from 'react-icons/ai';
import React, { HTMLAttributes, useCallback, useRef, useState } from 'react';
import FocusOut from './focusout';
import Label from './labels';
import Input from './input';
import { FieldErrors, FieldValues } from 'react-hook-form'


interface DropItems extends HTMLAttributes<HTMLDivElement> {
    title: string;
    list: string[];
    w: number;
    errors: FieldErrors
}
const Dropbox: React.FC<DropItems> = ({ title, list, w, errors }) => {


    const ref = useRef(null);


    const [currentVal, setVal] = useState(false);
    const [selection, setSelection] = useState('');

    const action = useCallback(() => {
        return setVal((value) => !value)
    }, [])

    const setInput = useCallback((value: string) => {
        setSelection(value);
        setVal((value) => !value)
    }, [setVal, setSelection])

    FocusOut(ref, setVal);

    return <div className='m-0 relative top-[150]'>
        <Label className='m-0' id={'1'} label={title} required errors={errors} />
        <div ref={ref} onClick={action} className='
        flex m-0 px-1 cursor-pointer items-center
        justify-center w-fit  rounded-md'>
            <Input readonly w={w} className={`cursor-pointer `} id={''} value={selection} errors={errors} />
            <div className=' relative'><AiOutlineDown size={20} /></div>
        </div>
        {currentVal
            &&
            <ul className=' border-purple-500 w-fit absolute h-auto z-10 left-0
                rounded-md bg-white shadow-lg py-2 px-5 my-2 max-h-[250px]
                overflow-auto border-2 border-t-white
                '>

                {list.map((val, i) => {
                    return <li key={i}
                        onClick={() => setInput(val)}
                        className='ttc hover:text-purple-500 cursor-pointer'>{val}</li>
                })}
            </ul>
        }
    </div>
}
export default Dropbox;