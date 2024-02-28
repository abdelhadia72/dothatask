import React from "react";
import profile from "../assets/images/profile1.png";
import { BsThreeDots } from "react-icons/bs";

export const ProfileCard = () => {
  return (
    <div className="bg-gray-200 rounded-md w-1/1 lg:w-[42%] xl:w-[32%] p-3">
      <img className="w-full" src={profile} alt="profile.png" />
      <div className="info">
        <h3>I bake a fresh and soft croissant with chocolate inside</h3>
        <div className="category flex py-1">
          <h3 className="name font-sans">category:</h3>
          <h3 className="value font-bold ml-2">Logo Designer</h3>
        </div>
        <div className="priceAndMore flex justify-between py-1">
          <div className="icon text-2xl">
            <BsThreeDots />
          </div>
          <div className="price">
            <span>Starting At</span>
            <span className="ml-2 font-bold">
              500
              <span className="ml-[.7px]">DH</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
