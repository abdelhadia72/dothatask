import React, { useState } from 'react'
import SliderImages from './SliderImages';
import ServiceProfile from './ServiceProfile';

function ServiceDetails() {
  return (
    <div className='relative bg-neutral-100 md:m-[50px] flex flex-col justify-center items-center'>
      <div className='md:w-[1300px] w-[400px] flex items-center justify-center md:gap-[40px] gap-[5px] md:m-[20px]'>
        <SliderImages />
          <ServiceProfile/>
      </div>
        <div className="md:w-[1330px] w-[405px] h-auto md:p-9 p-5 md:m-[20px] ml-3 mt-3 bg-white shadow gap-10">
            <div className="text-neutral-800 md:text-2xl text-sm font-bold font-Ubuntu my-5">About This Advertisement</div>
            <div className="self-stretch md:w-[1050px] w-[280px]">
              <span className="text-neutral-800 md:text-xl text-sm font-normal font-Ubuntu">Welcome to my Modern Minimalist Luxury Logo Design Gig. <br/> <br/> Are you looking for a Minimalist logo design? Look no further! Why nowadays we see mostly Minimal logos for successful brands like Instagram, Twitter & many more? Because it’s an Era of the clean and minimal theme.<br/> <br/> WHY ME:<br/> <br/>
              <ul className='list-disc ml-8 md:text-md text-xs'>
                <li>Talented and Dedicated Designer</li>
                <li>Fully custom made, creative, original, UNIQUE and AWESOME designs</li>
                <li>48 to 72 hrs super fast delivery</li>
                <li>Professional customer support 24/7</li>
                <li>High Quality work 100% money back policy if not satisfied</li>
                <li>Swift Communication</li>
                <li>Money-Back Guarantee</li>
                <li>Unlimited Revisions Depending upon the Package</li>
              </ul>
              <br/>
              <br/>
              Minimalist Logo | Minimal | Professional | Modern | Text | Vintage | Badge | Hand drawn | Feminine | Signature | Logo Design | Monogram | Real Estate Logo | Luxury 
              <br/>
              <br/>
              Order right now or you will regret by not getting your logo designed by the most amazing and professional designer :)</span></div>
        </div>
    </div>
  )
}

export default ServiceDetails