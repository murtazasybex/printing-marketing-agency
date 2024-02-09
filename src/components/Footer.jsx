import React from "react";
import { arrow, country } from "../assets";
import { socialMediaIcons } from "../constants";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#151515] bg-cover w-full md:py-20 py-6 px-5">
        <div className="flex justify-evenly flex-wrap xl:flex-nowrap md:py-0 py-16 space-y-8 items-center px-2">
          <div className="text-start mx-auto w-full max-w-[320px] space-y-3">
            <h1 className="font-medium text-[16px] text-[#F8F8F8] underline">
              Absolutely Guaranteed.
            </h1>
            <p className="text-[14px] text-[#F8F8F8] pb-5">
              Every time. Any reason. Or we'll make it right.
            </p>
          </div>
          <div className="flex justify-around w-full md:max-w-[700px] space-x-6">
            <div className="text-start space-y-3">
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
            <div className="text-start space-y-3">
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
          </div>
          <div className="flex flex-wrap gap-5 pt-12 md:pt-8">
            {socialMediaIcons.map((icon, index) => (
              <img
                key={index}
                src={icon.image}
                className="hover:invert transition-colors w-full max-w-[30px]"
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="bg-black bg-cover flex flex-col md:flex-row justify-between w-full py-10 px-5">
        <div className="md:w-1/1 space-y-2">
          <ul className="list-none flex text-white text-[14px] gap-3 font-light md:flex-row flex-col">
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
          <p className="text-white font-light text-[12px]">
            A CIMPRESS company © 2001-2024. All rights reserved.
          </p>
          <p className="text-white font-light text-[12px]">
            Unless stated otherwise, prices are exclusive of delivery and
            product options.
          </p>
        </div>
        <div className="flex justify-center space-x-2 md:justify-end items-center mt-8 md:mt-0">
          <img src={country} className="" width={35} height={35} alt="" />
          <img src={arrow} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
