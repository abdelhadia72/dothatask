import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import worker from '../assets/images/worker.jpg';


function ServiceProfile() {
    const rating = 4
    const remain = 5 - rating
  return (
    <div className="md:w-[390px] lg:bg-white md:h-[495px] w-[280px] h-[180px] pt-4 p-[30px] ml-5  lg:mt-[120px] mt-8 pl-2 shadow flex-col justify-start items-start md:gap-[57px] gap-[10px].">
    <div className="justify-start items-center md:gap-[17px] gap-[2px] inline-flex">
        <img className="md:size-[50px] size-[15px] object-cover rounded-full" src={worker} />
        <div className="text-center text-stone-950 md:text-xl text-xs font-medium font-Ubuntu">Alexander Elijah</div>
    </div>
    <div className="flex-col justify-start items-start md:gap-9 flex w-[150px] h-[90px]">
        <div className="justify-start items-end gap-2.5 inline-flex">
            <div className="text-center text-stone-950 md:text-2xl text-xs font-normal font-Ubuntu">Ratings:</div>
            <div className="justify-start items-center gap-1 flex">
                <div className="justify-start items-start flex">
                    {Array(rating).fill().map((_, index) => (
                        <FaStar key={index} className="md:size-[30px] size-[12px]  relative text-do_green" />
                        ))}
                    {
                        Array(remain).fill().map((_, index) => 
                        <FaRegStar key={index} className="md:size-[30px] size-[12px] relative text-do_green" />
                        )}
                </div>
                <div className="text-center text-neutral-600 md:text-2xl text-xs font-normal font-Ubuntu">(11)</div>
            </div>
        </div>
        <div className="text-center"><span className="text-stone-950 md:text-2xl text-xs font-normal font-Ubuntu">Orders: </span><span className="text-stone-950 md:text-2xl text-xs font-light font-Ubuntu">33</span></div>
        <div className="text-center flex gap-[2px]"><span className="text-stone-950 md:text-2xl text-xs font-normal font-Ubuntu">From: </span><span className="text-stone-950 md:text-2xl text-xs font-light font-Ubuntu">Casablanca</span></div>
        <div className="text-left "><span className="text-stone-950 md:w-[250px] w-auto md:text-2xl text-xs font-normal font-Ubuntu">Phone Number: </span><span className="text-stone-950 md:text-2xl text-xs font-light font-Ubuntu">0611214110</span></div>
        <div className="text-left flex gap-[2px]"><span className="text-stone-950 md:w-[140px] w-auto md:text-2xl text-xs font-normal font-Ubuntu">Service Price: </span><span className="text-stone-950 md:text-2xl text-xs font-light font-Ubuntu">500DH</span></div>
    </div>
</div>
  )
}

export default ServiceProfile