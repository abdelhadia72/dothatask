import React from 'react'

function Personaldescription() {
  return (
    <div>
        <div className="md:w-[650px] w-full lg:h-[500px] h-[750px] p-5 bg-white shadow flex-col justify-center items-start gap-4 ">
            <div className=" h-[341px] flex-col justify-start items-start gap-4 flex">
                <div className="text-center text-stone-950 text-3xl font-medium">Change Description</div>
                <div className=" text-neutral-600 text-xl font-normal">
                <input className=" text-neutral-600 text-xl font-normal hidden" type='text' />
                    Hello, I'm Alexander Elijah, a passionate logo designer specializing in crafting visually appealing and 
                    impactful brand identities. I excel in creating unique logos that resonate with target audiences. 
                    With a keen eye for detail, I ensure that each design is not only aesthetically pleasing but also 
                    effectively communicates the brand's essence. Experienced in logo design across various industries, 
                    I am dedicated to delivering distinctive and memorable visual identities. My commitment to continuous 
                    learning and collaboration allows me to stay at the forefront of design trends and work seamlessly with other 
                    creative professionals. I straongly believe that design has the power to drive positive change.
                </div>
            <button type='submit' className="p-2.5 bg-do_green hover:bg-do_hover_green rounded-[5px] justify-end items-center gap-2.5">
                <div className="text-white text-base font-medium ">Save changes</div>
            </button>
            </div>
        </div>
    </div>
  )
}

export default Personaldescription