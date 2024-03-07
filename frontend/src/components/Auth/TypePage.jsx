import React from 'react';
import { useForm } from 'react-hook-form';

function TypePage() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const dataSubmit = (data) => console.log(data);

    return (
        <div className='md:w-[850px] w-[320px] flex flex-col gap-14 mx-auto my-24'>
            <div className="w-auto text-center text-stone-950 md:text-4xl text-2xl font-bold font-nunito">Register as a client or freelancer</div>
            <form onSubmit={handleSubmit(dataSubmit)} className='flex flex-col gap-14'>
                <div className='md:w-[700px] w-[320px] md:h-64 h-auto flex md:flex-row flex-col gap-8 mx-auto justify-center items-center'>
                    <label htmlFor='for-client' className={`md:w-[380px] w-[300px] h-[184px] flex rounded-[10px] border-2 hover:border-do_green justify-center items-center gap-2.5 mt-5 ${watch('type-user') == 'client' ? 'bg-white border-4 border-green-500' : 'border-zinc-400'}`}>
                        <div className="w-[280px] text-center flex justify-center items-center text-stone-950 text-3xl font-normal font-nunito">I'm a client looking to hire for a project.</div>
                        <input type="radio" {...register('type-user', { required: true })} className='hidden' value="client" name="type-user" id="for-client" />
                    </label>
                    <label htmlFor='for-worker' className={`md:w-[380px] w-[300px] h-[184px] flex rounded-[10px] border-2  hover:border-do_green justify-center items-center gap-2.5 mt-5 ${watch('type-user') == 'worker' ? 'bg-white border-4 border-green-500' : 'border-zinc-400'}`}>
                        <div className="w-[280px] text-center flex justify-center items-center text-stone-950 text-3xl font-normal font-nunito">I'm a freelancer in search of new opportunities.</div>
                        <input type="radio" {...register('type-user', { required: true })} className='hidden' value="worker" name="type-user" id="for-worker" />
                    </label>
                </div>
                <button disabled={watch('type-user') == '' ? true : false} type="submit" className={`w-40 h-12 mx-auto px-5 rounded-lg justify-center items-center gap-2.5 ${watch('type-user') == 'worker' || watch('type-user') == 'client' ? 'bg-do_green text-white' : ' bg-zinc-200 text-black'} `}>
                    <div className="text-base font-medium font-ubuntu">Choose your job</div>
                </button>
            </form>
        </div>
    );
}

export default TypePage;