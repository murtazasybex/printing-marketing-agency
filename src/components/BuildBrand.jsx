import React from "react";
import Carousel from "react-grid-carousel";
import { brandServiceItems } from "../constants";

const BuildBrand = () => {
  return (
    <section className="w-full container mx-auto relative">
      <h1 className="font-bold text-[18px] py-6 mt-6 pl-3 px-2">
        Build Your Brand On Any Budget
      </h1>
      <Carousel
        loop
        autoplay
        autoplaySpeed={5000}
        responsiveLayout={[
          { breakpoint: 1700, cols: 5 },
          { breakpoint: 1300, cols: 4 },
          { breakpoint: 1024, cols: 3 },
          { breakpoint: 660, cols: 2 },
        ]}
      >
        {brandServiceItems.map((item, index) => (
          <Carousel.Item key={index}>
            <div className="hover:drop-shadow-lg">
              <img src={item.image} className="w-full max-w-[190px]" alt="" />
              <p className="pl-2 pt-3 text-[14px]">{item.text}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default BuildBrand;
