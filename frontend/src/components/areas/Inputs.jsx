import React, { useState, useEffect } from 'react';

function Inputs({ placeholder, inpType }) {
  return (
    <input
      type={inpType}
      placeholder={placeholder}
      className="md:w-[542px] w-[225px] h-12 p-2.5 md:text-lg text-md bg-white rounded-[5px] shadow justify-start items-center gap-[113px] inline-flex"
    />
  );
}

export default Inputs;