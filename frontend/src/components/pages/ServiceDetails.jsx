import React, { useState } from 'react'
import SliderImages from '../ServiceDetails/SliderImages';
import ServiceProfile from '../ServiceDetails/ServiceProfile';
import Advertisement from '../ServiceDetails/Advertisement';
import { Comment } from '../Profile/Comment';

function ServiceDetails() {
  const commentsNumber = 6
  return (
    <div className='relative bg-neutral-100 md:m-[50px] flex flex-col justify-center items-center'>
      <div className='md:w-[1300px] w-[360px] lg:ml-24 flex lg:flex-row flex-col lg:items-center lg:justify-center md:gap-[40px] gap-[5px] md:m-[20px]'>
        <SliderImages />
          <ServiceProfile/>
      </div>
      <Advertisement/>
      <div className="md:w-[1330px] w-[405px] h-auto md:p-9 p-5 md:m-[20px] ml-3 mt-3 bg-white shadow gap-10">
        <div className="text-neutral-800 text-2xl font-bold font-Ubuntu">What people loved about this seller</div>
        {Array(commentsNumber).fill().map((_, index) => (
          <Comment key={index} />
        ))}
      </div>
    </div>
  )
}

export default ServiceDetails