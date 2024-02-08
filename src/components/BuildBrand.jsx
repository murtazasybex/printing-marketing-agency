import React from "react";
import {
  brandservicesfive,
  brandservicesfour,
  brandservicesone,
  brandservicesthree,
  brandservicestwo,
} from "../assets";

const BuildBrand = () => {
  return (
    <>
      <section className="w-full container mx-auto relative">
        <h1 className="font-bold text-[18px] py-6 mt-6 pl-3 px-2">
          Build Your Brand On Any Budget
        </h1>
        <div className="grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-4 gap-5 px-2">
          <div className="drop-shadow-lg">
            <img
              src={brandservicesone}
              className="w-full max-w-[230px]"
              alt=""
            />
            <p className="pl-2 pt-3 text-[14px]"> Presentation folder</p>
          </div>
          <div className="drop-shadow-lg">
            <img
              src={brandservicestwo}
              className="w-full max-w-[230px]"
              alt=""
            />
            <p className="pl-2 pt-3 text-[14px]">Brochures</p>
          </div>
          <div className="drop-shadow-lg">
            <img
              src={brandservicesthree}
              className="w-full max-w-[230px]"
              alt=""
            />
            <p className="pl-2 pt-3 text-[14px]">Sheet Stickers</p>
          </div>
          <div className="drop-shadow-lg">
            <img
              src={brandservicesfour}
              className="w-full max-w-[230px]"
              alt=""
            />
            <p className="pl-2 pt-3 text-[14px]">Pens</p>
          </div>
          <div className="drop-shadow-lg">
            <img
              src={brandservicesfive}
              className="w-full max-w-[230px]"
              alt=""
            />
            <p className="pl-2 pt-3 text-[14px]">Flyers</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BuildBrand;
