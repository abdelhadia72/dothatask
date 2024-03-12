import { useState, useEffect } from "react";
import { Avtar } from "../Profile/Avtar";
import { Button } from "../ui/button";
import { Statistics } from "../Profile/Statistics";
import { FiPlusCircle } from "react-icons/fi";
import { ProfileCard } from "../Profile/ProfileCard";
import { Comment } from "../Profile/Comment";
import { Link } from "react-router-dom";
import { GoCommit } from "react-icons/go";

const data = {
  user: {
    name: "Aymane Doe",
    image: "https://i.ibb.co/0ZWW58n/2.webp",
    city: "Casablanca",
    rate: 4.5,
    ratingsCount: 100,
    phone: "+1234567890",
    serverPrice: 50,
    description:
      "I'm a professional web developer with over 5 years of experience. I specialize in creating modern, responsive websites and custom web applications. My goal is to provide high-quality, efficient solutions to my clients and ensure their satisfaction. I am dedicated to delivering projects on time and within budget. Contact me to discuss your project requirements and get a quote. I look forward to working with you!",
    projects: [
      {
        title: "Website Redesign",
        image: "https://i.ibb.co/kJgWx1f/website-redesign-strategy.webp",
        description:
          "Redesigned client's website to improve user experience and modernize the design.",
        category: "Web Development",
        startingPrice: 500,
      },
      {
        title: "Mobile App Development",
        image: "https://i.ibb.co/8cDpRjN/mobileappservice.jpg",
        description:
          "Developed a custom mobile app for client's business to increase customer engagement.",
        category: "Mobile Development",
        startingPrice: 1000,
      },
      {
        title: "Logo Design",
        image:
          "https://i.ibb.co/9ZWQcWF/how-to-build-website-like-Upwork-1920.jpg",
        description:
          "Designed a unique logo for client's brand to establish a strong visual identity.",
        category: "Graphic Design",
        startingPrice: 200,
      },
      {
        title: "SEO Optimization",
        image: "https://i.ibb.co/5LppxQ0/what-does-seo-stand-for.webp",
        description:
          "Optimized client's website for search engines to improve visibility and attract more organic traffic.",
        category: "Digital Marketing",
        startingPrice: 300,
      },
      {
        title: "E-commerce Website Development",
        image:
          "https://i.ibb.co/thVTr10/Technology-for-e-Commerce-website-development.webp",
        description:
          "Built an e-commerce platform for client's online store, integrating secure payment gateways and inventory management systems.",
        category: "Web Development",
        startingPrice: 800,
      },
      {
        title: "Social Media Marketing Campaign",
        image: "https://i.ibb.co/kJgWx1f/website-redesign-strategy.webp",
        description:
          "Created and executed a targeted social media marketing campaign to increase client's brand awareness and drive sales.",
        category: "Digital Marketing",
        startingPrice: 400,
      },
    ],
    comments: [
      {
        name: "Alice",
        image:
          "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        date: "2024-03-11",
        comment:
          "Great work! I was really impressed with the quality of service provided. The attention to detail and professionalism exceeded my expectations. Highly recommend.",
        rate: 5,
      },
      {
        name: "Bob",
        image: "https://xsgames.co/randomusers/assets/avatars/male/8.jpg",
        date: "2024-03-10",
        comment:
          "I had a great experience working with this service provider. Communication was clear and timely, and the quality of work delivered was excellent. Will definitely consider hiring again in the future.",
        rate: 4,
      },
      {
        name: "Charlie",
        image:
          "https://r2.starryai.com/results/1005156662/01ea57ea-66bd-4bed-a467-11bbdedb43ea.webp",
        date: "2024-03-09",
        comment:
          "I couldn't be happier with the service received. The professionalism and dedication demonstrated by the team were outstanding. They went above and beyond to ensure that my needs were met. Highly recommended!",
        rate: 5,
      },
      {
        name: "Sarah",
        image:
          "https://r2.starryai.com/results/1016399047/d23fc29d-e498-4dae-9625-55f3f1027204.webp",
        date: "2024-03-08",
        comment:
          "I am extremely pleased with the results delivered by this service provider. The quality of work exceeded my expectations, and the attention to detail was exceptional. I would definitely consider working with them again in the future.",
        rate: 5,
      },
      {
        name: "Eve",
        image:
          "https://aveurope.es/wp-content/uploads/2016/11/btx-avatar-placeholder-01.jpg",
        date: "2024-03-07",
        comment:
          "Overall, I am satisfied with the service provided. The work was delivered on time, and the quality met my expectations. However, there were a few areas that could be improved upon. Nonetheless, I would consider using this service again in the future.",
        rate: 4,
      },
      {
        name: "Frank",
        image:
          "https://optimalw.com/wp-content/uploads/2015/10/sample-avatar-300x300.jpg",
        date: "2024-03-06",
        comment:
          "My experience with this service was average. While the work was completed as expected, there were some aspects that could have been better. Communication could have been clearer, and there was room for improvement in terms of timeliness. Overall, it was an okay experience.",
        rate: 3,
      },
    ],
  },
};

export const Profilepage = () => {
  console.log(data.user);

  return (
    <div className="lg:flex-row font-ubuntu p-4 flex flex-col container">
      <div className="left_side xl:pr-16 lg:w-3/4">
        <Avtar
          avtar={data.user.image}
          name={data.user.name}
          city={data.user.city}
        />
        <div className="description">
          <h1 className="text-2xl py-6 font-400">Description</h1>
          <p className="">{data.user.description}</p>
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
          <div className="portfolio_wrapper justify-center flex gap-2 flex-wrap">
            {data.user.projects.map((project, index) => (
              <ProfileCard
                image={project.image}
                dscription={project.title}
                category={project.category}
                price={project.startingPrice}
              />
            ))}
          </div>
        </div>
        <div className="comments mt-12">
          <h1 className="text-2xl flex gap-2 items-center">
            What people loved about this seller
          </h1>
          <div className="border-b border-2 border-gray-400 rounded-md my-5"></div>
          <div className="comments_wrapper">
            {data.user.comments.map((comment, index) => (
              <Comment
                name={comment.name}
                rrate={comment.rate}
                comment={comment.comment}
                date={comment.date}
                image={comment.image}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="right_side flex flex-col lg:w-1/4 items-end">
        <h1 className="mt-10">
          <Link to={"/profile-setting"}>
            <Button className="border-green-500 border-2 text-green-600  bg-transparent hover:bg-green-500 hover:text-white">
              Profile setting
            </Button>
          </Link>
        </h1>
        <Statistics />
      </div>
    </div>
  );
};
