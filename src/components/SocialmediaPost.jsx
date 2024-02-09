import React from "react";
import Carousel from "react-grid-carousel";
import { socialMediaPosts } from "../constants";

const SocialmediaPost = () => {
  return (
    <section className="w-full container mx-auto relative py-10">
      <h1 className="font-bold text-[18px] mt-7 pl-6 px-2">Made By You</h1>
      <p className="text-[14px] pb-6 pt-2 pl-6 px-2">
        We love to see your custom creations. Post a photo on social media and
        add us for a chance to be featured here.
      </p>
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
        {socialMediaPosts.map((post, index) => (
          <Carousel.Item key={index}>
            <div className="hover:drop-shadow-lg">
              <img src={post.image} className="w-full max-w-[200px]" alt="" />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default SocialmediaPost;
