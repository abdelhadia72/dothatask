import React from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const info = {
  rate: 4,
  numberOfRatings: 67,
  numberOfOrders: 33,
  city: "Casablanca",
  phoneNumber: "+212 6 61 72 83 94",
  servicePrice: 500,
};

export const Statistics = () => {
  return (
    <div className=" bg-gray-200 rounded-sm mt-5 p-3 w-full">
      <h1 className="text-2xl mb-5">Statistics</h1>
      <div className="div flex gap-2 items-center ">
        <h1 className="font-bold">Rating:</h1>
        <div className="flex gap-1 items-center">
          {[...Array(info.rate).keys()].map(() => (
            <span className="text-green-500">
              {" "}
              <FaStar />{" "}
            </span>
          ))}
          {[...Array(5 - info.rate).keys()].map(() => (
            <span className="text-green-500">
              {" "}
              <FaRegStar />{" "}
            </span>
          ))}
          <span>({info.numberOfRatings})</span>
        </div>
      </div>
      <div className="order flex gap-2 mt-1">
        <h1 className="font-bold">Rating:</h1>
        {info.numberOfOrders}
      </div>
      <div className="order flex gap-2 mt-1">
        <h1 className="font-bold">From:</h1>
        {info.city}
      </div>
      <div className="order flex gap-2 mt-1">
        <h1 className="font-bold">Phone Number:</h1>
        {info.phoneNumber}
      </div>
      <div className="order flex gap-2 mt-1">
        <h1 className="font-bold">Service Page:</h1>
        {info.servicePrice}DH
      </div>
    </div>
  );
};

// [...Array(10).keys()]
