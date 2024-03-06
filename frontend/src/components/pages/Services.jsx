import React, {useState, useContext, useEffect} from 'react';
import axios from 'axios';
import SearchCategorie from '../areas/SearchCategorie';
import {Card} from "@/components/Service/Card.jsx";

export default function Services() {
    const [data, setData] = useState([]);
    const [image, SetImage] = useState(null)

    // Fetch and users
    const getData = async () => {
        try {
            const res = await  axios.get("http://127.0.0.1:5000/api/v1/users");
            return res.data;
        } catch (err) {
            console.error(err);
    }

    // Fetch the images
    const getImages = async () => {
            try {
                const  res = await axios.get("http://127.0.0.1:5000/api/v1/worker_img/5")
                return res.data
            } catch (err) {
                console.error(err)
            }
    }


    useEffect(() => {
        getData();
        getImages();
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
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-8'>
          {data && data.filter(e => e.type === 'worker').map((e, idx) => (
              <Card
                  key={idx}
                  construction={e.construction}
                  worker={e.worker}
                  name={e.name}
                  discription={e.discription}
                  rate={e.rate}
                  amount_of_rate={e.amount_of_rate}
                  category={e.category}
                  city={e.city}
                  price={e.price}
              />
          ))}
      </div>
    </div>
  );
}
};


// <Card construction="https://www.ibuildnew.com.au/blog/wp-content/uploads/2018/06/Builder-looking-up.png"
// worker="https://www.ibuildnew.com.au/blog/wp-content/uploads/2018/06/Builder-looking-up.png"
// name="Jhon Smith"
// discription="lorem lorem lorem lorem lorem lorem lorem lorem lorem "
// rate="4.1"
// amount_of_rate="45"
// category="builder"
// city="casablanca"
// price="500"/>
