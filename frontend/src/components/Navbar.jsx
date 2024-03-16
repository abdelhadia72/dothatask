import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { LuMenu } from "react-icons/lu";
import { useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const clickHandler = () => setOpen(!open);

  return (
    <div className="font-ubuntu m-auto my-8  pb-5 ">
      <div className="container">
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
            className={`flex sm:flex w-[100%] pt-5 sm:pt-0 sm:w-fit justify-around ${
              open ? "" : "hidden"
            }`}>
            <ul className="flex gap-5 font-500 items-center">
              <li>
                <Link to="" relative="path">
                  <span className="hover:text-do_green transition-all">
                    Services
                  </span>
                </Link>
              </li>
              <li>
                <Link to="" relative="path">
                  <span className="hover:text-do_green transition-all">
                    Sign in
                  </span>
                </Link>
              </li>
              <li>
                <Link to="" relative="path">
                  <Button
                    className="outline px-7 m-0 outline-do_green outline-1 text-do_green font-bold hover:bg-do_green transition-all hover:text-white"
                    variant="outline">
                    Join
                  </Button>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
