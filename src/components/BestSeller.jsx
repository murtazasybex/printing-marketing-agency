import React from "react";
import {
  bestsellerfive,
  bestsellerfour,
  bestsellerone,
  bestsellerthree,
  bestsellertwo,
} from "../assets";

const BestSeller = () => {
  return (
    <>
      <section className="w-full container mx-auto relative">
        <h1 className="font-bold text-[18px] py-6 px-2 pl-6">Best Seller</h1>
        <div className="grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-4 gap-2 px-2">
          <div className="drop-shadow-lg">
            <img src={bestsellerone} className="w-full max-w-[230px]" alt="" />
            <p className="pl-6 pt-3 text-[14px]">Book</p>
          </div>
          <div className="drop-shadow-lg">
            <img src={bestsellertwo} className="w-full max-w-[230px]" alt="" />
            <p className="pl-6 pt-3 text-[14px]">Shopping Bag</p>
          </div>
          <div className="drop-shadow-lg">
            <img
              src={bestsellerthree}
              className="w-full max-w-[230px]"
              alt=""
            />
            <p className="pl-6 pt-3 text-[14px]">Frame</p>
          </div>
          <div className="drop-shadow-lg">
            <img src={bestsellerfour} className="w-full max-w-[230px]" alt="" />
            <p className="pl-6 pt-3 text-[14px]">Invitation Card</p>
          </div>
          <div className="drop-shadow-lg">
            <img src={bestsellerfive} className="w-full max-w-[230px]" alt="" />
            <p className="pl-6 pt-3 text-[14px]">Calender</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BestSeller;
