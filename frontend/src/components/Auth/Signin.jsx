import React from 'react'
import Inputs from '../areas/Inputs'
import Logo from '../logo'
import google_logo from '../../assets/google_logo.png';
import Buttons from '../areas/Buttons';

function Signin() {
    return (
        <div className="w-full flex  relative bg-neutral-100">
            <Logo />
            <div className="lg:w-[612px] md:w-[550px] w-[290px] m-auto mt-[173px] inline-flex flex-col items-center md:gap-[20px] gap-[25px] p-[35px] relative bg-white rounded-md">
                <div className="text-stone-950 md:text-5xl text-xl font-bold md:mb-[40px]">Sign in</div>
                <form className="flex-col justify-center items-center md:gap-10 gap-5 flex">
                    <div className="flex-col justify-start items-start gap-[15px] flex">
                        <Inputs placeholder={"email adress"} inpType={"text"} />
                        <Inputs placeholder={"Password"} inpType={"password"} />
                    </div>
                    <div className="justify-start items-center md:gap-[195px] lg:gap-[238px] gap-3 inline-flex mb-[-40px]">
                        <div className="justify-start items-center md:gap-[9px] gap-1 flex">
                            <input type='checkbox' className="md:w-6 md:h-6 w-3 h-3 relative" />
                            <p className="text-left text-neutral-600 md:text-lg text-sm font-normal">Remember me</p>
                        </div>
                        <div className="text-right text-neutral-600 md:text-lg text-sm font-normal">Forgot password?</div>
                    </div>
                    <Buttons content={"login"} />
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
                </form>
            </div>
        </div>
    )
}

export default Signin