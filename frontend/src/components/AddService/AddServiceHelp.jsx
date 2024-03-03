import React from 'react'

function AddServiceHelp() {
  return (
    <div className="md:my-[120px] m-5 flex flex-col gap-8">
    <div className="flex-col justify-start items-start gap-7 flex">
        <div className="text-neutral-800 md:text-4xl text-md font-bold">Tips for adding the right service !</div>
        <div className="lg:w-[581px] w-[280px] text-neutral-600 text-base font-normal">DoThatAsk provides you with the opportunity to create income streams by showcasing your expertise through the inclusion of various services. It is crucial to input comprehensive details about your services, ensuring that your offerings are presented in a detailed and compelling manner for potential customers to explore and engage with.</div>
    </div>
    <div className="flex-col justify-start items-start gap-7 flex">
        <div className="text-neutral-800 md:text-2xl text-md mt-5 font-medium">Service title</div>
        <div className="lg:w-[581px] w-[280px] text-neutral-600 text-base font-normal">Select a concise and precise title that accurately represents the nature of your service. This ensures that potential buyers can easily locate your offering when conducting searches related to the service field.</div>
    </div>
    <div className="flex-col justify-start items-start gap-7 flex">
        <div className="text-neutral-800 md:text-2xl text-md mt-5 font-medium">Service description</div>
        <div className="lg:w-[581px] w-[280px] text-neutral-600 text-base font-normal">Compose a unique and detailed description of your service using clear and error-free language. Clearly articulate what customers can expect to receive when they purchase the service, providing a comprehensive overview of its features and benefits.</div>
    </div>
    <div className="flex-col justify-start items-start gap-7 flex">
        <div className="text-neutral-800 md:text-2xl text-md mt-5 font-medium">Service gallery</div>
        <div className="lg:w-[581px] w-[280px] text-neutral-600 text-base font-normal">Incorporate a visually appealing image that effectively conveys the essence of your service. Additionally, include a minimum of three exclusive models showcasing your distinctive work style and skills. This not only enhances the buyer's understanding of your capabilities but also adds a personalized touch to your offerings.</div>
    </div>
    <div className="flex-col justify-start items-start gap-7 flex">
        <div className="text-neutral-800 md:text-2xl text-md mt-5 font-medium">Service price</div>
        <div className="lg:w-[581px] w-[280px] text-neutral-600 text-base font-normal">Ensure you set a suitable price for your service, considering the level of work and effort invested. Additionally, establish a reasonable delivery period to guarantee the service is completed to perfection.</div>
    </div>
</div>
  )
}

export default AddServiceHelp