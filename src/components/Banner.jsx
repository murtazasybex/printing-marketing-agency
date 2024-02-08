import React from "react";
import { bannerimg } from "../assets";

const Banner = () => {
  return (
    <>
      <section className="w-full container mx-auto relative">
        <div className="home-banner bg-cover bg-left md:bg-center rounded-xl w-full bg-no-repeat my-6">
          <div className="flex justify-between lg:flex-row flex-col md:py-0 py-16 items-center">
            <div className="space-y-5 pl-10">
              <h1 className="font-bold uppercase text-[28px] md:text-[42px] text-white">
                PRINTING DIGITAL SERVICE AGENCY{" "}
              </h1>
              <p className="md:text-[18px] text-[14px] text-white">
                Create an account and use code NEW25 at checkout.
              </p>
              <button className="py-3 md:px-6 px-4 bg-white hover:bg-white/80 transition-colors rounded-full font-semibold">
                Create an account
              </button>
            </div>
            <div className="">
              <img src={bannerimg} className="w-full" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
