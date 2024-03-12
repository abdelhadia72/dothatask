import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

export const Comment = ({ name, rrate, comment, date, image }) => {
  const rate = rrate || 0;

  return (
    <div>
      <div className="user_info flex items-center gap-3 mt-4 p-2">
        <img
          className="w-14 h-14 border-2 border-black rounded-full"
          src={image}
          alt="user.png"
        />
        <p className=" font-semibold text-xl">{name}</p>
        <div className="rate flex text-lg">
          {[...Array(rate).keys()].map(() => (
            <span className="text-green-500">
              {" "}
              <FaStar />{" "}
            </span>
          ))}
          {[...Array(5 - rate).keys()].map(() => (
            <span className="text-green-500">
              {" "}
              <FaRegStar />{" "}
            </span>
          ))}
        </div>
      </div>
      <div className="comment mt-3">{comment}</div>
      <div className="date text-gray-500 mt-1">{date}</div>
      <div className="h-[2px] bg-gray-400 mt-4"></div>
    </div>
  );
};
