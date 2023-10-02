import React, { useState } from "react";
import {LiaRupeeSignSolid} from "react-icons/lia"
import {AiFillStar} from "react-icons/ai"

import {PiHeartDuotone} from "react-icons/pi"

// const Data = [
//   {
//     img: "https://a0.muscache.com/im/pictures/fceeaee2-bbe7-4ba8-b0b8-06863e70017a.jpg?im_w=720",
//   },
//   {
//     img: "https://a0.muscache.com/im/pictures/a855fd1a-7bee-4d8a-8c71-2e20e1647a20.jpg?im_w=720",
//   },
//   {
//     img: "https://a0.muscache.com/im/pictures/3f19c1cc-7f4f-4528-990d-4a3768452aee.jpg?im_w=720",
//   },
//   {
//     img: "https://a0.muscache.com/im/pictures/3ef0bf91-afc0-4884-b2c8-13936778696a.jpg?im_w=720",
//   },
// ];

const Card = () => {
  // const [slid,setSlid]=useState(0)
  return (
    <div>
      {/* <div className= ' w-48 h-64'>   {Data.map((item,index)=>{
   return <div className='flex'>
 <img src={item.img} alt="" />
 {console.log(item.img)}
    </div>

   })}</div> */}
  <div className=" grid grid-rows-none md:grid-cols-4 gap-2 md:gap-2 grid-cols-1 sm:grid-cols-2 justify-center ">
  <div className="h-96  w-[260px] m-auto mt-4  justify-around">
  <div className="text-2xl text-white mx-5 my-5  absolute mt-2"><PiHeartDuotone/></div>
        <img
          className="w-[260px] h-72 rounded-lg items-center"
          src="https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/74a03af5-5b47-4ddc-88fc-3cc59bce50e6.jpeg?im_w=720"
          alt=""
        />
        
        <div className=" flex justify-between">
          <div className="flex flex-col ml-1">
            <div>
              <p className=" font-semibold">Jibhi, India</p>
            </div>
            <div><p className=" text-gray-400">539 kilometers away</p></div>
            <div><p className=" text-gray-400"> 21-26 apr</p></div>
            <div className="flex">
              <div className="text-xl mt-1  "> <LiaRupeeSignSolid/></div>
              <p className="font-semibold text-xl">11,421</p>
              <div><p className="ml-2">night</p></div>
              </div>
           
          </div>
          <div className="flex justify-end">
            <div className="mt-1"><AiFillStar/></div>
            <div className="font-semibold">4.5</div>
          </div>
        </div>
      </div>

      <div className="h-96 m-auto mt-4 w-[260px]   justify-around">
      <div className="text-2xl mx-5 my-5 text-white  absolute mt-2"><PiHeartDuotone/></div>
        <img
          className="w-[260px] h-72 rounded-lg items-center"
          src="https://a0.muscache.com/im/pictures/miso/Hosting-48554731/original/a79e82dc-85a0-463a-b769-ff90eb2b9d17.jpeg?im_w=720"
          alt=""
        />
       
        <div className=" flex justify-between">
          <div className="flex flex-col ml-1">
            <div>
              <p className=" font-semibold">Jibhi, India</p>
            </div>
            <div><p className=" text-gray-400">539 kilometers away</p></div>
            <div><p className=" text-gray-400"> 21-26 apr</p></div>
            <div className="flex">
              <div className="text-xl mt-1  "> <LiaRupeeSignSolid/></div>
              <p className="font-semibold text-xl">11,421</p>
              <div><p className="ml-2">night</p></div>
              </div>
           
          </div>
          <div className="flex justify-end">
            <div className="mt-1"><AiFillStar/></div>
            <div className="font-semibold">4.5</div>
          </div>
        </div>
      </div>

      <div className="h-96 m-auto mt-4 w-[260px]   justify-around">
        
      <div className="text-2xl mx-5 my-5  text-white  absolute mt-2"><PiHeartDuotone/></div>
        <img
          className="w-[260px] h-72 rounded-lg items-center"
          src="https://a0.muscache.com/im/pictures/miso/Hosting-654001690497595692/original/94605df9-10d9-4082-ad2d-3b11ec519386.jpeg?im_w=720"
          alt=""
        />
     
        <div className=" flex justify-between">
          <div className="flex flex-col ml-1">
            <div>
              <p className=" font-semibold">Jibhi, India</p>
            </div>
            <div><p className=" text-gray-400">539 kilometers away</p></div>
            <div><p className=" text-gray-400"> 21-26 apr</p></div>
            <div className="flex">
              <div className="text-xl mt-1  "> <LiaRupeeSignSolid/></div>
              <p className="font-semibold text-xl">11,421</p>
              <div><p className="ml-2">night</p></div>
              </div>
           
          </div>
          <div className="flex justify-end">
            <div className="mt-1"><AiFillStar/></div>
            <div className="font-semibold">4.5</div>
          </div>
        </div>
      </div>

      <div className="h-96 m-auto mt-4 w-[260px] relative   justify-around">
      <div className="text-2xl mx-5 my-5  text-white  absolute mt-2"><PiHeartDuotone/></div>
        <img
          className="w-[260px] h-72 rounded-lg items-center"
          src="https://a0.muscache.com/im/pictures/miso/Hosting-53408947/original/52d3cf6a-44ae-412a-909a-8bce46c3f183.jpeg?im_w=720"
          alt=""
        />
       
        <div className=" flex justify-between">
          <div className="flex flex-col ml-1">
            <div>
              <p className=" font-semibold">Jibhi, India</p>
            </div>
            <div><p className=" text-gray-400">539 kilometers away</p></div>
            <div><p className=" text-gray-400"> 21-26 apr</p></div>
            <div className="flex">
              <div className="text-xl mt-1  "> <LiaRupeeSignSolid/></div>
              <p className="font-semibold text-xl">11,421</p>
              <div><p className="ml-2">night</p></div>
              </div>
           
          </div>
          <div className="flex justify-end">
            <div className="mt-1"><AiFillStar/></div>
            <div className="font-semibold">4.5</div>
          </div>
        </div>
      </div>
  </div>
     
     
    </div>
  );
};

export default Card;
