import React from 'react'

function Footer() {
    const categories = ["Photographer", "builder", "Electrician", "Baker", "Painter", "Barber", "Designer"]
    return (
        <div div className="w-full h-auto] mx-auto bg-white shadow">
            <div className="w-full h-[0px] border border-neutral-600 my-[80px]"></div>
            <div className="flex justify-start items-baseline">
                <div className="text-do_green ml-5 md:mx-[120px] mx-[70px] md:text-[50px] text-[30px] font-normal font-abril">Dothatask</div>
                <div className='flex flex-col gap-2 mt-[-20px] mb-[97px] mr-[50px]'>
                    <div className="text-neutral-800 md:text-2xl text-[20px] font-medium font-Ubuntu">Categories</div>
                    {categories.map((e) =>
                        <a className="text-do_gray_text hover:do_hover_gray_text md:text-[22px] text-[17px] cursor-pointer font-medium font-Ubuntu">{e}</a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Footer