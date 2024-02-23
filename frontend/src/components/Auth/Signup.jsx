import React from 'react';
import Logo from '../logo';
import Inputs from '../areas/Inputs';
import Buttons from '../areas/Buttons';

function Signup() {
    return (
        <div className='w-full flex relative bg-neutral-100'>
            <Logo />
            <div className="lg:w-[612px] md:w-[550px] w-[290px] m-auto mt-[173px] inline-flex flex-col items-center md:gap-[20px] gap-[25px] p-[35px] relative bg-white rounded-md">
                <div className="text-stone-950 lg:text-5xl md:text-3xl text-xl font-bold lg:mb-[40px]">Sign up</div>
                <form className="flex-col justify-center items-center lg:gap-10 gap-5 flex">
                    <div className="flex-col justify-start items-start gap-[15px] flex">
                        <Inputs placeholder={"First name and last name"} inpType={"text"} />
                        <Inputs placeholder={"email adress"} inpType={"text"} />
                        <Inputs placeholder={"Password"} inpType={"password"} />
                        <Inputs placeholder={"Phone number"} inpType={"number"} />
                        <Inputs placeholder={"city"} inpType={"text"} />
                        <Buttons content={"create account"} />
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
