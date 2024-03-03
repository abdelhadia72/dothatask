import React from 'react'
import user from '../assets/images/user1.jpg';
import { GoPerson } from "react-icons/go";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';

function ProfilePop() {
  return (
    <div className="md:w-[240px] w-[200px] h-[262px] py-[20px] absolute bg-white rounded-[5px] flex-col justify-center z-[1] items-start right-2 md:top-20 top-25 gap-[15px] inline-flex">
        <div className="self-stretch h-[115px] flex-col justify-start items-center gap-3.5 inline-flex">
            <div className="flex-col justify-start items-center gap-2.5 flex">
                <img className="w-[60px] h-[60px] rounded-full object-cover hover:opacity-60" src={user}/>
                <div className="flex-col justify-start items-center gap-[5px] flex">
                    <div className="text-stone-950 text-sm font-medium font-Ubuntu">Alexander Elijah</div>
                    <div className="text-neutral-600 text-sm font-normal font-Ubuntu">alexander20@gmail.com</div>
                </div>
            </div>
            <div className="w-[200px] border h-0 border-zinc-400"></div>
        </div>
        <div className="self-stretch h-[102px] relative">
            <Link to={'/profile'} className="w-[193px] h-[34px] pl-[15px] pr-2.5 py-[7px] left-0 top-0 absolute bg-white justify-start items-center gap-2.5 inline-flex hover:opacity-60">
                <GoPerson className="size-6 relative" />
                <div className="text-stone-950 text-sm font-medium font-Ubuntu">Profile</div>
            </Link>
            <Link to={'/add-service'} className="w-[193px] h-[34px] pl-[15px] pr-2.5 py-[7px] left-0 top-[34px] absolute bg-white justify-start items-center gap-2.5 inline-flex hover:opacity-60">
                <IoAddCircleOutline className="size-6 relative" />
                <div className="text-stone-950 text-sm font-medium font-Ubuntu">Add service</div>
            </Link>
            <div className="w-[193px] h-[34px] pl-[15px] pr-2.5 py-[7px] left-0 top-[68px] absolute bg-white justify-start items-center gap-2.5 inline-flex hover:opacity-60">
                <IoIosLogOut className="size-6 relative" />
                <div className="text-stone-950 text-sm font-medium font-Ubuntu">Sign out</div>
            </div>
        </div>
    </div>
  )
}

export default ProfilePop