import React from 'react'
import Logo from '../logo'
import google_logo from '../../assets/google_logo.png';
import { useForm } from 'react-hook-form';
import Errors from '../areas/Errors';

function Signin() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const onsumbit = (e) => {
        alert(e.email + " " + e.password)
        console.log(e)
    }
    return (
        <div className="w-full flex  relative bg-neutral-100">
            <Logo />
            <div className="lg:w-[612px] md:w-[650px] sm:w-[300px] m-auto mt-[173px] inline-flex flex-col items-center md:gap-[20px] gap-[25px] p-[35px] relative bg-white rounded-md">
                <div className="text-stone-950 md:text-5xl text-xl font-bold md:mb-[40px]">Sign in</div>
                <div className="flex-col justify-center items-center md:gap-10 gap-5 flex">
                    <form onSubmit={handleSubmit(onsumbit)} className="flex-col justify-center items-center md:gap-10 gap-5 flex" action="" >
                        <div className="flex-col justify-start items-start gap-[15px] flex">
                            <input
                                type="email"
                                placeholder="email adress"
                                {...register('email', { required: true })}
                                className="lg:w-[542px] md:w-[480px] w-[225px] h-12 p-2.5 md:text-lg text-md bg-white 
                                rounded-[5px] shadow justify-start items-center gap-[113px] inline-flex mx-auto"
                            />
                            {errors.email && <Errors content={"This field is required"} />}
                            <input
                                type="password"
                                placeholder="Password"
                                {...register('password', { required: true })}
                                className="lg:w-[542px] md:w-[480px] w-[225px] h-12 p-2.5 md:text-lg text-md bg-white 
                                rounded-[5px] shadow justify-start items-center gap-[113px] inline-flex mx-auto"
                            />
                            {errors.password && <Errors content="This field is required" />}
                        </div>
                        <div className="justify-start items-center md:gap-[195px] lg:gap-[238px] gap-4 inline-flex mb-[-40px]">
                            <div className="justify-start items-center md:gap-[9px] gap-1 flex">
                                <input type='checkbox' className="md:w-6 md:h-6 w-3 h-3 relative" />
                                <p className="text-left text-neutral-600 md:text-lg text-sm font-normal">Remember me</p>
                            </div>
                            <div className="text-right text-neutral-600 md:text-lg text-sm font-normal">Forgot password?</div>
                        </div>
                        <div
                            className="lg:w-[542px] md:w-[480px] w-[225px] h-12 p-2.5 hover:bg-emerald-400 bg-emerald-600 rounded-[5px] 
                                    shadow-lg justify-center items-center gap-[113px] 
                                    inline-flex mt-[40px] transition-all 
                                    duration-100 ease-in-out cursor-pointer shadow-gray-100 ">
                            <button type='submit' className="text-white md:text-2xl text-xl font-medium font-['Ubuntu']">login</button>
                        </div>
                    </form>
                    <div className="justify-start items-start md:gap-1 gap-0 inline-flex">
                        <div className="text-center text-neutral-600 md:text-lg text-sm font-normal md:w-auto w-[200px]">
                            Doesn't have an account yet?
                            <a className="text-center text-emerald-600 md:text-lg text-sm font-normal md:ml-[5px]">Sign up</a>
                        </div>
                    </div>
                    <div className="justify-start items-center gap-[9px] inline-flex">
                        <div className="lg:w-[187px] md:w-[150px] w-[98px] h-[0px] border border-neutral-600"></div>
                        <div className="text-center text-neutral-600 md:text-lg text-sm font-normal">Login With Others</div>
                        <div className="lg:w-[187px] md:w-[150px] w-[98px] h-[0px] border border-neutral-600"></div>
                    </div>
                    <div className="md:w-[542px] w-[225px] h-12 p-2.5 bg-white rounded-[5px] shadow justify-center items-center mb-[35px] gap-[19px] inline-flex">
                        <img className="md:w-[38px] md:h-[38px] w-[22px] h-[22px]" src={google_logo} />
                        <div className="text-neutral-600 md:text-lg text-md font-medium">Sign in with google</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin