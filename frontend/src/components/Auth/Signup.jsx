import React from 'react';
import { Link } from 'react-router-dom';
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
            <div className="custom-dynamic-style">
                <div className="text-stone-950 lg:text-5xl md:text-3xl text-xl font-bold lg:mb-[40px]">Sign up</div>
                <form onSubmit={handleSubmit(onsubmit)} className="flex-col justify-center items-center lg:gap-10 gap-5 flex">
                    <div className="flex-col justify-start items-start gap-[15px] flex">
                        <div className='flex gap-4'>
                            <input
                                type="text"
                                placeholder="First name"
                                {...register('firstname', { required: true })}
                                className="custom-input-style lg:w-[265px] md:w-[235px] w-[105px]"
                            />
                            <input
                                type="text"
                                placeholder="Last name"
                                {...register('lastname', { required: true })}
                                className="custom-input-style lg:w-[265px] md:w-[235px] w-[105px]"
                            />
                        </div>
                        <input
                            type="email"
                            placeholder="email adress"
                            {...register('email', { required: true })}
                            className="custom-input-style lg:w-[542px] md:w-[480px] w-[225px]"
                        />
                        <input
                            type="password"
                            placeholder="password"
                            {...register('password', { required: true })}
                            className="lg:w-[542px] md:w-[480px] w-[225px] custom-input-style" />
                        <input
                            type="password"
                            placeholder="Confirm password"
                            {...register('confirmPassword', { required: true })}
                            className="lg:w-[542px] md:w-[480px] w-[225px] custom-input-style" />
                        <div className='flex gap-4'>
                            <input
                                type="date"
                                {...register('dateNaissance', { required: true })}
                                className="custom-input-style opacity-60 lg:w-[265px] md:w-[235px] w-[105px]"
                            />
                            <select {...register('gendre', { required: true })}  className="custom-input-style lg:w-[265px] md:w-[235px] w-[105px] opacity-60">
                                <option value="null">Select gendre</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <input
                            type="number"
                            placeholder="phone number"
                            {...register('phone', { required: true })}
                            className="custom-input-style lg:w-[542px] md:w-[480px] w-[225px]"
                        />
                        <input
                            type="text"
                            placeholder="city"
                            {...register('city', { required: true })}
                            className="custom-input-style lg:w-[542px] md:w-[480px] w-[225px]"
                        />
                        <div
                            className="custom-button-style">
                            <button type='submit' className="text-white md:text-2xl text-xl font-medium font-Ubuntu">create account</button>
                        </div>
                    </div>
                    <div className="lg:w-[542px] md:w-[480px] w-[225px] h-12 p-2.5 bg-white rounded-[5px] text-center justify-center items-center mb-[35px] gap-[19px] inline-flex">
                        <div className="text-neutral-600 text-xl font-medium">
                            Already have an account?
                            <Link to='/login' className="text-center text-emerald-600 text-lg font-normal pl-2">Sign in</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
