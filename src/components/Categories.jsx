import React from "react";
import {
  bookcover,
  bottle,
  cards,
  cup,
  flyers,
  frame,
  gift,
  lamp,
  tshirt,
  weddingcard,
} from "../assets";

const Categories = () => {
  return (
    <>
      <section className="w-full container mx-auto relative">
        <div className="pb-10">
          <h1 className="font-bold text-[18px] py-3 px-2 pl-6">
            Explore all categories
          </h1>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10 gap-5 px-2">
            <div className="w-full max-w-[130px] my-5">
              <div className="drop-shadow-lg bg-[#1A7E91] flex items-center justify-center rounded-full w-full h-full max-h-[120px] max-w-[120px]">
                <img src={bottle} className="" alt="" />
              </div>
              <p className="text-center pt-3 text-[14px]">Bottel</p>
            </div>
            <div className="w-full max-w-[130px] my-5">
              <div className="drop-shadow-lg bg-[#1A7E91] flex items-center justify-center rounded-full w-full h-full max-h-[120px] max-w-[120px]">
                <img src={cards} className="" alt="" />
              </div>
              <p className="text-center pt-3 text-[14px]">Cards</p>
            </div>
            <div className="w-full max-w-[130px] my-5">
              <div className="drop-shadow-lg bg-[#1A7E91] flex items-center justify-center rounded-full w-full h-full max-h-[120px] max-w-[120px]">
                <img src={frame} className="" alt="" />
              </div>
              <p className="text-center pt-3 text-[14px]">Frame</p>
            </div>
            <div className="w-full max-w-[130px] my-5">
              <div className="drop-shadow-lg bg-[#1A7E91] flex items-center justify-center rounded-full w-full h-full max-h-[120px] max-w-[120px]">
                <img src={gift} className="" alt="" />
              </div>
              <p className="text-center pt-3 text-[14px]">Gift Box</p>
            </div>
            <div className="w-full max-w-[130px] my-5">
              <div className="drop-shadow-lg bg-[#1A7E91] flex items-center justify-center rounded-full w-full h-full max-h-[120px] max-w-[120px]">
                <img src={lamp} className="" alt="" />
              </div>
              <p className="text-center pt-3 text-[14px]">Lamp</p>
            </div>
            <div className="w-full max-w-[130px] my-5">
              <div className="drop-shadow-lg bg-[#1A7E91] flex items-center justify-center rounded-full w-full h-full max-h-[120px] max-w-[120px]">
                <img src={weddingcard} className="" alt="" />
              </div>
              <p className="text-center pt-3 text-[14px]">Wedding card</p>
            </div>
            <div className="w-full max-w-[130px] my-5">
              <div className="drop-shadow-lg bg-[#1A7E91] flex items-center justify-center rounded-full w-full h-full max-h-[120px] max-w-[120px]">
                <img src={cup} className="" alt="" />
              </div>
              <p className="text-center pt-3 text-[14px]">Cup</p>
            </div>
            <div className="w-full max-w-[130px] my-5">
              <div className="drop-shadow-lg bg-[#1A7E91] flex items-center justify-center rounded-full w-full h-full max-h-[120px] max-w-[120px]">
                <img src={bookcover} className="" alt="" />
              </div>
              <p className="text-center pt-3 text-[14px]">Book cover</p>
            </div>
            <div className="w-full max-w-[130px] my-5">
              <div className="drop-shadow-lg bg-[#1A7E91] flex items-center justify-center rounded-full w-full h-full max-h-[120px] max-w-[120px]">
                <img src={tshirt} className="" alt="" />
              </div>
              <p className="text-center pt-3 text-[14px]">T-Shirt</p>
            </div>
            <div className="w-full max-w-[130px] my-5">
              <div className="drop-shadow-lg bg-[#1A7E91] flex items-center justify-center rounded-full w-full h-full max-h-[120px] max-w-[120px]">
                <img src={flyers} className="" alt="" />
              </div>
              <p className="text-center pt-3 text-[14px]">Flyers</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
