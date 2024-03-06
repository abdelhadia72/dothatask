import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchCategorie from '../areas/SearchCategorie';
import { Card } from "@/components/Service/Card.jsx";

export default function Services() {
    const [data, setData] = useState([]);
    const [images, setImages] = useState({});

    const fetchData = async () => {
        try {
            const res = await axios.get("http://127.0.0.1:5000/api/v1/users");
            const urls = {};
            for (const user of res.data) {
                const imageUrl = await getImages(user.id);
                urls[user.id] = imageUrl;
            }
            setData(res.data);
            setImages(urls);
        } catch (err) {
            console.error(err);
        }
    };

    const getImages = async (userID) => {
        try {
            const res = await axios.get(`http://127.0.0.1:5000/api/v1/worker_img/${userID}`);
            return res.data.image_url;
        } catch (err) {
            console.error(err);
            return null;
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='md:w-full relative bg-neutral-100 z-[-1]'>
                <div className="md:size-[314px] size-[140px] circle-design buttom-10 md:mt-[-70px] mt-[-50px] md:ml-[-111px] ml-[-200px] z-[-1]" />
                <div className='flex w-full items-center justify-center flex-col md:h-[45vh] h-[30vh] z-[-1]'>
                    <div className="md:size-[238px] size-[95px] circle-design md:right-[-140px] bottom-[80px] right-[-150px]" />
                    <div className="md:size-[320px] size-[150px] circle-design md:top-[120px] top-[90px] md:right-[-140px] right-[-150px]" />
                    <span className="text-neutral-800 lg:text-5xl md:text-3xl text-xl md:w-[40%] w-auto text-center md:mt-[60px] py-9 font-ubuntu">Find The Right Tasker</span>
                </div>
            </div>
            <SearchCategorie />
            <div className="w-[1840px] opacity-70 h-[0px] border border-neutral-600 md:my-[80px] my-[20px]"></div>
                <div className='flex items-center gap-2 justify-center flex-wrap'>
                        {data.filter((e) => e.type === 'worker').map((user) => (
                            <Card key={user.id}
                                  construction={images[user.image_url]}
                                  worker="https://www.ibuildnew.com.au/blog/wp-content/uploads/2018/06/Builder-looking-up.png"
                                  name={`${user.first_name} ${user.last_name}`}
                                  rate="4"
                                  amount_of_rate="34"
                                  category={user.category}
                                  city="city"
                                  price="500"/>
                        ))}
                </div>
        </div>
    );
}
