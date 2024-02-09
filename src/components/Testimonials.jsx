import React from "react";
import Carousel from "react-grid-carousel";
import { fivestars } from "../assets";
import { testimonialData } from "../constants";

const Testimonials = () => {
  return (
    <section className="w-full bg-[#EAF3F5] mx-auto relative py-5">
      <div className="py-20 container mx-auto">
        <Carousel
          className="py-10"
          loop
          autoplay
          autoplaySpeed={5000}
          responsiveLayout={[
            { breakpoint: 1700, cols: 4 },
            { breakpoint: 1300, cols: 3 },
            { breakpoint: 1024, cols: 2 },
            { breakpoint: 660, cols: 1 },
          ]}
        >
          {testimonialData.map((testimonial, index) => (
            <Carousel.Item key={index}>
              <div className="testimonial-item">
                <div className="w-full max-w-[300px] space-y-5 my-8 h-full max-h-[400px] bg-white rounded-2xl border hover:shadow-xl hover:border-black/20 p-5">
                  <div className="flex space-x-5">
                    <img src={testimonial.image} alt="" />
                    <div>
                      <h1 className="font-semibold text-[18px]">
                        {testimonial.name}
                      </h1>
                      <p className="font-light text-[#212833] text-[14px]">
                        {testimonial.date}
                      </p>
                    </div>
                  </div>
                  <img src={fivestars} className="w-full max-w-[90px]" alt="" />
                  {/* Apply custom scrollbar styling to testimonial content */}
                  <div className="testimonial-content">
                    <p className="text-[14px]">{testimonial.content}</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
