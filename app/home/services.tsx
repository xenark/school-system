import React from "react";
import LinkStyle from "../link";

interface ServiceProps {

}
const Services: React.FC<ServiceProps> = () => {

    return (
        <div className="mt-4 px-5 py-8 text-white flex flex-col items-center justify-center">

            <div className="grid grid-cols-1 gap-4">
                <div className="text-4xl">
                    {'EaseMS is now used by over '}
                    <span className="text-purple-500">{'1 million'} </span>
                    {'people worldwide!'}
                </div>
                <div className="text-4xl text-center">
                    {'The Management System for everyone'}
                </div>
                
            </div>
            <LinkStyle className="
            transform transition
            hover:translate-y-3 
            bg-rose-500 p-2 px-4 rounded my-5"
                link={"/landingpage/register"} value={"Explore"} />
        </div>
    );
};

export default Services;