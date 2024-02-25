import { Search } from 'lucide-react'
import React from 'react'
import SearchCategorie from '../areas/SearchCategorie'

function Homepage() {
    return (
        <div>
            <div className='md:w-full relative bg-neutral-100 z-[-1]'>
                <div className='block w-full md:h-[45vh] h-[30vh] z-[-1]'>
                    <div className="md:size-[314px] size-[140px] circle-design buttom-10 md:mt-[-70px] mt-[-50px] md:ml-[-111px] ml-[-50px] z-[-1]" />
                    <div className="md:size-[238px] size-[95px]  circle-design md:right-[-140px] right-[-50px]" />
                    <div className="md:size-[320px] size-[150px] circle-design md:top-[122px] top-[50px] md:right-[-140px] right-[-50px]" />
                    <span className="text-neutral-800 lg:text-5xl md:text-3xl text-xl md:left-[33%] sm:left-[30%] left-[30%] absolute mx-auto w-[40%] text-center md:mt-[60px] py-9 font-ubuntu">Find The Right Tasker</span>
                </div>
            </div>
            <SearchCategorie />
        </div>
    )
}

export default Homepage