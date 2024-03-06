import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { ImAttachment } from "react-icons/im";
import Keyword from '../AddService/Keywords';

function FormAddService() {
    const [keywords, setKeywords] = useState([])
    const categories = [
        'Photographer',
        'builder',
        'Electrician',
        'Baker',
        'Painter',
        'Barber',
        'Designer'
    ];

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);


  return (
    <div className='relative '>
        <div className='md:m-[120px] m-5 flex flex-col gap-8'>
            <div className="text-neutral-800 md:text-4xl text-md font-bold" >Add New Service</div>
            <div className="text-neutral-800 md:text-2xl text-md font-medium">Give your service a title</div>
            <div className="text-do_gray_text text-lg font-normal">Keep it short and simple this will help us match you to the right category</div>
            <form className='relative flex flex-col gap-8' onSubmit={handleSubmit(onSubmit)}>
                <input className=" md:w-[580px] w-[280px] h-8 p-6 text-do_gray_text_input text-xl font-normal " placeholder='Exemple: create a professionalbusiness logo design' />
                <div className="text-neutral-800 md:text-2xl text-md mt-5 font-medium">Category</div>
                <select {...register('categorie', { required: true })}  className=" md:w-[580px] w-[280px] h-14 text-xl p-2 font-normal outline-none text-do_gray_text_input">
                    <option value="">Select category</option>
                    {categories.map((e, idx) => <option key={idx} value={e}>{e}</option>)}
                </select>
                <div className="text-neutral-800 md:text-2xl text-md mt-5 font-medium ">Service description</div>
                <div className="md:w-[580px] w-[280px] text-neutral-500 text-lg font-normal ">enterthe service description accurately that includes all information and conditions</div>
                <textarea type="comment" {...register('description', {required: true})} placeholder='i need ...' className='md:w-[580px] w-[280px] h-48 p-2 outline-none' />
                <label htmlFor="zone-file" className="w-[162px] h-12 p-2.5 bg-zinc-200 rounded-lg justify-center items-center gap-2.5 flex">
                    <div className="text-neutral-700 text-base font-normal ">Attach a picture</div>
                    <ImAttachment className="w-4 h-4 opacity-50 relative" />
                    <input id="zone-file" {...register('files', {required: true})} className="hidden w-[162px] h-12 " type="file"/>
                </label>
                <div className="md:w-[580px] w-[200p8] text-neutral-500 text-lg font-normal">Add well-designed pictures to show you service professionally and increase your sales.</div>
                <div className="text-neutral-800 md:text-2xl text-md mt-5 font-medium">Service Price</div>
                <input type='number' {...register('price', {required : true})} placeholder="Exemple: 300DH" className="md:w-[294px] w-[130px] h-12 p-2.5 bg-white rounded-lg shadow text-do_gray_text_input text-xl font-normal"/>
                <div className="text-neutral-800 md:text-2xl text-md mt-5 font-medium">Keywords</div>
                <label htmlFor="keywords-input" className="md:w-[601px] w-[200px] h-12 p-2.5 bg-white rounded-[5px] shadow justify-start items-center gap-[5px] inline-flex">
                    {keywords.map((e) => <span><Keyword content={e} /></span>)}
                    <input type="text" {...register('keywords', {required : true})} id="keywords-input" className="md:w-[601px] w-[200px] h-12 p-4 outline-none" />
                </label>
                <button type='submit' className="md:w-32 w-28 h-12 p-2.5 bg-do_green mt-5 rounded-[5px] justify-center items-center gap-2.5 inline-flex">
                    <div className="text-white text-base font-medium">Add Service</div>
                </button>
            </form>
        </div>
    </div>
  )
}

export default FormAddService