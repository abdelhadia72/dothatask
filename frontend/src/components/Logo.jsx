import React from "react";
import logo from "../../public/logo.png";

export const Logo = () => {
  return (
    <div className=" flex gap-2 items-center">
      <img className="max-w-[47px]" src={logo} alt="logo.png" />
      <p className="text-2xl text-do_green font-sans font-500 hidden sm:block">
        Do That Task.
      </p>
    </div>
  );
};
