import React from 'react'
import logo from "/logo.png";
import { Link } from 'react-router-dom';
function AboutUs() {
  return (
    <div className='font-ubuntu'>
        <div className='flex gap-5 lg:w-[530px] w-[320px] mx-auto my-24 text-center items-center justify-center'>
            <Link to={'/'} className=" flex gap-2 items-center">
                <img className="max-w-[80px]" src={logo} alt="logo.png" />
                <p className="lg:text-6xl text-3xl text-do_green font-abril font-500 hidden sm:block">
                    Dothatask
                </p>
            </Link>
        </div>
        <div className="lg:w-[1440px] w-[300px] mx-auto  text-center text-stone-950 md:text-xl text-lg font-normal">Dothatask revolutionizes the way individuals connect with skilled professionals. This platform is your go-to destination for seamlessly finding artisans and experts from various cities. Whether you're seeking a service or offering your skills, DoThatAsk simplifies the process, creating a vibrant community of opportunity seekers and providers.</div>
        <div className="w-[204px] text-center mx-auto my-12 text-stone-950 text-3xl font-bold font-Ubuntu">Key Features</div>
        <div className='grid lg:grid-cols-2 grid-cols-1 mx-auto lg:w-[1440px] w-[320px] lg:gap-20 gap-8 flex-wrap'>
            <div className="lg:w-[478px] w-[300px] text-center mx-auto">
                <span className="text-neutral-600 md:text-xl text-lg font-bold ">Discover Services:<br/></span><span className="text-neutral-600 md:text-lg text-md font-normal ">Explore a diverse array of services from talented professionals across different cities. From home improvement to creative services, DoThatAsk connects you with the expertise you need.<br/></span>
                <span className="text-neutral-600 md:text-lg text-md font-normal ">
                </span>
            </div>
            <div className="lg:w-[478px] w-[300px] text-center mx-auto">
                <span className="text-neutral-600 md:text-xl text-lg font-bold ">Showcase Your Skills:<br/></span>
                <span className="text-neutral-600 md:text-lg text-md font-normal ">
                Easily present your skills and services to a broad audience. By adding your profession, you open doors to potential clients looking for your specific talents.
                    <br/>
                </span>
                <span className="text-neutral-600 md:text-lg text-md font-normal ">
                </span>
            </div>
            <div className="lg:w-[478px] w-[300px] text-center mx-auto">
                <span className="text-neutral-600 md:text-xl text-lg font-bold ">Personalized Matching:<br/></span>
                <span className="text-neutral-600 md:text-lg text-md font-normal ">
                 DoThatAsk understands your needs. Receive personalized recommendations based on your preferences and requirements, ensuring a tailored experience.
                    <br/>
                </span>
                <span className="text-neutral-600 md:text-lg text-md font-normal ">
                </span>
            </div>
            <div className="lg:w-[478px] w-[300px] text-center mx-auto">
                <span className="text-neutral-600 md:text-xl text-lg font-bold ">Effortless Connection: <br/></span>
                <span className="text-neutral-600 md:text-lg text-md font-normal ">
                Connecting with professionals is straightforward. Easily browse profiles, view portfolios, and initiate contact to discuss your project or service needs.
                    <br/>
                </span>
                <span className="text-neutral-600 md:text-lg text-md font-normal ">
                </span>
            </div>
            <div className="lg:w-[478px] w-[300px] text-center mx-auto">
                <span className="text-neutral-600 md:text-xl text-lg font-bold ">Real-time Communication: <br/></span>
                <span className="text-neutral-600 md:text-lg text-md font-normal ">
                 Enjoy real-time communication with service providers. Discuss details, negotiate terms, and get updates on the progress of your project—all within the platform.
                    <br/>
                </span>
                <span className="text-neutral-600 md:text-lg text-md font-normal ">
                </span>
            </div>
            <div className="lg:w-[478px] w-[300px] text-center mx-auto">
                <span className="text-neutral-600 md:text-xl text-lg font-bold ">User Reviews and Ratings: <br/></span>
                <span className="text-neutral-600 md:text-lg text-md font-normal ">
                 Make informed decisions by reading reviews and ratings from other DoThatAsk users. Learn from their experiences and choose the right professional for your task.
                <br/>
                </span>
                <span className="text-neutral-600 md:text-lg text-md font-normal ">
                </span>
            </div>
        </div>
            <div className="lg:w-[478px] w-[300px] text-center mx-auto lg:my-20 my-8">
                <span className="text-neutral-600 md:text-xl text-lg font-bold "> Profile Management: <br/></span>
                <span className="text-neutral-600 md:text-lg text-md font-normal ">
                Efficiently manage your profile, including personal information, services offered, and client reviews. Keep your profile up-to-date to showcase your evolving skills.
                <br/>
                </span>
                <span className="text-neutral-600 md:text-lg text-md font-normal ">
                </span>
            </div>
    </div>
  )
}

export default AboutUs