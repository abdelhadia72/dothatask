import React from 'react'

function Buttons({ content }) {
    return (
        <>
            <div
                className="md:w-[542px] w-[500px] h-12 p-2.5 hover:bg-emerald-400 bg-emerald-600 rounded-[5px] 
                            shadow-lg justify-center items-center gap-[113px] 
                            inline-flex mt-[40px] transition-all 
                            duration-100 ease-in-out cursor-pointer shadow-gray-100 ">
                <button className="text-white md:text-2xl text-xl font-medium font-['Ubuntu']">{content}</button>
            </div>
        </>
    )
}

export default Buttons