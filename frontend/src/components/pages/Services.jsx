import React from 'react';
import SearchCategorie from '../areas/SearchCategorie';
import  worker  from '../assets/images/worker.jpg';
import construction from '../assets/images/construction.jpg';
import { FaStar } from "react-icons/fa";

function Services() {
  const searchedCategories = new Array(12).fill(0);

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='md:w-full relative bg-neutral-100 z-[-1]'>
        <div className="md:size-[314px] size-[140px] circle-design buttom-10 md:mt-[-70px] mt-[-50px] md:ml-[-111px] ml-[-200px] z-[-1]" />
        <div className='flex w-full items-center justify-center flex-col md:h-[45vh] h-[30vh] z-[-1]'>
          <div className="md:size-[238px] size-[95px] circle-design md:right-[-140px] bottom-[80px] right-[-150px]" />
          <div className="md:size-[320px] size-[150px] circle-design md:top-[120px] top-[90px] md:right-[-140px] right-[-150px]" />
          <span className="text-neutral-800 lg:text-5xl md:text-3xl text-xl md:w-[40%] w-auto text-center md:mt-[60px] py-9 font-ubuntu">Find The Right Tasker</span>
        </div>
      </div>
      <SearchCategorie />
      <div className="w-[1840px] opacity-70 h-[0px] border border-neutral-600 md:my-[80px] my-[20px]"></div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-8'>
        {searchedCategories.map(() => (
          <div className="w-[284px] h-[368px] flex-col justify-start items-start gap-1.5 my-5 inline-flex">
            <img className="w-[284px] h-[189px] rounded-[10px]" src={construction} />
            <div className="flex-col justify-start items-start gap-2.5 flex">
              <div className="justify-start items-center gap-3.5 inline-flex">
                <img className="size-8 object-cover rounded-full" src={worker} />
                <div className="text-center text-stone-950 text-base font-medium font-Ubuntu">Alexander Elijah</div>
              </div>
              <div className="flex-col justify-start items-start gap-[9px] flex">
                <div className="w-[268px] text-neutral-600 text-base font-normal font-Ubuntu">I bake a fresh and soft croissant with chocolate inside</div>
                <div className="justify-start items-center gap-[5px] inline-flex">
                  <FaStar className="size-5 text-do_green relative" />
                  <div className="text-center"><span className="text-stone-950 text-base font-medium font-Ubuntu">4.1 </span><span className="text-neutral-600 text-base font-medium font-['Ubuntu']">(11)</span></div>
                </div>
                <div className="text-center"><span className="text-stone-950 text-base font-normal font-Ubuntu">Category: </span><span className="text-neutral-600 text-base font-normal font-['Ubuntu']">Baker</span></div>
                <div className="justify-start items-start gap-[102px] inline-flex">
                  <div className="justify-start items-center gap-2 flex">
                    <div className="text-center"><span className="text-stone-950 text-base font-normal font-Ubuntu">From:</span><span className="text-stone-950 text-base font-medium font-['Ubuntu']"> </span><span className="text-neutral-600 text-base font-normal font-Ubuntu">Casablanca</span></div>
                  </div>
                  <div className="justify-start items-center gap-2 flex">
                    <div className="text-center text-stone-950 text-base font-medium font-Ubuntu">500 DH</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
