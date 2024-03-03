import React from 'react'
import { TiDeleteOutline } from "react-icons/ti";

function Keyword({content}) {
  return (
    <div className="w-auto h-7 p-2.5 bg-zinc-100 rounded-[15px] justify-center items-center gap-2.5 inline-flex">
        <div className="text-neutral-500 text-base font-normal">{content}</div>
        <TiDeleteOutline className="w-4 h-4 relative" />
    </div>
  )
}

export default Keyword