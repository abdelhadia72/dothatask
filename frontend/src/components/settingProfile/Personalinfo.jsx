import React from 'react'

function Personalinfo() {
  return (
    <div className="w-[650px] h-[538px] p-14 bg-white shadow flex-col justify-start items-start gap-10">
        <div className="text-neutral-800 text-2xl font-medium mb-10">Personal Information</div>
        <div className="w-[291px] h-[76px] flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="text-neutral-600 text-base font-normal ">First name</div>
            <input type='text' value='Alexender' className="w-[291px] h-12 p-2.5 bg-white rounded-[5px] shadow justify-start items-center gap-[113px] inline-flex" />
        </div>
    </div>
  )
}

export default Personalinfo