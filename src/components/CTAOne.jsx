import React from "react";
import { ctaimgone } from "../assets";

const CTAOne = () => {
  return (
    <>
      <section className="bg-[#1A7E91] w-full my-10">
        <div className="flex justify-around md:space-x-8 flex-wrap lg:flex-nowrap md:py-0 py-16 items-center px-2">
          <div className="space-y-3 my-6 flex flex-col items-start justify-start w-full max-w-[500px] text-start md:py-0 py-6 px-2">
            <h1 className="font-bold md:text-[28px] text-[22px] text-white">
              Frames , books and catalogues
            </h1>

            <p className="text-[15px] text-white font-light pb-2">
              From the classic stapled option to sophisticated sewn binding,
              Pixartprinting has a vast range of binding options to suit all
              types of project. Print books, magazines and catalogues and choose
              the product that best meets your commercial or publishing needs.
            </p>
            <button className="py-2 px-14 bg-white hover:bg-white/80 transition-colors text-[#5C5C5C] rounded-full font-semibold mt-5">
              Create an account
            </button>
          </div>
          <div className="">
            <img
              src={ctaimgone}
              className="w-full max-w-[700px] drop-shadow-2xl"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default CTAOne;
