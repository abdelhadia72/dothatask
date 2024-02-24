import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function ForgotPassword() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onsumbit = (e) => {
        console.log(e)
    }
    return (
        <div className='w-full flex  relative bg-neutral-100'>
            <div className='custom-dynamic-style'>
                <div className="text-stone-950 md:text-5xl text-xl font-bold md:mb-[40px]">Forgot Password</div>
                <p className='text-neutral-600 text-xl font-medium lg:w-[542px] md:w-[480px] w-[225px]'>Enter your email and we'll send you instructions to set your password</p>
                <form onSubmit={handleSubmit(onsumbit)} className="flex-col justify-center items-center md:gap-10 gap-5 flex" action="" >
                    <input type="email"
                        placeholder='email@example.com'
                        {...register('email', { required: true })}
                        className='custom-input-style'
                    />
                    <div className='custom-button-style'>
                        <button type='submit' className="text-white md:text-2xl text-xl font-medium font-['Ubuntu']">Email me</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default ForgotPassword