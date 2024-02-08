import React from "react";
import {
  fivestars,
  testimonialimgone,
  testimonialimgthree,
  testimonialimgtwo,
} from "../assets";

const Testimonials = () => {
  return (
    <>
      <section className="w-full container mx-auto relative">
        <div className="flex flex-wrap py-20 mx-auto items-center justify-center md:space-y-0 space-y-5 gap-2 md:space-x-8">
          <div className="w-full max-w-[300px] space-y-5 h-full max-h-[410px] rounded-2xl border shadow-2xl p-5">
            <div className="flex space-x-5">
              <img src={testimonialimgone} alt="" />
              <div>
                <h1 className="font-semibold text-[18px]">ANDRUE</h1>
                <p className="font-light text-[#212833] text-[14px]">
                  January 2 ,2024
                </p>
              </div>
            </div>
            <img src={fivestars} className="w-full max-w-[90px]" alt="" />
            <p className="text-[14px]">
              I recently used this website for my printing needs, and I'm
              thoroughly impressed. The user-friendly interface made design
              customization a breeze. The print quality was outstanding, with
              vibrant colors and crisp details. What stood out was their swift
              turnaround – my prints arrived well within the promised time
              frame. The efficient service, coupled with responsive customer
              support, added to the overall positive experience. I highly
              recommend
            </p>
          </div>
          <div className="w-full max-w-[300px] space-y-5 h-full max-h-[410px] rounded-2xl border shadow-2xl p-5">
            <div className="flex space-x-5">
              <img src={testimonialimgtwo} alt="" />
              <div>
                <h1 className="font-semibold text-[18px]">ANDRUE</h1>
                <p className="font-light text-[#212833] text-[14px]">
                  January 2 ,2024
                </p>
              </div>
            </div>
            <img src={fivestars} className="w-full max-w-[90px]" alt="" />
            <p className="text-[14px]">
              I recently used this website for my printing needs, and I'm
              thoroughly impressed. The user-friendly interface made design
              customization a breeze. The print quality was outstanding, with
              vibrant colors and crisp details. What stood out was their swift
              turnaround – my prints arrived well within the promised time
              frame. The efficient service, coupled with responsive customer
              support, added to the overall positive experience. I highly
              recommend
            </p>
          </div>
          <div className="w-full max-w-[300px] space-y-5 h-full max-h-[410px] rounded-2xl border shadow-2xl p-5">
            <div className="flex space-x-5">
              <img src={testimonialimgthree} alt="" />
              <div>
                <h1 className="font-semibold text-[18px]">ANDRUE</h1>
                <p className="font-light text-[#212833] text-[14px]">
                  January 2 ,2024
                </p>
              </div>
            </div>
            <img src={fivestars} className="w-full max-w-[90px]" alt="" />
            <p className="text-[14px]">
              I recently used this website for my printing needs, and I'm
              thoroughly impressed. The user-friendly interface made design
              customization a breeze. The print quality was outstanding, with
              vibrant colors and crisp details. What stood out was their swift
              turnaround – my prints arrived well within the promised time
              frame. The efficient service, coupled with responsive customer
              support, added to the overall positive experience. I highly
              recommend
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
