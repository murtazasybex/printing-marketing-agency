import React from "react";

const Info = () => {
  return (
    <>
      <section className="w-full container mx-auto relative">
        <div className="bg-[#F8F8F8] w-full md:py-24 py-18">
          <div className="flex justify-around flex-wrap space-x-3 lg:flex-nowrap md:py-0 py-16 items-center px-2">
            <div className="text-start w-full max-w-[520px] px-2">
              <h1 className="font-bold md:text-[44px] text-[28px] text-black">
                Here for small <br />
                business since 1995.
              </h1>
              <p className="md:text-[18px] text-[14px] text-black pb-5">
                For more than 20 years, Our website has helped small business
                owners, entrepreneurs and dreamers create custom designs and
                professional marketing. Our online printing services are
                intended to help you find custom products you need – business
                cards, promotional marketing and more – to create a look you
                love.
              </p>
            </div>
            <div className="text-start w-full max-w-[500px]">
              <h1 className="font-bold text-[18px] text-black">Easy Design</h1>
              <p className="text-[14px] text-black pb-5">
                Our online tools make the process as simple and clear as
                possible, and we’re working to improve your experience all the
                time.
              </p>
              <h1 className="font-bold text-[18px] text-black">
                Make It Match
              </h1>
              <p className="text-[14px] text-black pb-5">
                Our designs can be used across multiple printed products, which
                makes it easier for you to create consistent, professional
                marketing.
              </p>
              <h1 className="font-bold text-[18px] text-black">
                Absolutely Guaranteed
              </h1>
              <p className="text-[14px] text-black pb-5">
                We stand by everything we sell. So if you’re not satisfied,
                we’ll make it right.{" "}
                <a className="underline" href="">
                  Learn more
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
