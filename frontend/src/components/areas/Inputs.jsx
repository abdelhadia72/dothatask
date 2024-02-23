import React, { useState, useEffect } from 'react';

function Inputs({ placeholder, inpType }) {
  return (
    <input
      type={inpType}
      placeholder={placeholder}
      className="w-[542px] h-12 p-2.5 text-lg bg-white rounded-[5px] shadow justify-start items-center gap-[113px] inline-flex"
    />
  );
}

export default Inputs;