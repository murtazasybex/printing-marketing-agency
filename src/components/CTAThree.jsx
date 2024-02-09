import React from "react";
import { ctaimg } from "../assets";

const CTAThree = () => {
  return (
    <>
      <section className="bg-[#1A7E91] w-full py-6">
        <div className="flex justify-center flex-wrap lg:flex-nowrap md:py-0 py-16 items-center px-2">
          <div className="flex mx-auto">
            <img
              src={ctaimg}
              className="w-full max-w-[700px] drop-shadow-2xl"
              alt=""
            />
          </div>
          <div className="space-y-2 flex flex-col items-center justify-center w-full max-w-[600px] mx-auto text-center md:pb-0 pb-12">
            <h1 className="font-bold md:text-[28px] text-[22px] text-white">
              It's good to be on the list.
            </h1>
            <p className="md:text-[18px] font-medium text-[14px] text-white pb-5">
              Get 15% off your order when you sign up for our emails
            </p>
            <input
              type="text"
              name="subscription"
              className="outline-none rounded-lg w-full font-light py-1.5 px-3"
              placeholder="Subscription email"
            />
            <p className="text-[14px] text-white font-light">
              Yes, I'd like to receive special offer emails from our website ,
              as well as news about products, services and my designs in
              progress. Read our
            </p>
            <a
              href="#"
              className="underline text-white text-[14px] font-light pb-3"
            >
              Privacy and Cookie policy.
            </a>
            <button className="py-2 px-14 bg-white hover:bg-white/80 transition-colors text-[#5C5C5C] rounded-full font-semibold">
              Submit
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTAThree;
