import React from "react";
import logo from "/logo.png";

export const Logo = () => {
  return (
    <div className=" flex gap-2 items-center">
      <img className="max-w-[47px]" src={logo} alt="logo.png" />
      <p className="text-3xl text-do_green font-abril font-500 hidden sm:block">
        Dothatask
      </p>
    </div>
  );
};
