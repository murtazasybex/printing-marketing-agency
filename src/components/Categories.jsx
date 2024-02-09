import React from "react";
import Carousel from "react-grid-carousel";
import { carouselItems } from "../constants";

const Categories = () => {
  return (
    <>
      <section className="w-full container mx-auto relative z-0">
        <div className="pb-10">
          <h1 className="font-bold text-[18px] py-6 px-2 pl-6">
            Explore all categories
          </h1>
          <Carousel
            loop
            autoplay
            autoplaySpeed={5000}
            responsiveLayout={[
              { breakpoint: 2000, cols: 12 },
              { breakpoint: 1700, cols: 9 },
              { breakpoint: 1300, cols: 7 },
              { breakpoint: 1024, cols: 5 },
              { breakpoint: 660, cols: 3 },
              { breakpoint: 320, cols: 2 },
            ]}
          >
            {carouselItems.map((item, index) => (
              <Carousel.Item key={index} className="w-full max-w-[130px] my-5">
                <div className="hover:drop-shadow-md mx-auto bg-[#1A7E91] hover:bg-[#1A7E91]/90 transition-colors flex items-center justify-center rounded-full w-full h-full max-h-[120px] max-w-[120px]">
                  <img src={item.image} className="" alt="" />
                </div>
                <p className="text-center pt-3 text-[14px]">{item.label}</p>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Categories;
