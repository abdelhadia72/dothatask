import React from 'react'
import { Logo } from '../header/Logo'
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { LuMenu } from 'react-icons/lu';
import { useState } from 'react';
import user from '../assets/images/user1.jpg'
import ProfilePop from './ProfilePop';

function NavbarLogged() {
    const [profileOpen, setProfileOpen] = useState(false);
    const [open, setOpen] = useState(false);

    const clickHandler = () => setOpen(!open);
    const ShowProfile =()=> setProfileOpen(!profileOpen);
  
    return (
      <div className="relative container w-[100%] font-ubuntu m-auto my-8 border-b-2 pb-5 bg-neutral-100">
        <ul className="flex justify-between items-center flex-wrap">
          <li className="logo">
            <Logo />
          </li>
          <li
            onClick={clickHandler}
            className="text-do_green text-3xl cursor-pointer active:scale-75 transition-all block sm:hidden">
            <LuMenu />
          </li>
          <li
            className={`flex sm:flex w-[100%] pt-5 sm:pt-0 sm:w-fit justify-around ${open ? "" : "hidden"
              }`}>
            <ul className="flex gap-8 font-500 items-center">
              <li>
                <Link to="/">
                  <span className="hover:text-do_green transition-all">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/services">
                  <span className="hover:text-do_green transition-all">
                    Services
                  </span>
                </Link>
              </li>
              <li>   
                  <span className="hover:text-do_green transition-all">
                    <img className="w-[50px] h-[50px] rounded-full object-cover" src={user} onClick={()=>ShowProfile()}/>
                  </span>
               </li>
            </ul>
          </li>
        </ul>
        <div className={`${profileOpen ? '' : 'hidden'}`}>
            <div className="size-7 origin-bottom-left rotate-45 transform border border-t-transparent bg-white absolute top-19 right-14 ">
                <div className="h-16 w-16 border-t-30 border-r-30 bg-transparent"></div>
            </div>
            <ProfilePop />
        </div>
      </div>
  )
}

export default NavbarLogged