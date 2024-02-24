import React from 'react'
import { CiCircleCheck } from "react-icons/ci";

function Emailsent() {
    return (
        <div className='w-full flex  relative bg-neutral-100'>
            <div className='custom-dynamic-style'>
                <div className='w-full flex gap-3 justify-center items-center'>
                    <CiCircleCheck className='size-[50px] relative text-emerald-600' />
                    <div className="text-stone-950 md:text-5xl text-xl font-bold ">
                        Check you email
                    </div>
                </div>
                <p className='text-neutral-600 text-xl text-center mt-4 font-medium lg:w-[542px] md:w-[480px] w-[225px]'>Your password update intructions are on their way! Check you email to reset your passwordwithin the next hour</p>
                <h3 className="text-emerald-600 font-bold text-[32px] font-['Ubuntu']">Thank you</h3>
            </div>
        </div>
    )
}

export default Emailsent