import {FaStar} from "react-icons/fa";
import React from "react";

export const Card = ({construction, worker, name, discription, rate, amount_of_rate, category, city, price}) => {
    return (
        <div className="w-[284px] h-[368px] flex-col justify-start items-start gap-1.5 my-5 inline-flex">
            <img className="w-[284px] h-[189px] rounded-[10px]" src={construction}/>
            <div className="flex-col justify-start items-start gap-2.5 flex">
                <div className="justify-start items-center gap-3.5 inline-flex">
                    <img className="size-8 object-cover rounded-full" src={worker}/>
                    <div className="text-center text-stone-950 text-base font-medium font-Ubuntu">{name}</div>
                </div>
                <div className="flex-col justify-start items-start gap-[9px] flex">
                <div className="w-[268px] text-neutral-600 text-base font-normal font-Ubuntu">{discription}
                    </div>
                    <div className="justify-start items-center gap-[5px] inline-flex">
                        <FaStar className="size-5 text-do_green relative"/>
                        <div className="text-center"><span
                            className="text-stone-950 text-base font-medium font-Ubuntu">{rate}</span><span
                            className="text-neutral-600 text-base font-medium font-['Ubuntu']">({amount_of_rate})</span></div>
                    </div>
                    <div className="text-center"><span
                        className="text-stone-950 text-base font-normal font-Ubuntu">Category: </span><span
                        className="text-neutral-600 text-base font-normal font-['Ubuntu']">{category}</span></div>
                    <div className="justify-start items-start gap-[102px] inline-flex">
                        <div className="justify-start items-center gap-2 flex">
                            <div className="text-center"><span
                                className="text-stone-950 text-base font-normal font-Ubuntu">From:</span><span
                                className="text-stone-950 text-base font-medium font-['Ubuntu']"> </span><span
                                className="text-neutral-600 text-base font-normal font-Ubuntu">{city}</span></div>
                        </div>
                        <div className="justify-start items-center gap-2 flex">
                            <div className="text-center text-stone-950 text-base font-medium font-Ubuntu">{price}DH</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};




