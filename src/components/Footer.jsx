import React from "react";
import {
  arrow,
  country,
  fb,
  insta,
  linkedin,
  network,
  pinterest,
  wordpress,
  x,
  youtube,
} from "../assets";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="bg-[#151515] bg-cover w-full md:py-20 py-6 px-5">
          <div className="flex justify-evenly flex-wrap lg:flex-nowrap md:py-0 py-16 space-y-8 items-center px-2">
            <div className="text-start mx-auto w-full max-w-[320px] space-y-3">
              <h1 className="font-medium text-[16px] text-[#F8F8F8] underline">
                Absolutely Guaranteed.
              </h1>
              <p className="text-[14px] text-[#F8F8F8] pb-5">
                Every time. Any reason. Or we'll make it right.
              </p>
            </div>
            <div className="text-start mx-auto w-full max-w-[300px] space-y-3">
              <h1 className="font-semibold text-[14px] text-white">
                Let Us Help
              </h1>
              <ul className="list-none text-[14px] text-white space-y-1">
                <li className="hover:underline">My Account</li>
                <li className="hover:underline">Shipping</li>
                <li className="hover:underline">Contact & Support</li>
                <li className="hover:underline">All Products</li>
                <li className="hover:underline">Ideas & Advice</li>
                <li className="hover:underline">Reseller Program</li>
                <li className="hover:underline">Accessibility</li>
              </ul>
            </div>
            <div className="text-start mx-auto w-full max-w-[300px] space-y-3">
              <h1 className="font-semibold text-[14px] text-white">
                Our Company
              </h1>
              <ul className="list-none text-[14px] text-white space-y-1">
                <li className="hover:underline">About us</li>
                <li className="hover:underline">Careers</li>
                <li className="hover:underline">For Investors</li>
                <li className="hover:underline">For Media</li>
                <li className="hover:underline">Sustainability</li>
                <li className="hover:underline">Accessibility</li>
                <li className="hover:underline">
                  Do Not Sell or Share My Info
                </li>
              </ul>
            </div>
            <div className="mx-auto flex gap-2 w-full max-w-[390px] pt-8 md:pt-0">
              <img src={fb} className="hover:invert transition-colors" alt="" />
              <img src={x} className="hover:invert transition-colors" alt="" />
              <img
                src={insta}
                className="hover:invert transition-colors"
                alt=""
              />
              <img
                src={pinterest}
                className="hover:invert transition-colors"
                alt=""
              />
              <img
                src={youtube}
                className="hover:invert transition-colors"
                alt=""
              />
              <img
                src={wordpress}
                className="hover:invert transition-colors"
                alt=""
              />
              <img
                src={linkedin}
                className="hover:invert transition-colors"
                alt=""
              />
              <img
                src={network}
                className="hover:invert transition-colors"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="bg-black bg-cover flex justify-between w-full py-6 px-5">
          <div className="space-y-2">
            <ul className="list-none flex text-white gap-3 font-light md:flex-row flex-col">
              <li className="underline hover:no-underline">1.866.207.4955</li>
              <li className="underline hover:no-underline">Home</li>
              <li className="underline hover:no-underline">
                Privacy and Cookie Policy
              </li>
              <li className="underline hover:no-underline">
                Terms and Conditions
              </li>
              <li className="underline hover:no-underline">Legal Notice</li>
            </ul>
            <p className="text-white font-light text-[11px]">
              A CIMPRESS company © 2001-2024. All rights reserved.
            </p>
            <p className="text-white font-light text-[11px]">
              Unless stated otherwise, prices are exclusive of delivery and
              product options.
            </p>
          </div>

          <div className="flex space-x-2">
            <img src={country} className="w-full max-w-[]" alt="" />
            <img src={arrow} alt="" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
