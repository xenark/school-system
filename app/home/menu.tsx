import React, { HtmlHTMLAttributes } from 'react';
import { IconType } from 'react-icons';
import { packages } from '../lib/localdatabase';

type mypackage = typeof packages;

interface MenuProps {
    label?: mypackage
}
const Menu: React.FC<MenuProps> = ({label}) => {

    return (
        <div className={`bg-white text-neutral-500 rounded-lg w-max h-max`}>
            {
                label?.map((list, i)=> {

                    return <div key={i} className='flex'> 
                       <div className='text-purple-500 p-2 pl-5 w-max'>
                        <list.icon key={i} size={24} />
                        </div>
                        <div className='hover:text-purple-500 p-2 pr-10'>
                            {list.description}
                        </div>
                    </div>
                })
            }

        </div>
    );
};

export default Menu;

export const NmMenu  = (label: string[]) => {

    return (
        <div className={`bg-white text-neutral-500 rounded-lg w-full h-max`}>
            {
                label?.map((list, i)=> {

                    return <div key={i}> 
                        <div className='hover:text-purple-500 p-2 pr-10'>
                            {list}
                        </div>
                    </div>
                })
            }

        </div>
    );
};