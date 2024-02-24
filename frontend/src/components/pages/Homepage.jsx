import React from 'react'

function Homepage() {
    return (
        <div className='md:w-full relative bg-neutral-100 z-[-1]'>
            <div className='block w-full md:h-[45vh] h-[30vh]'>
                <div className="md:size-[314px] size-[140px] circle-design buttom-10 md:mt-[-70px] mt-[-50px] md:ml-[-111px] ml-[-50px] z-[-1]" />
                <div className="md:size-[238px] size-[95px]  circle-design md:right-[-140px] right-[-50px]" />
                <div className="md:size-[320px] size-[150px] circle-design md:top-[122px] top-[50px] md:right-[-140px] right-[-50px]" />
                <span className="text-neutral-800 lg:text-5xl md:text-3xl text-xl md:left-[33%] sm:left-[30%] left-[30%] absolute mx-auto w-[40%] text-center md:mt-[60px] py-9 font-bold">Find The Right Tasker</span>
            </div>
            <div>
                <div className="flex justify-center items-center">
                    <input type='text' placeholder='Place' className=" place-input rounded-tl-[40px] rounded-bl-[40px]" />
                    <input type='text' placeholder='categorie' className="place-input" />
                    <button className=" md:text-2xl sm:text-lg text-sm font-light bg-emerald-600 md:h-16 h-12 text-white rounded-tr-[40px] md:w-[195px] w-[90px] rounded-br-[40px]"> Search </button>
                </div>
            </div>
        </div>
    )
}

export default Homepage