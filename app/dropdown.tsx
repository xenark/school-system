import { AiFillBell, AiFillDownCircle, AiFillDownSquare, AiFillUpCircle, AiOutlineDown } from 'react-icons/ai';
import React, { HTMLAttributes, useCallback, useRef, useState } from 'react';
import Menu, { NmMenu } from './home/menu';
import { packages } from './lib/localdatabase';
import FocusOut from './focusout';
type mypackage = typeof packages;
import Label from './labels';
import Input from './input';
import { FcDown, FcUpRight } from 'react-icons/fc';


// export const Dropdown = ((value: string, list?: mypackage, i?: number) => {


//     const [index, setIndex] = useState(Number);
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleIsOpen = useCallback(() => {
//         return setIsOpen((value) => !value)
//     }, [setIsOpen])


//     let ref = useRef(null);

//     FocusOut(ref, setIsOpen)

//     return <div className='flex relative px-4 cursor-pointer font-semibold items-center'>
//         <div ref={ref}
//             onMouseOver={() => {
//                 list && setIndex(i as number);
//                 list && toggleIsOpen();
//             }}
//             onMouseLeave={() => !list && toggleIsOpen()}
//             onClick={list && toggleIsOpen}
//             className={`flex relative items-center`}
//         >
//             {value}
//             {list ? <span className='ml-2'><AiOutlineDown /></span> : ''}
//         </div>
//         {
//             <div
//                 onMouseLeave={toggleIsOpen}
//                 className={`${isOpen && index === i ? 'visible' : 'invisible'} z-10 absolute left-0 top-10  `}>
//                 <Menu label={list} />
//             </div>
//         }
//     </div >
// })



const NMDropdown = ((list: string[], i?: number) => {


    // const [index, setIndex] = useState(Number);
    // const [isOpen, setIsOpen] = useState(false);

    // const toggleIsOpen = useCallback(() => {
    //     return setIsOpen((value) => !value)
    // }, [setIsOpen])


    // let ref = useRef(null);

    // const value = list.filter((mylist) => mylist === list[i as number]);
    // console.log(value)
    // console.log(list[1])
    // FocusOut(ref, setIsOpen)

    return <div className='flex relative px-4 cursor-pointer rounded-lg font-semibold items-center'>
        <div
            // onMouseOver={() => {
            //     list && setIndex(i as number);
            // }}
            // onClick={list && toggleIsOpen}
            className={`flex relative items-center`}
        >
            {list ? <span className='ml-2'><AiOutlineDown /></span> : ''}
        </div>
        {
            <div
                className={`${'visibl invisible'} z-10 absolute left-0 top-10  `}>
                {NmMenu(list)}
            </div>
        }
    </div >
})

interface DropItems extends HTMLAttributes<HTMLDivElement> {
    title: string;
    list: string[];
    w: number
}
const Dropbox: React.FC<DropItems> = ({ title, list, w }) => {


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
        <Label className='m-0' id={'1'} label={title} required />
        <div ref={ref} onClick={action} className='flex m-0 px-1 
        cursor-pointer items-center justify-center
            w-fit  rounded-md ' >
            <Input readonly w={w} className={`cursor-pointer `} id={''} value={selection} errors={undefined} />
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