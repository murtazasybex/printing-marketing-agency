import React from "react";
import {
  socialmediafour,
  socialmediaone,
  socialmediathree,
  socialmediatwo,
} from "../assets";

const SocialmediaPost = () => {
  return (
    <>
      <section className="w-full container mx-auto relative">
        <h1 className="font-bold text-[18px] mt-7 pl-6 px-2">Made By You</h1>
        <p className="text-[14px] pb-6 pt-2 pl-6 px-2">
          We love to see your custom creations. Post a photo on social media and
          add us for a chance to be featured here.
        </p>
        <div className="grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-4 gap-5 px-2 pb-6">
          <div className="drop-shadow-lg">
            <img src={socialmediaone} className="w-full max-w-[230px]" alt="" />
          </div>
          <div className="drop-shadow-lg">
            <img src={socialmediatwo} className="w-full max-w-[230px]" alt="" />
          </div>
          <div className="drop-shadow-lg">
            <img
              src={socialmediathree}
              className="w-full max-w-[230px]"
              alt=""
            />
          </div>
          <div className="drop-shadow-lg">
            <img
              src={socialmediafour}
              className="w-full max-w-[230px]"
              alt=""
            />
          </div>
          <div className="drop-shadow-lg">
            <img
              src={socialmediathree}
              className="w-full max-w-[230px]"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SocialmediaPost;
