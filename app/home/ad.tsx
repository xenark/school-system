import React, { ReactNode } from 'react';
interface adProps {
    children: ReactNode
}
const Ad = () => {
    return (
        <div className='p-4 w-full flex text-purple-500 font-bold bg-white justify-center'>
            {'Join the best.... Try now..   Risk Free!'}
        </div>
    );
};

export default Ad;