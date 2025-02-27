"use client";

import React, { ReactNode } from "react";

const StandardButton = () => {
  return (
    <div className="items-center relative z-10 flex justify-center mt-12">
      <a href="/contact">
        <button
          className="relative cursor-pointer rounded-2xl lg:px-28 px-16 
      py-3 bg-neutral-800 hover:text-neutral-300 active:text-white
      overflow-hidden group transition-transform 
      duration-100 transform lg:hover:scale-95 
      shadow-[0px_10px_15px_rgba(0,0,0,0.3)]
      hover:shadow-[0px_5px_8px_rgba(0,0,0,0.3)]
      active:shadow-[0px_0px_2px_rgba(0,0,0,0.3)]
      "
        >
<div
  className="
    absolute inset-0 rounded-2xl transition-all duration-300
    lg:bg-[linear-gradient(180deg,_rgba(100,100,100,1),_rgba(50,50,50,1),_rgba(38,38,38,1))]
    bg-[linear-gradient(180deg,_rgba(61,111,176,1),_rgba(48,78,118,1),_rgba(13,24,37,1))] 
    lg:group-hover:bg-[linear-gradient(180deg,_rgba(61,111,176,1),_rgba(48,78,118,1),_rgba(13,24,37,1))] 
  "
/>
          <div
            className="absolute inset-[1px] bg-neutral-950/80 rounded-2xl pointer-events-none 
            transition-shadow duration-100 z-10"
          />
          <span className="transition-colors relative z-10 text-md">
          Get Started
          </span>
        </button>
      </a>
    </div>
  );
};

export default StandardButton;
