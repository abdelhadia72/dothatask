import React from 'react'
import { FaStar } from 'react-icons/fa'
import default_user from '../assets/images/default_user.jpg';

export default function Comments() {
  return (
            <div className="md:w-[443px] md:h-[149px] w-[340px] h-auto flex-col justify-start items-start gap-5 inline-flex">
                <div className="justify-start items-center gap-5 inline-flex">
                    <div className="justify-start items-center gap-4 flex">
                        <img className="md:size-16 size-12 rounded-full" src={default_user} />
                        <div className="text-black md:text-xl text-md font-medium font-ubuntu">Katie Mitchell</div>
                    </div>
                    <div className="w-[40px] bg-black border md:rotate-90 rotate-90 border-zinc-400"></div>
                    <div className="justify-start items-start flex">
                        <FaStar className="md:size-5 size-3 relative text-do_green" />
                        <FaStar className="md:size-5 size-3 relative text-do_green" />
                        <FaStar className="md:size-5 size-3 relative text-do_green" />
                        <FaStar className="md:size-5 size-3 relative text-do_green" />
                        <FaStar className="md:size-5 size-3 relative text-do_green" />
                    </div>
                </div>
                <div className="w-full text-neutral-600 md:text-xl text-md font-normal font-ubuntu">Incredible platform! Found a skilled professional on DoThatAsk who exceeded my expectations. Highly recommend!</div>
            </div>
  )
}
