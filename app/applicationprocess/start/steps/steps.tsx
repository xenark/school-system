import React from 'react';
import Personal from './personalinfo';
import Final from './final';
import Programme from './programme';
import Identification from './identification';
import Declaration from './declaration';
import Exam from './exam';
import Education from './education';
import Guardian from './guardian';
import { FcInfo } from 'react-icons/fc';

interface StepProps {
    current: number
}

const Steps: React.FC<StepProps> = ({ current }) => {


    const content_switch = () => {
        switch (current) {
            case 0:
                return <Personal />; case 1:
                return <Guardian />; case 2:
                return <Education />; case 3:
                return <Exam />; case 4:
                return <Declaration />; case 5:
                return <Programme />; case 6:
                return <Identification />; case 7:
                return <Final />;
            default:
                return <Personal />;
        }

    }

    return (
        <div className='p-4'>
            <div className='border-b-[1px]'>
                <span>{'Fill in your personal information here'}</span>
                <span className='flex items-center gap-2'><FcInfo />
                    {'  Fields marked with '}
                    <span className='text-red-500 font-bold'>{' * '}</span>
                    {' are required. '}
                </span>
                <span>{'Your name order and spelling must be the same as that on your results'}</span>
            </div>
            {
                content_switch()
            }
        </div>
    );
};

export default Steps;