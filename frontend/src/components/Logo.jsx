import React from "react";
import logo from "../../public/logo.png";

export const Logo = ({ color }) => {
  const textColor = color
    ? `text-2xl text-${color} font-ubuntu font-serif text-3xl font-500 hidden sm:block`
    : "text-2xl text-do_green font-ubuntu font-serif font-500 hidden sm:block";

  return (
    <div className="flex gap-2 items-center  ">
      <img className="max-w-[47px]" src={logo} alt="logo.png" />
      <p className={textColor}>Do That Task.</p>
    </div>
  );
};
