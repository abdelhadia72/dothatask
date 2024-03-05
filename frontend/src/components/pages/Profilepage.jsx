import React from "react";
import { Avtar } from "../Profile/Avtar";
import { Button } from "../ui/button";
import { Statistics } from "../Profile/Statistics";
import { FiPlusCircle } from "react-icons/fi";
import { ProfileCard } from "../Profile/ProfileCard";
import { Comment } from "../Profile/Comment";

export const Profilepage = () => {
  return (
    <div className="lg:flex-row font-ubuntu p-4 flex flex-col container">
      <div className="left_side xl:pr-16 lg:w-3/4">
        <Avtar />
        <div className="description">
          <h1 className="text-2xl py-6 font-400">Description</h1>
          <p className="">
            Hello, I'm Alexander Elijah, a passionate logo designer specializing
            in crafting visually appealing and impactful brand identities. I
            excel in creating unique logos that resonate with target audiences.
            With a keen eye for detail, I ensure that each design is not only
            aesthetically pleasing but also effectively communicates the brand's
            essence. Experienced in logo design across various industries, I am
            dedicated to delivering distinctive and memorable visual identities.
            My commitment to continuous learning and collaboration allows me to
            stay at the forefront of design trends and work seamlessly with
            other creative professionals. I strongly believe that design has the
            power to drive positive change.
          </p>
        </div>
        <div className="portfolio mt-6">
          <h1 className="text-2xl flex gap-2 items-center">
            Portfolio (6){" "}
            {
              <span className="text-do_green">
                <FiPlusCircle />
              </span>
            }
          </h1>
          <div className="border-b border-2 border-gray-400 rounded-md my-5"></div>
          <div className="portflio_warper justify-center flex gap-2 flex-wrap">
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
          </div>
        </div>
        <div className="comments mt-12">
          <h1 className="text-2xl flex gap-2 items-center">
            What people loved about this seller
          </h1>
          <div className="border-b border-2 border-gray-400 rounded-md my-5"></div>
          <div className="comments_wraper">
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </div>
        </div>
      </div>
      <div className="right_side flex flex-col lg:w-1/4 items-end">
        <h1 className="mt-10">
          <Button className="border-green-500 border-2 text-green-600  bg-transparent hover:bg-green-500 hover:text-white">
            Profile setting
          </Button>
        </h1>
        <Statistics />
      </div>
    </div>
  );
};
