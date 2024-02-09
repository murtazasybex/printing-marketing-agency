import React, { useState } from "react";
import { cart, close, help, menu, myprojects, search, signin } from "../assets";
import { categories, navLinks } from "../constants";

const Navbar = () => {
  // const [filteredProducts, setFilteredProducts] = useState(Products);
  // const searchHandler = (e) => {
  //   const filteredArray = Products.filter((product) =>
  //     product.title.toLocaleLowerCase().includes(e.target.value)
  //   );
  //   if (filteredArray.length != 0) {
  //     setFilteredProducts(filteredArray);
  //   }
  // };
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="w-full container mx-auto relative">
        <div className="sticky top-0 z-10">
          <div className="header hidden xl:flex justify-between items-center space-x-3 md:flex-nowrap flex-wrap p-4 bg-white">
            {/* <h1 className="text-xl font-bold">Agency</h1> */}
            <div className="search flex px-3 py-2 border hover:border-[#1A7E91] transition-colors rounded-lg w-full md:max-w-[700px] max-w-[420px]">
              <button>
                <img src={search} className="w-4 h-4" alt="" />
              </button>
              <input
                type="text"
                name="search"
                placeholder="Search"
                className="bg-transparent outline-0 px-3 w-full font-extralight"
              />
            </div>
            <div className="flex justify-between items-center md:mt-0 mt-5 w-full max-w-[400px]">
              <div className="flex items-center space-x-3">
                <img src={help} alt="" />
                <a href="#" className="text-[14px] hover:underline font-normal">
                  Help
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <img src={myprojects} alt="" />
                <a href="#" className="text-[14px] hover:underline font-normal">
                  My Projects
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <img src={signin} alt="" />
                <a href="#" className="text-[14px] hover:underline font-normal">
                  Signin
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <img src={cart} alt="" />
                <a href="#" className="text-[14px] hover:underline font-normal">
                  Cart
                </a>
              </div>
            </div>
          </div>
          <div className="categories bg-white text-[12px] w-full hidden xl:flex justify-between md:shadow-sm md:border-b-2 space-x-2 px-2 py-5">
            {categories.map((category, index) => (
              <div key={index} className="hover:underline hover:text-[#FF1010]">
                <p className="font-normal">{category}</p>
              </div>
            ))}
          </div>

          {/* Hamburger */}
          <div className="xl:hidden flex flex-1 justify-end items-center pt-5 pr-2">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer invert"
              onClick={() => setToggle((prev) => !prev)}
            />
            <div
              className={`${
                toggle ? "flex" : "hidden"
              } py-4 px-2 bg-white border absolute top-14 right-0 w-full rounded-lg sidebar`}
            >
              <ul className="list-none flex flex-col items-start flex-1">
                <div className="search flex px-3 py-2 mb-3 border hover:border-[#1A7E91] transition-colors rounded-lg w-full">
                  <button>
                    <img src={search} className="w-4 h-4" alt="" />
                  </button>
                  <input
                    type="text"
                    name="search"
                    placeholder="Search"
                    className="bg-transparent outline-0 px-3 w-full font-extralight"
                  />
                </div>
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-normal pl-3 py-2 w-full cursor-pointer transition-colors hover:bg-gray-200 rounded-lg text-[14px]
        ${
          index === navLinks.length - 1 ? "mb-0" : "mb-2"
        } text-black hover:text-[#FF1010] hover:underline transition-colors`}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
                <div className="flex flex-row items-center justify-center space-x-6 mt-5 w-full max-w-[400px]">
                  <div className="flex items-center space-x-3">
                    <img src={help} alt="" />
                    <a
                      href="#"
                      className="text-[14px] hover:underline font-normal"
                    >
                      Help
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img src={myprojects} alt="" />
                    <a
                      href="#"
                      className="text-[14px] hover:underline font-normal"
                    >
                      My Projects
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img src={signin} alt="" />
                    <a
                      href="#"
                      className="text-[14px] hover:underline font-normal"
                    >
                      Signin
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img src={cart} alt="" />
                    <a
                      href="#"
                      className="text-[14px] hover:underline font-normal"
                    >
                      Cart
                    </a>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
