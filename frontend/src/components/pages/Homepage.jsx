import { Search } from "lucide-react";
import React from "react";
import SearchCategorie from "../areas/SearchCategorie";
import { RiCameraLensLine } from "react-icons/ri";
import { IoHammerOutline } from "react-icons/io5";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { LuCookie } from "react-icons/lu";
import { AiOutlineFormatPainter } from "react-icons/ai";
import { LuScissors } from "react-icons/lu";
import { RiPencilRuler2Line } from "react-icons/ri";
import electritien from "../assets/images/electritien.jpg";
import photographic from "../assets/images/photographic.jpg";
import painter from "../assets/images/painter.jpg";
import barber from "../assets/images/barber.jpg";

function Homepage() {
  const categories = [
    {
      name: "Photographer",
      icon: <RiCameraLensLine className="categorie-icons" />,
    },
    { name: "builder", icon: <IoHammerOutline className="categorie-icons" /> },
    {
      name: "Electrician",
      icon: <BsFillLightningChargeFill className="categorie-icons" />,
    },
    { name: "Baker", icon: <LuCookie className="categorie-icons" /> },
    {
      name: "Painter",
      icon: <AiOutlineFormatPainter className="categorie-icons" />,
    },
    { name: "Barber", icon: <LuScissors className="categorie-icons" /> },
    {
      name: "Designer",
      icon: <RiPencilRuler2Line className="categorie-icons" />,
    },
  ];

  // popular work
  const popularWorks = [
    {
      name: "Electrician",
      image: electritien,
      label:
        "A craftsman specialized in installing and maintaining electrical wiring systems.",
    },
    {
      name: "Photographer",
      image: photographic,
      label: "A professional person who takes pictures using a camera.",
    },
    {
      name: "Painter",
      image: painter,
      label:
        "a craftsman who specializes in painting and decorating surfaces using plaster.",
    },
    {
      name: "Barber",
      image: barber,
      label:
        "A craftsman specializing in hair cutting and styling, and shaving the beard.",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="md:w-full relative bg-neutral-100 z-[-1]">
        <div className="md:size-[314px] size-[140px] circle-design buttom-10 md:mt-[-70px] mt-[-50px] md:ml-[-111px] ml-[-200px] z-[-1]" />
        <div className="flex w-full items-center justify-center flex-col md:h-[45vh] h-[30vh] z-[-1]">
          <div className="md:size-[238px] size-[95px]  circle-design md:right-[-140px] bottom-[80px] right-[-150px]" />
          <div className="md:size-[320px] size-[150px] circle-design md:top-[120px] top-[90px] md:right-[-140px] right-[-150px]" />
          <span className="text-neutral-800 lg:text-5xl md:text-3xl text-xl md:w-[40%] w-auto text-center md:mt-[60px] py-9 font-ubuntu">
            Find The Right Tasker
          </span>
        </div>
      </div>
      <SearchCategorie />
      <div className="inline-flex items-center justify-center md:gap-[50px] gap-0 mt-[75px] relative">
        {categories.map((e) => (
          <div className="categorie-style group">
            <div>{e.icon}</div>
            <div className="w-fit font-ubuntu font-bold md:text-md text-xxs group-hover:text-gray-500">
              {e.name}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-[0px] border border-neutral-600 md:my-[80px] my-[20px]"></div>
      <div className="text-neutral-800 md:text-4xl text-md font-bold md:mt-10 mt-2 mb-6 font-ubuntu">
        Popular Works
      </div>
      <div className="flex gap-5 my-9">
        <svg
          className="md:w-[757px] absolute left-0 z-[-1] top-[880px]"
          height="800"
          viewBox="0 0 757 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0C0 0 220.181 43.3312 313.5 139.5C406.553 235.395 360.63 351.18 443.5 456C536 573 725.312 482 755 671.5C795.135 927.683 0 721 0 721V0Z"
            fill="#00B05E"
          />
        </svg>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-2">
          {popularWorks.map((e) => (
            <div className="md:w-[284px] w-[234px] h-auto bg-white rounded-[15px] shadow flex-col justify-start items-center gap-[20px] pb-5 inline-flex">
              <img
                className="md:w-[284px] w-[234px] md:h-[189px] h-[139px] object-cover rounded-tl-[15px] rounded-tr-[15px]"
                src={e.image}
              />
              <div className="md:w-[255px] w-[217px] text-center text-neutral-800 md:text-xl md:text-md font-normalfont-ubuntu">
                {e.label}
              </div>
              <a className="w-40 text-center md:text-xl md:text-md font-normal cursor-pointer text-do_green hover:text-do_hover_green font-ubuntu">
                Check out more...
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
