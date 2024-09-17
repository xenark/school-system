import React, { ReactNode } from 'react';
interface adProps {
    children: ReactNode
}
const Slides = () => {
    return (
        <div className='p-6 w-full flex bg-slate-500 font-bold text-white justify-center'>
            {'Join the best.... Try now..   Risk Free!'}
        </div>
    );
};

export default Slides;