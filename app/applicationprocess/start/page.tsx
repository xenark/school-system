'use client'
import { useRouter } from "next/navigation";
import Avatar from "@/app/ui/avatar";
import { modules } from "@/app/lib/localdatabase";
import { IconType } from "react-icons";
import Button from "@/app/ui/button";
import Steps from "./steps/steps";
import { useCallback, useState } from "react";
import { FcCamera, FcCameraAddon, FcCompactCamera, FcRotateCamera } from "react-icons/fc";
import { AiFillCamera, AiOutlineCamera, AiOutlineLoading, AiOutlineLoading3Quarters } from "react-icons/ai";

interface Authprops {
    actionLabel: string,
    onSubmit: () => void;
    body?: React.ReactElement;
}

const Start = ({}) => {

    const router = useRouter();
    let [currentStage, setCurrentStage] = useState(0);
    let [disabled, setDisabled] = useState(false);

    const nothing = ()=> {}

    const next = useCallback(() => {
        currentStage < modules.length - 1 ? setCurrentStage(currentStage + 1) : setDisabled(true);

    }, [currentStage])

    const action = () => {
        setCurrentStage(currentStage - 1); setDisabled(false)
    }
    const prev = useCallback(() => {
        if (currentStage !== 0) action();
    }, [currentStage, action])


    const bgstyle = {
        backgroundImage: ``,

    }
    return (
        <div className="
        w-full
        h-full
        gap-3
        
        flex
          ">
            <div className="
            md:w-max
            sm:w-9/12
            w-full
        bg-purple-500
        text-white
            p-7
            flex flex-col">
                <div
                    onClick={() => router.push('/')} className="relative flex flex-col cursor-default justify-start items-center my-6">
                    <Avatar
                        className="border-2 border-black rounded-full shadow-md 
               hover:animate-spin" width={120}
                        height={120} />
                    <div className="relative bottom-[55px] right-[-55px] 
                    rounded-full cursor-pointer text-white bg-pink-500 p-1">    <AiFillCamera size={22} />
                    </div>
                    <span className="font-bold ml-3 my-2">{'Logged in as: null'}</span>
                    <span className="font-light  ml-3 my-1">{'ID: null'}</span>
                </div>
                <div>
                    {modules.map((mode, i) => {
                        return <div className="flex min-w-fit  rounded-md my-1
                        items-center gap-2 " key={i}>
                            <div className="py-[5px] flex items-center">
                                <span className=" bg-white rounded w-max p-1 mr-2 text-pink-500">
                                    <mode.icon size={24} />
                                </span>
                                <span className="col-span-2">
                                    {mode.name}
                                </span>
                            </div>
                            {currentStage === i && <span className="animate-spin mr-3 ml-auto">
                                <AiOutlineLoading3Quarters />
                            </span>}
                        </div>
                    })}
                </div>
            </div>
            <div className="
            h-full
            hidden
            md:block
            flex-grow
            " style={undefined}>
                <div className='shadow-md  border-2 my-2 rounded-lg mr-2
                max-w-[73vw]
                overflow-x-hidden
                '>
                    <div className="flex 
                overflow-x-scroll
                w-max

                ">

                    </div>
                    <div className="w-full">
                        <Steps current={currentStage} />
                    </div>

                </div>
                <div className="w-full flex gap-5 items-center justify-center">
                    {currentStage === 0 ? null : <Button className="bg-green-500 text-white" label={'Previous'} onClick={prev} />
                    }
                    <Button disabled={disabled} className="bg-green-500 text-white" label={'Save and Continue'} onClick={next} />
                    <Button className="bg-red-500 text-white" label={'Save and Exit'} onClick={nothing} />
                </div>
            </div>

        </div>
    );
};

export default Start;