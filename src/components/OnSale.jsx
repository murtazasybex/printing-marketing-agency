import React from "react";
import {
  onsalefive,
  onsalefour,
  onsaleone,
  onsalethree,
  onsaletwo,
} from "../assets";

const OnSale = () => {
  return (
    <>
      <section className="w-full container mx-auto relative">
        <h1 className="font-bold text-[18px] py-6 mt-6 pl-6 px-2">On Sale</h1>
        <div className="grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-4 gap-5 px-2">
          <div className="drop-shadow-lg">
            <img src={onsaleone} className="w-full max-w-[240px]" alt="" />
            <p className="pl-2 pt-3 text-[14px]">T-Shirts</p>
          </div>
          <div className="drop-shadow-lg">
            <img src={onsaletwo} className="w-full max-w-[240px]" alt="" />
            <p className="pl-2 pt-3 text-[14px]">Jewelry box</p>
          </div>
          <div className="drop-shadow-lg">
            <img src={onsalethree} className="w-full max-w-[240px]" alt="" />
            <p className="pl-2 pt-3 text-[14px]">Tote Bag</p>
          </div>
          <div className="drop-shadow-lg">
            <img src={onsalefour} className="w-full max-w-[240px]" alt="" />
            <p className="pl-2 pt-3 text-[14px]">Gift Wrap</p>
          </div>
          <div className="drop-shadow-lg">
            <img src={onsalefive} className="w-full max-w-[240px]" alt="" />
            <p className="pl-2 pt-3 text-[14px]">Business Card</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default OnSale;
