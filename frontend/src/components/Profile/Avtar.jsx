import React from "react";
import { IoLocationOutline } from "react-icons/io5";

export const Avtar = ({ avtar, name, city }) => {
  return (
    <div className="flex items-center gap-3">
      <div className=" relative">
        <img
          className="w-16 h-16 border-2 border-black rounded-full"
          src={
            avtar
              ? avtar
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDwmG52pVI5JZfn04j9gdtsd8pAGbqjjLswg&usqp=CAU"
          }
          alt="user_image.png"
        />
        <div className="online  border-2 border-white h-4 w-4 bg-green-500 top-0 left-0 absolute rounded-full"></div>
        {/* <div className="offline  border-2 border-white h-5 w-5 bg-gray-500 top-1 left-1 absolute rounded-full"></div> */}
      </div>
      <div className="text">
        <h2 className=" font-bold font-ubuntu">{name}</h2>
        <div className="city flex gap-1 text-lg items-center">
          <IoLocationOutline />
          <span>{city}</span>
        </div>
      </div>
    </div>
  );
};
