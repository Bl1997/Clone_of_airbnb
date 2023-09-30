import React from "react";

import { BiSearch } from "react-icons/bi";
import { GoGlobe } from "react-icons/go";
import { HiOutlineMenu } from "react-icons/hi";
import { BsPersonCircle } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { MdOutlineStorage } from "react-icons/md";



const Navbar = () => {
  return (
    <div>
      <div className=" md:flex w-[1280px] h-20 border p-3 mx-4 shadow-lg hidden  ">
        <div>
          <img
            className="w-28 h-12 bg-white cursor-pointer"
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
        <div className=" w-98 h-12  p-2 border rounded-full items-center shadow-2xl mx-auto ">
          <div className="flex gap-4 w-150 ">
            <div className=" font-semibold text-center mx-1 cursor-pointer ">
              Anywhere{" "}
            </div>
            <div className=" text-gray-400">|</div>
            <div className=" font-semibold text-center cursor-pointer">
              Any week{" "}
            </div>
            <div className=" text-gray-400">|</div>
            <div className="text-gray-600 flex text-center cursor-pointer">
              Add Guests
              <div className=" border rounded-full mx-5 bg-[#f0426e] w-8 h-8 items-center fa fa-search">
                <BiSearch className=" mt-2 mx-2 font-bold text-white " />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div>
            <button className=" hover:bg-gray-200 p-3 rounded-full font-semibold">
              Airbnb your home
            </button>
          </div>
          <div className=" m-auto ">
            <button className=" hover:bg-gray-200 rounded-full  cursor-pointer w-8 h-8 mx-1 items-center">
              <GoGlobe />
            </button>
          </div>
          <div className="flex w-24 border rounded-full gap-1  justify-around hover:shadow-md cursor-pointer">
            <button className="">
              <HiOutlineMenu />
            </button>
            <button>
              <BsPersonCircle />{" "}
            </button>
          </div>
        </div>
      </div>

      <div className=" w-full border h-16 shadow-xl rounded-full flex justify-between md:hidden  ">
        <div className="text-black mx-8 mt-4 flex items-center gap-6">
          <FaSearch />
          <div>
            <div className="font-semibold">Anywhere</div>
            <div className="flex gap-4">
              {" "}
              <div className="flex gap-8 text-gray-400">Any week </div>
              <div className=" text-gray-400">Add guests</div>
            </div>
          </div>
        </div>
        <div className="mr-8 items-end mt-4 cursor-pointer">
     
          <MdOutlineStorage />
        </div>
      </div>
  
  <div className=" w-64 text-center  shadow-2xl">
    <ul className=" shadow-lg">
        <li className=" cursor-pointer hover:bg-gray-200 rounded-md p-2 font-semibold">Sign Up</li>
        <li className=" cursor-pointer hover:bg-gray-200 rounded-md p-2" >Log in</li>
        <li  className=" cursor-pointer hover:bg-gray-200 rounded-md p-2">Airbnb your home</li>
        <li  className=" cursor-pointer hover:bg-gray-200 rounded-md p-2">Help Center</li>
    </ul>
  </div>

    </div>
  );
};

export default Navbar;
