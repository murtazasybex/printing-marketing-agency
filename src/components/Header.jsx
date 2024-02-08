import React, { useState } from "react";
import { cart, help, myprojects, search, signin } from "../assets";

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
  return (
    <>
      <nav className="w-full container mx-auto relative">
        <div className="sticky top-0 z-10">
          <div className="header flex justify-between items-center space-x-3 md:flex-nowrap flex-wrap p-4 bg-white">
            {/* <h1 className="text-xl font-bold">Agency</h1> */}
            <div className="search flex px-3 py-2 border rounded-lg w-full md:max-w-[900px] max-w-[420px]">
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
          <div className="categories bg-white text-[14px] w-full flex justify-between md:shadow-md md:border-b-2 space-x-2 px-2 py-5">
            <div className=" hover:underline">
              <p className="text-[#FF1010] font-normal">Deals</p>
            </div>
            <div className=" hover:underline">
              <p className="font-normal">Business Cards</p>
            </div>
            <div className="hover:underline">
              <p className="font-normal">Postcards & Print Advertising</p>
            </div>
            <div className=" hover:underline">
              <p className="font-normal">Signs, Banners & Posters</p>
            </div>
            <div className=" hover:underline">
              <p className="font-normal">Labels, Stickers & Packaging</p>
            </div>
            <div className=" hover:underline">
              <p className="font-normal">Home & Gifts</p>
            </div>
            <div className=" hover:underline">
              <p className="font-normal">
                Celebrations, Invitations & Stationery
              </p>
            </div>
            <div className=" hover:underline">
              <p className="font-normal">Wedding</p>
            </div>
            <div className=" hover:underline">
              <p className="font-normal">Clothing & Bags</p>
            </div>
            <div className=" hover:underline">
              <p className="font-normal">Promotional Products</p>
            </div>
            <div className=" hover:underline">
              <p className="font-normal">Design & Logo</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
