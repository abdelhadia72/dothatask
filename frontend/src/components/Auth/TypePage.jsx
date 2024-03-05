import React from 'react'
import { useForm } from 'react-hook-form'

function TypePage() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const dataSubmit = (data) => console.log(data);    
  return (
    <div className='w-[850px] flex flex-col gap-14 mx-auto my-24'>
        <div className="w-auto text-center text-stone-950 text-4xl font-bold font-nunito">Register as a client or freelancer</div>
        <form onSubmit={handleSubmit(dataSubmit)} className='flex flex-col gap-14' >
            <div className='w-[700px] h-64 flex gap-8 mx-auto'>
                <label htmlFor='for-client' className="w-[380px] h-[184px] flex rounded-[10px] border-2 border-zinc-400 hover:border-do_green focus:bg-white justify-center items-center gap-2.5 mt-5">
                    <div className="w-[280px] text-center flex justify-center items-center text-stone-950 text-3xl font-normal font-nunito">I'm a client looking to hire for a project.</div>
                    <input type="radio" {...register('type-user', {required : true})} className='hidden' name="type_user" id="for-client" />
                </label>
                <label htmlFor='for-worker' className="w-[380px] h-[184px] flex rounded-[10px] border-2 border-zinc-400 hover:border-do_green focus:bg-white justify-center items-center gap-2.5 mt-5">
                    <div className="w-[280px] text-center flex justify-center items-center text-stone-950 text-3xl font-normal font-nunito">I'm a freelancer in search of new opportunities.</div>
                    <input type="radio" {...register('type-user', {required : true})} className='hidden' name="type-user" id="for-worker" />
                </label>
            </div>
            <button disabled={false} className="w-40 h-12 mx-auto px-5 bg-do_disabled hover:bg-do_hover_green rounded-lg justify-center items-center gap-2.5">
                <div className="text-neutral-300 text-base font-medium font-ubuntu">Choose your job</div>
            </button>
        </form>
    </div>
  )
}

export default TypePage