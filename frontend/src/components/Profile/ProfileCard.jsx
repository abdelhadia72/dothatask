import React from "react";
import { BsThreeDots } from "react-icons/bs";

export const ProfileCard = ({ image, dscription, category, price }) => {
  return (
    <div className="bg-gray-200 rounded-md w-1/1 lg:w-[42%] flex flex-col justify-between xl:w-[32%] p-3">
      <img
        className="w-full max-h-[150px] object-contain"
        style={{ objectFit: "cover" }}
        src={
          image
            ? image
            : "https://salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png"
        }
        alt="profile.png"
      />

      <div className="info">
        <h3>{dscription}</h3>
        <div className="category flex py-1">
          <h3 className="name font-sans">category:</h3>
          <h3 className="value font-bold ml-2 ">{category}</h3>
        </div>
        <div className="priceAndMore flex justify-between py-1">
          <div className="icon text-2xl">
            <BsThreeDots />
          </div>
          <div className="price">
            <span>Starting At</span>
            <span className="ml-2 font-bold">
              {price}
              <span className="ml-[.7px]">DH</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
