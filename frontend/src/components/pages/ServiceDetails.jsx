import React, { useState } from 'react'
import worker from '../assets/images/worker.jpg';
import SliderImages from './SliderImages';
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

function ServiceDetails() {
    const rating = 4
    const remain = 5 - rating

  return (
    <div className='w-full flex relative bg-neutral-100 lg:m-[100px] md:m-[60px] lg:gap-[50px] gap-[2px] m-[20px]'>
       <SliderImages />
    <div className="lg:w-[371px] lg:h-[495px] w-[200px] h-[190px] pt-3 p-[30px] mt-[110px] pl-2 bg-white shadow flex-col justify-start items-start lg:gap-[57px] gap-[10px] inline-flex">
    <div className="justify-start items-center lg:gap-[17px] gap-[2px] inline-flex">
        <img className="lg:size-[50px] size-[30px] object-cover rounded-full" src={worker} />
        <div className="text-center text-stone-950 lg:text-xl text-sm font-medium font-Ubuntu">Alexander Elijah</div>
    </div>
    <div className="flex-col justify-start items-start lg:gap-9 gap-[4px] flex">
        <div className="justify-start items-end gap-2.5 inline-flex">
            <div className="text-center text-stone-950 lg:pb-0 pb-1 lg:text-2xl text-sm font-normal font-Ubuntu">Ratings:</div>
            <div className="justify-start items-center gap-1 flex">
                <div className="justify-start items-start flex">
                    {Array(rating).fill().map((_, index) => (
                        <FaStar key={index} className="lg:size-[30px] size-[15px]  relative text-do_green" />
                        ))}
                    {
                        Array(remain).fill().map((_, index) => 
                        <FaRegStar key={index} className="lg:size-[30px] size-[15px] relative text-do_green" />
                        )}
                </div>
                <div className="text-center text-neutral-600 lg:text-2xl text-sm font-normal font-Ubuntu">(11)</div>
            </div>
        </div>
        <div className="text-center"><span className="text-stone-950 lg:text-2xl text-sm font-normal font-Ubuntu">Orders: </span><span className="text-stone-950 lg:text-2xl text-sm font-light font-Ubuntu">33</span></div>
        <div className="text-center"><span className="text-stone-950 lg:text-2xl text-sm font-normal font-Ubuntu">From: </span><span className="text-stone-950 lg:text-2xl text-sm font-light font-Ubuntu">Casablanca</span></div>
        <div className="text-left flex gap-[1px]"><span className="text-stone-950 lg:text-2xl text-sm font-normal font-Ubuntu">Phone Number: </span><span className="text-stone-950 lg:text-2xl text-sm font-light font-Ubuntu">0611214110</span></div>
        <div className="text-center"><span className="text-stone-950 lg:text-2xl text-sm font-normal font-Ubuntu">Service Price: </span><span className="text-stone-950 lg:text-2xl text-sm font-light font-Ubuntu">500DH</span></div>
    </div>
</div>
    </div>
  )
}

export default ServiceDetails