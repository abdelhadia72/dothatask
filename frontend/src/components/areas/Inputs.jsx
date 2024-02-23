import React, { useState, useEffect } from 'react';

function Inputs({ placeholder, inpType }) {
  return (
    <input
      type={inpType}
      placeholder={placeholder}
      className="lg:w-[542px] md:w-[480px] w-[225px] h-12 p-2.5 md:text-lg text-md bg-white 
      rounded-[5px] shadow justify-start items-center gap-[113px] inline-flex mx-auto"
    />
  );
}

export default Inputs;