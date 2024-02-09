import React from "react";
import { advisor, quality, speedreliability, valueformoney } from "../assets";

const Value = () => {
  return (
    <>
      <section className="w-full container mx-auto relative">
        <div className="flex items-center justify-between px-2 md:gap-2 gap-5 md:flex-row flex-col my-8">
          <div className="flex items-center justify-between w-full max-w-[240px] border hover:border-[#1A7E91] transition-colors rounded-xl space-x-5 px-6 py-2.5">
            <img src={quality} className="w-full max-w-[40px]" alt="" />
            <p className="text-[13px]">Committed to quality</p>
          </div>
          <div className="flex items-center justify-between w-full max-w-[240px] border hover:border-[#1A7E91] transition-colors rounded-xl space-x-5 px-6 py-2.5">
            <img src={valueformoney} className="w-full max-w-[40px]" alt="" />
            <p className="text-[13px]">Value for money</p>
          </div>
          <div className="flex items-center justify-between w-full max-w-[240px] border hover:border-[#1A7E91] transition-colors rounded-xl space-x-5 px-6 py-2.5">
            <img
              src={speedreliability}
              className="w-full max-w-[40px]"
              alt=""
            />
            <p className="text-[13px]">Speed & Reliability</p>
          </div>
          <div className="flex items-center justify-between w-full max-w-[240px] hover:border-[#1A7E91] transition-colors border rounded-xl space-x-5 px-6 py-2.5">
            <img src={advisor} className="w-full max-w-[40px]" alt="" />
            <p className="text-[13px]">Professional adviser</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Value;
