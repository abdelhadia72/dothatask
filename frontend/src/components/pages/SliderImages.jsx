import React from 'react'
import { LiaGreaterThanSolid } from "react-icons/lia";
import design1 from '../assets/images/design1.png';;
import design2 from '../assets/images/design2.png';
import design3 from '../assets/images/design3.png';
import design4 from '../assets/images/design4.png';
import design5 from '../assets/images/design5.png';
import { useState } from "react";


function SliderImages() {
    const images = [design1, design2, design3, design4, design5]
    const [selected, setSelected] = useState(design2)
    const handleClick =(e)=>{{
            setSelected(e.target.name)
    }}
    const handle_Click = (direction) => {
        const currentIndex = images.indexOf(selected);
        let newIndex;

        if (direction === 'left') {
            newIndex = (currentIndex - 1 + images.length) % images.length;
        } else if (direction === 'right') {
            newIndex = (currentIndex + 1) % images.length;
        }

        setSelected(images[newIndex]);
    };
  return (
    <div className=''>
        <div className="text-neutral-800 lg:text-4xl text-xl font-bold font-Ubuntu">Design a logo for your company or organization</div>
            <div className='my-5'>
                <span className="text-neutral-800 lg:text-xl text-md font-medium font-Ubuntu">Category:</span>
                <span className="text-neutral-800 lg:text-xl text-md font-normal font-Ubuntu"> Logo Designer</span>
            </div>
            <div className="grid lg:gap-2 grid-col-5 lg:w-[910px] w-[300px]" style={{width: '', height: ''}}>
                <img className="lg:w-[910px] lg:h-[396px] w-[300px] h-auto object-cover col-span-5" src={selected} />
                {images.map((image, index) => (
                    <img className="images-service" style={{opacity: image === selected ? 1 : 0.5 }} key={index} onClick={handleClick} name={image} src={image} />
                ))}
                <div onClick={() =>handle_Click("left")} className="size[42px] lg:opacity-100 md:opacity-100 opacity-0 p-3 left-[25px] top-[313px] hover:opacity-50 absolute bg-white rounded-full -rotate-180 shadow justify-center items-center gap-2.5 flex" >
                    <LiaGreaterThanSolid/>
                </div>
                <div onClick={() =>handle_Click("right")} className="size-[42px] p-2.5 left-[850px] lg:opacity-100 opacity-0 top-[310px] hover:opacity-50 absolute bg-white rounded-full shadow justify-center items-center gap-2.5 flex">
                    <LiaGreaterThanSolid/>
                </div>
        </div>      
</div>
  )
}

export default SliderImages