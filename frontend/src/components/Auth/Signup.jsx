import React from 'react';
import Logo from '../logo';
import { useForm } from 'react-hook-form';
function Signup() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onsubmit = (e) => {
        alert(e.fullname + " " + e.email + " " + e.password + " " + e.phone + " " + e.city);
        console.log(e);
    };

    return (
        <div className='w-full flex relative bg-neutral-100'>
            <Logo />
            <div className="lg:w-[612px] md:w-[550px] w-[290px] m-auto mt-[173px] inline-flex flex-col items-center md:gap-[20px] gap-[25px] p-[35px] relative bg-white rounded-md">
                <div className="text-stone-950 lg:text-5xl md:text-3xl text-xl font-bold lg:mb-[40px]">Sign up</div>
                <form onSubmit={handleSubmit(onsubmit)} className="flex-col justify-center items-center lg:gap-10 gap-5 flex">
                    <div className="flex-col justify-start items-start gap-[15px] flex">
                        <input
                            type="text"
                            placeholder="first name and last name"
                            {...register('fullname', { required: true })}
                            className="lg:w-[542px] md:w-[480px] w-[225px] h-12 p-2.5 md:text-lg text-md bg-white 
                            rounded-[5px] shadow justify-start items-center gap-[113px] inline-flex mx-auto"
                        />
                        <input
                            type="email"
                            placeholder="email adress"
                            {...register('email', { required: true })}
                            className="lg:w-[542px] md:w-[480px] w-[225px] h-12 p-2.5 md:text-lg text-md bg-white 
                            rounded-[5px] shadow justify-start items-center gap-[113px] inline-flex mx-auto"
                        />
                        <input
                            type="password"
                            placeholder="password"
                            {...register('password', { required: true })}
                            className="lg:w-[542px] md:w-[480px] w-[225px] h-12 p-2.5 md:text-lg text-md bg-white 
                                rounded-[5px] shadow justify-start items-center gap-[113px] inline-flex mx-auto" />
                        <input
                            type="number"
                            placeholder="phone number"
                            {...register('phone', { required: true })}
                            className="lg:w-[542px] md:w-[480px] w-[225px] h-12 p-2.5 md:text-lg text-md bg-white 
                            rounded-[5px] shadow justify-start items-center gap-[113px] inline-flex mx-auto"
                        />
                        <input
                            type="text"
                            placeholder="city"
                            {...register('city', { required: true })}
                            className="lg:w-[542px] md:w-[480px] w-[225px] h-12 p-2.5 md:text-lg text-md bg-white 
                            rounded-[5px] shadow justify-start items-center gap-[113px] inline-flex mx-auto"
                        />
                        <div
                            className="lg:w-[542px] md:w-[480px] w-[225px] h-12 p-2.5 hover:bg-emerald-400 bg-emerald-600 rounded-[5px] 
                                    shadow-lg justify-center items-center gap-[113px] 
                                    inline-flex mt-[40px] transition-all 
                                    duration-100 ease-in-out cursor-pointer shadow-gray-100 ">
                            <button type='submit' className="text-white md:text-2xl text-xl font-medium font-['Ubuntu']">create account</button>
                        </div>
                    </div>
                    <div className="lg:w-[542px] md:w-[480px] w-[225px] h-12 p-2.5 bg-white rounded-[5px] text-center justify-center items-center mb-[35px] gap-[19px] inline-flex">
                        <div className="text-neutral-600 text-xl font-medium">
                            Already have an account?
                            <a className="text-center text-emerald-600 text-lg font-normal pl-2">Sign up</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
