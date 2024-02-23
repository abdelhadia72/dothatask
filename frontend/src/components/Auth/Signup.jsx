import React from 'react'
import Logo from '../logo'
import Inputs from '../areas/Inputs'
import Buttons from '../areas/Buttons'

function Signup() {
    return (
        <div className='className="w-full flex  relative bg-neutral-100"'>
            <Logo />
            <div className="mx-auto mt-[173px] inline-flex flex-col items-center gap-[40px] p-[35px] relative bg-white">
                <div className="text-stone-950 text-5xl font-bold mb-[40px]">Sign up</div>
                <div className="flex-col justify-start items-start gap-[15px] flex">
                    <Inputs placeholder={"First name and last name"} inpType={"text"} />
                    <Inputs placeholder={"email adress"} inpType={"text"} />
                    <Inputs placeholder={"Password"} inpType={"password"} />
                    <Inputs placeholder={"Phone number"} inpType={"number"} />
                    <Inputs placeholder={"city"} inpType={"text"} />
                    <Buttons content={"create account"} />
                    <div className="w-[542px] mt-[30px] h-12 p-2.5 bg-white rounded-[5px] justify-center items-center mb-[35px] gap-[19px] inline-flex">
                        <div className="text-neutral-600 text-xl font-medium">
                            Already have account?
                            <a className="text-center text-emerald-600 text-lg font-normal pl-2">Sign up</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup