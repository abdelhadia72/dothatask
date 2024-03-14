import React from "react";
import { Logo } from "../Logo";
import hero from "../assets/images/mockup.png";
import { Button } from "../ui/button";
import { FaArrowRight } from "react-icons/fa";
import { LuShieldCheck } from "react-icons/lu";
import Comments from "../landing/Comments";
export const Landing = () => {
  return (
    <div className=" min-h-[100%] font-ubuntu">
      <div className="hero bg-[#00b05e] py-6 ">
        <div className="contaner ml-48 ">
          <div className="nav">
            <Logo color="white" />
          </div>
          <div className="section py-12 flex items-center gap-2 text-white">
            <div className="text-side">
              <h1 className="text-3xl font-bold">
                DoThatask - Your Hub for Seamless Engagement with Skilled
                Professionals and Experts Across Cities
              </h1>
              <p className="pt-4">
                Whether You Seek Services or Offer Skills, DoThatask Streamlines
                the Journey, Fostering a Dynamic Community of Seekers and
                Providers.
              </p>
              <Button className="gap-2 mt-4 rounded-full font-bold hover:gap-4 transition-all text-[#00b05e] bg-white hover:bg-white">
                Get started <FaArrowRight />
              </Button>
            </div>
            <div className="image-side">
              <img
                className="object-cover w-[1500px] relative -right-[150px]"
                src="/public/mockup.png"
                alt="mockup.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="works">
        <div className="contant mx-48 mb-8">
          <h1 className="text-4xl text-center py-12  text-[#006A38] font-bold">
            How it Works
          </h1>
          <div className="cells flex gap-24 justify-start items-center">
            <div className="cell p-4 flex flex-col justify-center items-center bg-[#f2f2f2] rounded-md">
              <div className="number size-20 rounded-full text-3xl font-bold bg-[#BCFFC1] text-[#00B05E] flex justify-center items-center">
                1
              </div>
              <h1 className="text-2xl text-[#444] font-bold mt-4 text-center">
                Discover Opportunities
              </h1>
              <p className="text-center  mt-4 font-medium">
                Sign up on DoThatAsk and outline your service needs or skills,
                and Explore a diverse pool of skilled professionals and artisans
                from various cities.
              </p>
            </div>
            <div className="cell p-4 flex flex-col justify-center items-center bg-[#f2f2f2] rounded-md">
              <div className="number size-20 rounded-full text-3xl font-bold bg-[#BCFFC1] text-[#00B05E] flex justify-center items-center">
                2
              </div>
              <h1 className="text-2xl text-[#444] font-bold mt-4 text-center">
                Discover Opportunities
              </h1>
              <p className="text-center  mt-4 font-medium">
                Sign up on DoThatAsk and outline your service needs or skills,
                and Explore a diverse pool of skilled professionals and artisans
                from various cities.
              </p>
            </div>
            <div className="cell p-4 flex flex-col justify-center items-center bg-[#f2f2f2] rounded-md">
              <div className="number size-20 rounded-full text-3xl font-bold bg-[#BCFFC1] text-[#00B05E] flex justify-center items-center">
                3
              </div>
              <h1 className="text-2xl text-[#444] font-bold mt-4 text-center">
                Discover Opportunities
              </h1>
              <p className="text-center  mt-4 font-medium">
                Sign up on DoThatAsk and outline your service needs or skills,
                and Explore a diverse pool of skilled professionals and artisans
                from various cities.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="star bg-do_green py-12 my-12 max-h-[300px] overflow-hidden">
        <div className="contant text-white ml-48  flex">
          <div className="text-side grow">
            <h1 className="text-3xl">Commence Your First Move</h1>
            <Button className="gap-2 mt-4 rounded-full font-bold hover:gap-4 transition-all text-[#00b05e] bg-white hover:bg-white">
              Get started <FaArrowRight />
            </Button>
          </div>
          <div className="image-side grow">
            <img
              className="rotate-[35deg] relative -right-[40%]  w-[70%]"
              src="/public/commence.png"
              alt="commence.png"
            />
          </div>
        </div>
      </div>
      <div className="comments">
        <div className="contant py-12 mx-48">
          <h1 className="text-4xl text-center py-12  text-[#006A38] font-bold">
            Explore the satisfaction of our clients with DoThatask
          </h1>
          <div className="contant flex gap-12 justify-center items-center flex-wrap">
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />
            <Comments />
          </div>
        </div>
      </div>
      <div className="">
        <div className="contant mx-48">
          <div className="text flex gap-4 items-center justify-center mt-20 mb-4">
            <span className="text-4xl text-[#006A38]">
              <LuShieldCheck />
            </span>
            <h1 className="text-4xl text-[#006A38] font-bold">
              Ensuring Your Delight, a Pledge Kept
            </h1>
          </div>
          <div className="cells flex gap-12 mt-20">
            <div className="cell">
              <h1 className="text-3xl text-center font-bold text-[#006A38]">
                Explore with Confidence
              </h1>
              <p className="text-[#6C6C6C] text-center font-medium">
                Explore a platform where your satisfaction is at the forefront,
                ensuring a confident and fulfilling journey every step of the
                way.
              </p>
            </div>
            <div className="cell">
              <h1 className="text-3xl text-center font-bold text-[#006A38]">
                Explore with Confidence
              </h1>
              <p className="text-[#6C6C6C] text-center font-medium">
                Explore a platform where your satisfaction is at the forefront,
                ensuring a confident and fulfilling journey every step of the
                way.
              </p>
            </div>
            <div className="cell">
              <h1 className="text-3xl text-center font-bold text-[#006A38]">
                Explore with Confidence
              </h1>
              <p className="text-[#6C6C6C] text-center font-medium">
                Explore a platform where your satisfaction is at the forefront,
                ensuring a confident and fulfilling journey every step of the
                way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
