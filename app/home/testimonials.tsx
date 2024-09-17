import React from 'react';
import { messages } from '../lib/localdatabase';
import Avatar from '../ui/avatar';
// import { useCountries } from '../hooks/usecountries';


import { SwiperOptions } from 'swiper/types';
import 'swiper/css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Swiper components, modules and styles
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type userMessage = typeof messages;
interface TestimonialsMessages {
    user?: userMessage
}
const Testimonials: React.FC<TestimonialsMessages> = ({ user: userMessage }) => {

    return (
        <div>
           <div className='text-4xl my-4 mb-8 text-white font-semibold grid
           items-center w-full justify-center'> {'What others are saying...'}</div>
      <div className='w-full'>


            <Swiper
                speed={7700}
                breakpoints={
                    {
                        500: { slidesPerView: 1 },
                        700: { slidesPerView: 2 },
                        1200: { slidesPerView: 3 },
                    }
                }
                autoplay={
                    {
                        delay: 5000,
                        disableOnInteraction: false,
                    }

                }
                loop={true}
                slidesPerView={3}
                modules={[Autoplay]}>
                {
                    userMessage?.map((info, id) => {
                        return <SwiperSlide key={id}>
                            <div className='p-8 flex mx-4 shadow-2xl shadow-inner cursor-default
                             flex-col w-max h-max bg-black font-semibold rounded-lg text-white'>
                                <span className='text-purple-500'>
                                    {`${info.location}`}
                                </span>
                                <span className='my-4 w-[300px] text-justify text-white'>
                                    {`"${info.message}"`}
                                </span>

                                <div className='flex mt-3 w-full'>
                                    <section>
                                    <Avatar className='rounded-full mr-5'
                                        src={info.image}
                                        width={50}
                                        height={50} />
                                    </section>
                                
                                   <section className='grid'>
                                    <span>
                                    {info.name}
                                    </span>
                                    
                                    <span className='font-small'>
                                    {info?.job ? info?.job : 'unemployed'}
                                    </span>
                                    </section> 
                                </div>
                            </div>
                        </SwiperSlide>
                    })
                }
            </Swiper>


        </div>
        </div>
    );
};

export default Testimonials;