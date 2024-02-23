import React from 'react'

function Buttons({ content }) {
    return (
        <>
            <div
                className="w-[542px] h-12 p-2.5 hover:bg-emerald-400 bg-emerald-600 rounded-[5px] 
                            shadow-lg justify-center items-center gap-[113px] 
                            inline-flex mt-[40px] transition-all 
                            duration-100 ease-in-out cursor-pointer shadow-gray-100 ">
                <button className="text-white text-2xl font-medium font-['Ubuntu']">{content}</button>
            </div>
        </>
    )
}

export default Buttons