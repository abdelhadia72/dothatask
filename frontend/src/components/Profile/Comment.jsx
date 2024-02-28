import React from "react";
import user from "../assets/images/user1.jpg";
import { FaStar, FaRegStar } from "react-icons/fa";

export const Comment = () => {
  const rate = 3;

  return (
    <div>
      <div className="user_info flex items-center gap-3 mt-4 p-2">
        <img
          className="w-14 h-14 border-2 border-black rounded-full"
          src={user}
          alt="user.png"
        />
        <p className=" font-semibold text-xl">James Henry</p>
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
      <div className="comment mt-3">
        Creative, wonderful, distinguished, intelligent in his ideas. Accurate
        in his appointments, responds as quickly as possible, completes the work
        in a short time. Brother Muhammad deserves all the money for his work,
        and he deserves it. I ask God for all the best and success for him.
      </div>
      <div className="date text-gray-500 mt-1">12 days ago</div>
      <div className="h-[2px] bg-gray-400 mt-4"></div>
    </div>
  );
};
