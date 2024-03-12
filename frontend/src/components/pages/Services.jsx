import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchCategorie from "../areas/SearchCategorie";
import { Card } from "@/components/Service/Card.jsx";

const data = {
  services: [
    {
      key: 1,
      construction: "https://codup.co/wp-content/uploads/2021/07/1.jpg",
      image:
        "https://api-private.atlassian.com/users/c185be29b8d0c2eb8ccc77d35a026df4/avatar",
      name: "React Gallery Service",
      rate: 4.6,
      ratingsCount: 120,
      category: "React Development",
      city: "San Francisco",
      price: 50,
    },
    {
      key: 2,
      construction:
        "https://assets-global.website-files.com/64d0b1ecf0fc228ea4057bb5/64dde12c4740b3e8a5a32c1c_Masters_Of_The_React_Universe%20-%20technology%20home%20illu.webp",
      image:
        "https://api-private.atlassian.com/users/c185be29b8d0c2eb8ccc77d35a026df4/avatar",
      name: "React Optimization Service",
      rate: 4.9,
      ratingsCount: 150,
      category: "Web Development",
      city: "New York",
      price: 100,
    },
    {
      key: 3,
      construction:
        "https://seobase.com/_next/image?url=https%3A%2F%2Fs3.eu-central-1.amazonaws.com%2Fseobase.com-strapi%2Fkapsys_React_SEO_Strategies_and_Best_Practices_vector_banner_OR_05abe0ca_2123_4a2d_800d_ef177a565b48_6365299d5d.png&w=3840&q=75",
      image:
        "https://api-private.atlassian.com/users/c185be29b8d0c2eb8ccc77d35a026df4/avatar",
      name: "React Image Carousel Service",
      rate: 4.7,
      ratingsCount: 180,
      category: "React Development",
      city: "London",
      price: 80,
    },
    {
      key: 4,
      construction:
        "https://bairesdev.mo.cloudinary.net/blog/2023/02/concepto-de-procesamiento-de-servidor-isomC3A9trica.jpg_s1024x1024wisk20c_S-cDXXsnNTtcqK95qcrShB-6Zgml583f4l3YrCTIX8.jpg?tx=w_1920,q_auto",
      image:
        "https://api-private.atlassian.com/users/c185be29b8d0c2eb8ccc77d35a026df4/avatar",
      name: "Lazy Loading ",
      rate: 4.8,
      ratingsCount: 200,
      category: "Frontend Development",
      city: "Los Angeles",
      price: 90,
    },
    {
      key: 5,
      construction:
        "https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1297297/retina_1708x683_1005_Design-Patterns-in-React_Cover-50911a22c4656a1f2a381b6c9ca38d57.png",
      image:
        "https://api-private.atlassian.com/users/c185be29b8d0c2eb8ccc77d35a026df4/avatar",
      name: "React Image Service",
      rate: 4.5,
      ratingsCount: 160,
      category: "UI/UX Design",
      city: "Toronto",
      price: 70,
    },
  ],
};

export default function Services() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="md:w-full relative bg-neutral-100 z-[-1]">
        <div className="md:size-[314px] size-[140px] circle-design buttom-10 md:mt-[-70px] mt-[-50px] md:ml-[-111px] ml-[-200px] z-[-1]" />
        <div className="flex w-full items-center justify-center flex-col md:h-[45vh] h-[30vh] z-[-1]">
          <div className="md:size-[238px] size-[95px] circle-design md:right-[-140px] bottom-[80px] right-[-150px]" />
          <div className="md:size-[320px] size-[150px] circle-design md:top-[120px] top-[90px] md:right-[-140px] right-[-150px]" />
          <span className="text-neutral-800 lg:text-5xl md:text-3xl text-xl md:w-[40%] w-auto text-center md:mt-[60px] py-9 font-ubuntu">
            Find The Right Tasker
          </span>
        </div>
      </div>
      <SearchCategorie />
      <div className="w-[1840px] opacity-70 h-[0px] border border-neutral-600 md:my-[80px] my-[20px]"></div>
      <div className="flex items-center gap-2 justify-center flex-wrap">
        {data.services.map((service, index) => (
          <Card
            key={index}
            construction={service.construction}
            image={service.image}
            name={service.name}
            rate={service.rate}
            amount_of_rate={service.ratingsCount}
            category={service.category}
            city={service.city}
            price={service.price * 2}
          />
        ))}
      </div>
    </div>
  );
}
