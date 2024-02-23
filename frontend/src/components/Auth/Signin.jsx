import React from 'react'
import Inputs from '../areas/Inputs'
import Logo from '../logo'
import google_logo from '../../assets/google_logo.png';
import Buttons from '../areas/Buttons';

function Signin() {
    return (
        <div className="w-full flex  relative bg-neutral-100">
            <Logo />
            <div className="md:w-[612px] w-[575px] mx-auto mt-[173px] inline-flex flex-col items-center md:gap-[40px] gap-[35px] p-[35px] relative bg-white">
                <div className="text-stone-950 md:text-5xl text-3xl font-bold md:mb-[40px]">Sign in</div>
                <form className="flex-col justify-center items-center gap-10 flex">
                    <div className="flex-col justify-start items-start gap-[15px] flex">
                        <Inputs placeholder={"email adress"} inpType={"text"} />
                        <Inputs placeholder={"Password"} inpType={"password"} />
                    </div>
                    <div className="justify-start items-center gap-[238px] inline-flex mb-[-40px]">
                        <div className="justify-start items-center gap-[9px] flex">
                            <input type='checkbox' className="w-6 h-6 relative" />
                            <div className="text-center text-neutral-600 md:text-lg text-md font-normal">Remember me</div>
                        </div>
                        <div className="text-center text-neutral-600 md:text-lg text-md font-normal">Forgot password?</div>
                    </div>
                    <Buttons content={"login"} />
                    <div className="justify-start items-start gap-1.5 inline-flex">
                        <div className="text-center text-neutral-600 md:text-lg text-md font-normal">Doesn't have an account yet?</div>
                        <div className="justify-center items-center gap-2.5 flex">
                            <a className="text-center text-emerald-600 md:text-lg text-md font-normal">Sign up</a>
                        </div>
                    </div>
                    <div className="justify-start items-center gap-[9px] inline-flex">
                        <div className="w-[187px] h-[0px] border border-neutral-600"></div>
                        <div className="text-center text-neutral-600 md:text-lg text-md font-normal">Login With Others</div>
                        <div className="w-[187px] h-[0px] border border-neutral-600"></div>
                    </div>
                    <div className="w-[542px] h-12 p-2.5 bg-white rounded-[5px] shadow justify-center items-center mb-[35px] gap-[19px] inline-flex">
                        <img className="w-[38px] h-[38px]" src={google_logo} />
                        <div className="text-neutral-600 md:text-lg text-lg font-medium">Sign in with google</div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signin