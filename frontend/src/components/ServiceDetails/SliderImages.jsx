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
    <div className='md:w-auto w-[480px] ml-3'>
        <div className="text-neutral-800 lg:w-auto w-[250px] md:text-4xl text-md font-bold font-Ubuntu">Design a logo for your company or organization</div>
            <div className='my-5'>
                <span className="text-neutral-800 md:text-xl text-sm font-medium font-Ubuntu">Category:</span>
                <span className="text-neutral-800 md:text-xl text-sm font-normal font-Ubuntu"> Logo Designer</span>
            </div>
            <div className="grid md:gap-2 grid-col-5 md:w-[910px] w-[290px]" style={{width: '', height: ''}}>
                <img className="md:w-[910px] md:h-[396px] w-[290px] h-auto object-cover col-span-5" src={selected} />
                <div className='flex'>
                {images.map((image, index) => (
                    <img className="images-service" style={{opacity: image === selected ? 1 : 0.5 }} key={index} onClick={handleClick} name={image} src={image} />
                ))}
                </div>
                <div className='absolute'>
                    <div onClick={() =>handle_Click("left")} className="size[42px] md:opacity-100 opacity-0 p-3 left-[25px] top-[180px] hover:opacity-50 absolute bg-white rounded-full -rotate-180 shadow justify-center items-center gap-2.5 flex" >
                        <LiaGreaterThanSolid/>
                    </div>
                    <div onClick={() =>handle_Click("right")} className="size-[42px] p-2.5 left-[850px] md:opacity-100 opacity-0 top-[180px] hover:opacity-50 absolute bg-white rounded-full shadow justify-center items-center gap-2.5 flex">
                        <LiaGreaterThanSolid/>
                    </div>
                </div>
        </div>      
</div>
  )
}

export default SliderImages