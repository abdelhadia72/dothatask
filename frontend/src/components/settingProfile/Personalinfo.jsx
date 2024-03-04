import React from 'react'

function Personalinfo() {
  return (
    <div className="md:w-[650px] w-full md:h-[538px] h-auto p-14 pb-4 bg-white shadow flex-col justify-start items-start gap-10">
        <div className="text-neutral-800 text-2xl font-medium mb-10">Personal Information</div>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-0 my-2'>
          <div className="md:w-[291px] w-[130px] h-[76px] flex-col justify-start items-start gap-2.5">
              <div className="text-neutral-600 text-base font-normal ">First name</div>
              <input type='text' value='Alexender' className="w-[225px] h-12 p-2.5 bg-white rounded-[5px] shadow justify-start items-center gap-[113px] inline-flex" />
          </div>
          <div className="md:w-[291px] w-[130px] h-[76px] flex-col justify-start items-start gap-2.5">
              <div className="text-neutral-600 text-base font-normal ">Last name</div>
              <input type='text' value='Eljah' className="w-[225px] h-12 p-2.5 bg-white rounded-[5px] shadow justify-start items-center gap-[113px] inline-flex" />
          </div>
          <div className="md:w-[291px] w-[130px] h-[76px] flex-col justify-start items-start gap-2.5">
              <div className="text-neutral-600 text-base font-normal ">birth date</div>
              <input type='text' value='12/01/2000' className="w-[225px] h-12 p-2.5 bg-white rounded-[5px] shadow justify-start items-center gap-[113px] inline-flex" />
          </div>
          <div className="md:w-[291px] w-[130px] h-[76px] flex-col justify-start items-start gap-2.5">
              <div className="text-neutral-600 text-base font-normal ">phone number</div>
              <input type='text' value='Alexender' className="w-[225px] h-12 p-2.5 bg-white rounded-[5px] shadow justify-start items-center gap-[113px] inline-flex" />
          </div>
        </div>
        <div className='flex flex-col gap-2.5 my-2'>
          <div className="text-neutral-600 text-base font-normal">Address</div>
          <input type='text' value='123 Main Street, Anchorage, USA 12345' className="md:w-[490px] w-[225px] h-12 p-2.5 bg-white rounded-[5px] shadow justify-start items-center gap-[113px] inline-flex" />
        </div>
        <div className='flex flex-col gap-2.5 my-2'>
          <div className="text-neutral-600 text-base font-normal">City</div>
          <input type='text' value='Dakhla' className="md:w-[490px] w-[225px] h-12 p-2.5 bg-white rounded-[5px] shadow justify-start items-center gap-[113px] inline-flex" />
        </div>
        <button type='submit' className="p-2.5 mt-2 bg-do_green hover:bg-do_hover_green rounded-[5px] justify-end items-center gap-2.5">
          <div className="text-white text-base font-medium ">Save changes</div>
        </button>
    </div>
  )
}

export default Personalinfo