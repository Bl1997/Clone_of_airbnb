import React, { useState } from "react";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { AiFillStar } from "react-icons/ai";

import { PiHeartDuotone } from "react-icons/pi";

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
      <div className=" mt-8  grid grid-rows-none md:grid-cols-4 gap-2 md:gap-2 grid-cols-1 sm:grid-cols-2 justify-center ">
        <div className="h-96   w-[260px] m-auto mt hover:scale-110 transition duration-500 cursor-pointer  justify-around ">
          <div className="text-2xl text-white mx-5 my-5  absolute mt-2">
            <PiHeartDuotone />
          </div>
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
              <div>
                <p className=" text-gray-400">3245 m elevetion</p>
              </div>
              <div>
                <p className=" text-gray-400"> 21-26 oct</p>
              </div>
              <div className="flex">
                <div className=" mt-1  ">
                  {" "}
                  <LiaRupeeSignSolid />
                </div>
                <p className="font-semibold ">2,312</p>
                <div>
                  <p className="ml-2">night</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="mt-1">
                <AiFillStar />
              </div>
              <div className="font-semibold">4.32</div>
            </div>
          </div>
        </div>

        <div className="h-96 hover:scale-110 transition duration-500 cursor-pointer m-auto mt-4 w-[260px]   justify-around">
          <div className="text-2xl mx-5 my-5 text-white  absolute mt-2">
            <PiHeartDuotone />
          </div>
          <img
            className="w-[260px] h-72 rounded-lg items-center"
            src="https://a0.muscache.com/im/pictures/miso/Hosting-48554731/original/a79e82dc-85a0-463a-b769-ff90eb2b9d17.jpeg?im_w=720"
            alt=""
          />

          <div className=" flex justify-between">
            <div className="flex flex-col ml-1">
              <div>
                <p className=" font-semibold">Maras,peru</p>
              </div>
              <div>
                <p className=" text-gray-400">3245 m elevetion</p>
              </div>
              <div>
                <p className=" text-gray-400"> 9-14 oct</p>
              </div>
              <div className="flex">
                <div className=" mt-1  ">
                  {" "}
                  <LiaRupeeSignSolid />
                </div>
                <p className="font-semibold ">5,623</p>
                <div>
                  <p className="ml-2">night</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="mt-1">
                <AiFillStar />
              </div>
              <div className="font-semibold">3.52</div>
            </div>
          </div>
        </div>

        <div className="h-96 hover:scale-110 transition duration-500 cursor-pointer m-auto mt-4 w-[260px]   justify-around">
          <div className="text-2xl mx-5 my-5  text-white  absolute mt-2">
            <PiHeartDuotone />
          </div>
          <img
            className="w-[260px] h-72 rounded-lg items-center"
            src="https://a0.muscache.com/im/pictures/miso/Hosting-654001690497595692/original/94605df9-10d9-4082-ad2d-3b11ec519386.jpeg?im_w=720"
            alt=""
          />

          <div className=" flex justify-between">
            <div className="flex flex-col ml-1">
              <div>
                <p className=" font-semibold">Rakccham, India</p>
              </div>
              <div>
                <p className=" text-gray-400">3245 m elevetion</p>
              </div>
              <div>
                <p className=" text-gray-400"> 21-26 apr</p>
              </div>
              <div className="flex">
                <div className=" mt-1  ">
                  {" "}
                  <LiaRupeeSignSolid />
                </div>
                <p className="font-semibold ">1,821</p>
                <div>
                  <p className="ml-2">night</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="mt-1">
                <AiFillStar />
              </div>
              <div className="font-semibold">4.53</div>
            </div>
          </div>
        </div>

        <div className="h-96 hover:scale-110 transition duration-500 cursor-pointer m-auto mt-4 w-[260px] relative   justify-around">
          <div className="text-2xl mx-5 my-5  text-white  absolute mt-2">
            <PiHeartDuotone />
          </div>
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
              <div>
                <p className=" text-gray-400">3245 m elevetion</p>
              </div>
              <div>
                <p className=" text-gray-400"> 21-26 apr</p>
              </div>
              <div className="flex">
                <div className=" mt-1  ">
                  {" "}
                  <LiaRupeeSignSolid />
                </div>
                <p className="font-semibold ">11,421</p>
                <div>
                  <p className="ml-2">night</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="mt-1">
                <AiFillStar />
              </div>
              <div className="font-semibold">4.5</div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-8 grid grid-rows-none md:grid-cols-4 gap-2 md:gap-2 grid-cols-1 sm:grid-cols-2 justify-center ">
        <div className="h-96 hover:scale-110 transition duration-500 cursor-pointer  w-[260px] m-auto mt-4  justify-around">
          <div className="text-2xl text-white mx-5 my-5  absolute mt-2">
            <PiHeartDuotone />
          </div>
          <img
            className="w-[260px] h-72 rounded-lg items-center"
            src="https://a0.muscache.com/im/pictures/miso/Hosting-3298227/original/db91b151-be3e-4a4c-8790-ed64c0ac7698.jpeg?im_w=720"
            alt=""
          />

          <div className=" flex justify-between">
            <div className="flex flex-col ml-1">
              <div>
                <p className=" font-semibold">Dillon,colardo</p>
              </div>
              <div>
                <p className=" text-gray-400">4,512 m elevetion</p>
              </div>
              <div>
                <p className=" text-gray-400"> 21-26 oct</p>
              </div>
              <div className="flex">
                <div className=" mt-1  ">
                  {" "}
                  <LiaRupeeSignSolid />
                </div>
                <p className="font-semibold ">4,325</p>
                <div>
                  <p className="ml-2">night</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="mt-1">
                <AiFillStar />
              </div>
              <div className="font-semibold">4.73</div>
            </div>
          </div>
        </div>

        <div className="h-96 hover:scale-110 transition duration-500 cursor-pointer m-auto mt-4 w-[260px]   justify-around">
          <div className="text-2xl mx-5 my-5 text-white  absolute mt-2">
            <PiHeartDuotone />
          </div>
          <img
            className="w-[260px] h-72 rounded-lg items-center"
            src="https://a0.muscache.com/im/pictures/miso/Hosting-47726590/original/073089b8-d783-47df-bcda-e636bdb0d0a9.jpeg?im_w=720"
            alt=""
          />

          <div className=" flex justify-between">
            <div className="flex flex-col ml-1">
              <div>
                <p className=" font-semibold">Fairplay,calardo</p>
              </div>
              <div>
                <p className=" text-gray-400">3,504 m elevetion</p>
              </div>
              <div>
                <p className=" text-gray-400"> 21-26 oct</p>
              </div>
              <div className="flex">
                <div className=" mt-1  ">
                  {" "}
                  <LiaRupeeSignSolid />
                </div>
                <p className="font-semibold ">30,888</p>
                <div>
                  <p className="ml-2">night</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="mt-1">
                <AiFillStar />
              </div>
              <div className="font-semibold">4.84</div>
            </div>
          </div>
        </div>

        <div className="h-96 hover:scale-110 transition duration-500 cursor-pointer m-auto mt-4 w-[260px]   justify-around">
          <div className="text-2xl mx-5 my-5  text-white  absolute mt-2">
            <PiHeartDuotone />
          </div>
          <img
            className="w-[260px] h-72 rounded-lg items-center"
            src="https://a0.muscache.com/im/pictures/33dae5b5-6141-4e56-83ee-253b88d31159.jpg?im_w=720"
            alt=""
          />

          <div className=" flex justify-between">
            <div className="flex flex-col ml-1">
              <div>
                <p className=" font-semibold">colambia</p>
              </div>
              <div>
                <p className=" text-gray-400">612 kilometers away</p>
              </div>
              <div>
                <p className=" text-gray-400"> 2-4 may</p>
              </div>
              <div className="flex">
                <div className=" mt-1  ">
                  {" "}
                  <LiaRupeeSignSolid />
                </div>
                <p className="font-semibold ">19,312</p>
                <div>
                  <p className="ml-2">night</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="mt-1">
                <AiFillStar />
              </div>
              <div className="font-semibold">3.61</div>
            </div>
          </div>
        </div>

        <div className="h-96 hover:scale-110 transition duration-500 cursor-pointer m-auto mt-4 w-[260px] relative   justify-around">
          <div className="text-2xl mx-5 my-5  text-white  absolute mt-2">
            <PiHeartDuotone />
          </div>
          <img
            className="w-[260px] h-72 rounded-lg items-center"
            src="https://a0.muscache.com/im/pictures/miso/Hosting-46136014/original/10a7d81d-5f3a-462a-8bb8-3239d94b2c93.jpeg?im_w=720"
            alt=""
          />

          <div className=" flex justify-between">
            <div className="flex flex-col ml-1">
              <div>
                <p className=" font-semibold">Pintag,Ecudor</p>
              </div>
              <div>
                <p className=" text-gray-400">3245 m elevetion</p>
              </div>
              <div>
                <p className=" text-gray-400"> 3-4 oct </p>
              </div>
              <div className="flex">
                <div className=" mt-1  ">
                  {" "}
                  <LiaRupeeSignSolid />
                </div>
                <p className="font-semibold ">14,232</p>
                <div>
                  <p className="ml-2">night</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="mt-1">
                <AiFillStar />
              </div>
              <div className="font-semibold">4.88</div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-8 grid grid-rows-none md:grid-cols-4 gap-2 md:gap-2 grid-cols-1 sm:grid-cols-2 justify-center ">
        <div className="h-96 hover:scale-110 transition duration-500 cursor-pointer  w-[260px] m-auto mt-4  justify-around">
          <div className="text-2xl text-white mx-5 my-5  absolute mt-2">
            <PiHeartDuotone />
          </div>
          <img
            className="w-[260px] h-72 rounded-lg items-center"
            src="https://a0.muscache.com/im/pictures/miso/Hosting-674320571749181401/original/78e79acf-8af4-4b18-815f-70475ec2c506.jpeg?im_w=720"
            alt=""
          />

          <div className=" flex justify-between">
            <div className="flex flex-col ml-1">
              <div>
                <p className=" font-semibold">Nubra, India</p>
              </div>
              <div>
                <p className=" text-gray-400">5,091 m elevetion</p>
              </div>
              <div>
                <p className=" text-gray-400"> 2-7 oct</p>
              </div>
              <div className="flex">
                <div className=" mt-1  ">
                  {" "}
                  <LiaRupeeSignSolid />
                </div>
                <p className="font-semibold">15,976</p>
                <div>
                  <p className="ml-2">night</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="mt-1">
                <AiFillStar />
              </div>
              <div className="font-semibold">4.5</div>
            </div>
          </div>
        </div>

        <div className="h-96 hover:scale-110 transition duration-500 cursor-pointer m-auto mt-4 w-[260px]   justify-around">
          <div className="text-2xl mx-5 my-5 text-white  absolute mt-2">
            <PiHeartDuotone />
          </div>
          <img
            className="w-[260px] h-72 rounded-lg items-center"
            src="https://a0.muscache.com/im/pictures/miso/Hosting-22268547/original/9b11d199-3842-4530-b6d7-97b86421e3ac.jpeg?im_w=720"
            alt=""
          />

          <div className=" flex justify-between">
            <div className="flex flex-col ml-1">
              <div>
                <p className=" font-semibold">Cosco,Peru</p>
              </div>
              <div>
                <p className=" text-gray-400">3,471 m elevetion</p>
              </div>
              <div>
                <p className=" text-gray-400"> 7-9 oct</p>
              </div>
              <div className="flex">
                <div className=" mt-1  ">
                  {" "}
                  <LiaRupeeSignSolid />
                </div>
                <p className="font-semibold ">4,471</p>
                <div>
                  <p className="ml-2">night</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="mt-1">
                <AiFillStar />
              </div>
              <div className="font-semibold">4.21</div>
            </div>
          </div>
        </div>

        <div className="h-96 hover:scale-110 transition duration-500 cursor-pointer m-auto mt-4 w-[260px]   justify-around">
          <div className="text-2xl mx-5 my-5  text-white  absolute mt-2">
            <PiHeartDuotone />
          </div>
          <img
            className="w-[260px] h-72 rounded-lg items-center"
            src="https://a0.muscache.com/im/pictures/4ac06cba-7b1d-4d8c-b124-1d956726c797.jpg?im_w=720"
            alt=""
          />

          <div className=" flex justify-between">
            <div className="flex flex-col ml-1">
              <div>
                <p className=" font-semibold">Aquatinia,colambia</p>
              </div>
              <div>
                <p className=" text-gray-400">3,054 m</p>
              </div>
              <div>
                <p className=" text-gray-400"> 8-13 oct</p>
              </div>
              <div className="flex">
                <div className=" mt-1  ">
                  {" "}
                  <LiaRupeeSignSolid />
                </div>
                <p className="font-semibold ">7,329</p>
                <div>
                  <p className="ml-2">night</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="mt-1">
                <AiFillStar />
              </div>
              <div className="font-semibold">4.88</div>
            </div>
          </div>
        </div>

        <div className="h-96 hover:scale-110 transition duration-500 cursor-pointer m-auto mt-4 w-[260px] relative   justify-around">
          <div className="text-2xl mx-5 my-5  text-white  absolute mt-2">
            <PiHeartDuotone />
          </div>
          <img
            className="w-[260px] h-72 rounded-lg items-center"
            src="https://a0.muscache.com/im/pictures/944b9510-945e-47cd-bd7d-bc1b5b94ba4b.jpg?im_w=720"
            alt=""
          />

          <div className=" flex justify-between">
            <div className="flex flex-col ml-1">
              <div>
                <p className=" font-semibold">Himachal Pradesh, India</p>
              </div>
              <div>
                <p className=" text-gray-400">3,830 m elevetion</p>
              </div>
              <div>
                <p className=" text-gray-400"> 3-4 oct </p>
              </div>
              <div className="flex">
                <div className=" mt-1  ">
                  {" "}
                  <LiaRupeeSignSolid />
                </div>
                <p className="font-semibold ">1,799</p>
                <div>
                  <p className="ml-2">night</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="mt-1">
                <AiFillStar />
              </div>
              <div className="font-semibold">3.22</div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-8 grid grid-rows-none md:grid-cols-4 gap-2 md:gap-2 grid-cols-1 sm:grid-cols-2 justify-center ">
        <div className="h-96 hover:scale-110 transition duration-500 cursor-pointer  w-[260px] m-auto mt-4  justify-around">
          <div className="text-2xl text-white mx-5 my-5  absolute mt-2">
            <PiHeartDuotone />
          </div>
          <img
            className="w-[260px] h-72 rounded-lg items-center"
            src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-679548961635495824/original/38c34125-85a8-4618-ac56-a922b44904c0.jpeg?im_w=720"
            alt=""
          />

          <div className=" flex justify-between">
            <div className="flex flex-col ml-1">
              <div>
                <p className=" font-semibold">Dillon</p>
              </div>
              <div>
                <p className=" text-gray-400">5,091 m elevetion</p>
              </div>
              <div>
                <p className=" text-gray-400"> 2-7 oct</p>
              </div>
              <div className="flex">
                <div className=" mt-1  ">
                  {" "}
                  <LiaRupeeSignSolid />
                </div>
                <p className="font-semibold">15,976</p>
                <div>
                  <p className="ml-2">night</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="mt-1">
                <AiFillStar />
              </div>
              <div className="font-semibold">3.5</div>
            </div>
          </div>
        </div>

        <div className="h-96 hover:scale-110 transition duration-500 cursor-pointer m-auto mt-4 w-[260px]   justify-around">
          <div className="text-2xl mx-5 my-5 text-white  absolute mt-2">
            <PiHeartDuotone />
          </div>
          <img
            className="w-[260px] h-72 rounded-lg items-center"
            src="https://a0.muscache.com/im/pictures/bbe939d6-8991-4f7b-9d5d-52b4fdd8a583.jpg?im_w=720"
            alt=""
          />

          <div className=" flex justify-between">
            <div className="flex flex-col ml-1">
              <div>
                <p className=" font-semibold">Noida</p>
              </div>
              <div>
                <p className=" text-gray-400">3,471 m elevetion</p>
              </div>
              <div>
                <p className=" text-gray-400"> 6-9 oct</p>
              </div>
              <div className="flex">
                <div className=" mt-1  ">
                  {" "}
                  <LiaRupeeSignSolid />
                </div>
                <p className="font-semibold ">3,521</p>
                <div>
                  <p className="ml-2">night</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="mt-1">
                <AiFillStar />
              </div>
              <div className="font-semibold">4.21</div>
            </div>
          </div>
        </div>

        <div className="h-96 hover:scale-110 transition duration-500 cursor-pointer m-auto mt-4 w-[260px]   justify-around">
          <div className="text-2xl mx-5 my-5  text-white  absolute mt-2">
            <PiHeartDuotone />
          </div>
          <img
            className="w-[260px] h-72 rounded-lg items-center"
            src="https://a0.muscache.com/im/pictures/miso/Hosting-875550364860040565/original/2c878c92-d45b-40d1-84b0-d3c393c38d1a.jpeg?im_w=720"
            alt=""
          />

          <div className=" flex justify-between">
            <div className="flex flex-col ml-1">
              <div>
                <p className=" font-semibold">Aquatinia,colambia</p>
              </div>
              <div>
                <p className=" text-gray-400">3,054 m</p>
              </div>
              <div>
                <p className=" text-gray-400"> 8-13 oct</p>
              </div>
              <div className="flex">
                <div className=" mt-1  ">
                  {" "}
                  <LiaRupeeSignSolid />
                </div>
                <p className="font-semibold ">8,125</p>
                <div>
                  <p className="ml-2">night</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="mt-1">
                <AiFillStar />
              </div>
              <div className="font-semibold">4.21</div>
            </div>
          </div>
        </div>

        <div className="h-96 hover:scale-110 transition duration-500 cursor-pointer m-auto mt-4 w-[260px] relative   justify-around">
          <div className="text-2xl mx-5 my-5  text-white  absolute mt-2">
            <PiHeartDuotone />
          </div>
          <img
            className="w-[260px] h-72 rounded-lg items-center"
            src="https://a0.muscache.com/im/pictures/miso/Hosting-45471602/original/1783078a-2f6a-43a3-82ea-e3e506b6b969.jpeg?im_w=720"
            alt=""
          />

          <div className=" flex justify-between">
            <div className="flex flex-col ml-1">
              <div>
                <p className=" font-semibold">Himachal Pradesh, India</p>
              </div>
              <div>
                <p className=" text-gray-400">2,830 m elevetion</p>
              </div>
              <div>
                <p className=" text-gray-400"> 9-10 oct </p>
              </div>
              <div className="flex">
                <div className=" mt-1  ">
                  {" "}
                  <LiaRupeeSignSolid />
                </div>
                <p className="font-semibold ">30,999</p>
                <div>
                  <p className="ml-2">night</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="mt-1">
                <AiFillStar />
              </div>
              <div className="font-semibold">4.81</div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-8 grid grid-rows-none md:grid-cols-4 gap-2 md:gap-2 grid-cols-1 sm:grid-cols-2 justify-center ">
        <div className="h-96 hover:scale-110 transition duration-500 cursor-pointer  w-[260px] m-auto mt-4  justify-around">
          <div className="text-2xl text-white mx-5 my-5  absolute mt-2">
            <PiHeartDuotone />
          </div>
          <img
            className="w-[260px] h-72 rounded-lg items-center"
            src="https://a0.muscache.com/im/pictures/490ad4bc-dd3f-40a6-ac5e-4ca30b4597fe.jpg?im_w=720"
            alt=""
          />

          <div className=" flex justify-between">
            <div className="flex flex-col ml-1">
              <div>
                <p className=" font-semibold">Langza, India</p>
              </div>
              <div>
                <p className=" text-gray-400">5,091 m elevetion</p>
              </div>
              <div>
                <p className=" text-gray-400"> 2-7 oct</p>
              </div>
              <div className="flex">
                <div className=" mt-1  ">
                  {" "}
                  <LiaRupeeSignSolid />
                </div>
                <p className="font-semibold">4,564</p>
                <div>
                  <p className="ml-2">night</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="mt-1">
                <AiFillStar />
              </div>
              <div className="font-semibold">3.5</div>
            </div>
          </div>
        </div>

        <div className="h-96 hover:scale-110 transition duration-500 cursor-pointer m-auto mt-4 w-[260px]   justify-around">
          <div className="text-2xl mx-5 my-5 text-white  absolute mt-2">
            <PiHeartDuotone />
          </div>
          <img
            className="w-[260px] h-72 rounded-lg items-center"
            src="https://a0.muscache.com/im/pictures/miso/Hosting-797199572636678424/original/c288b8d4-6e1f-4f63-bffc-ed4fc3eb4d8a.jpeg?im_w=720"
            alt=""
          />

          <div className=" flex justify-between">
            <div className="flex flex-col ml-1">
              <div>
                <p className=" font-semibold">Alma,Colorado,US</p>
              </div>
              <div>
                <p className=" text-gray-400">3,471 m elevetion</p>
              </div>
              <div>
                <p className=" text-gray-400"> 2-7 nov</p>
              </div>
              <div className="flex">
                <div className=" mt-1  ">
                  {" "}
                  <LiaRupeeSignSolid />
                </div>
                <p className="font-semibold ">19,359</p>
                <div>
                  <p className="ml-2">night</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="mt-1">
                <AiFillStar />
              </div>
              <div className="font-semibold">4.79</div>
            </div>
          </div>
        </div>

        <div className="h-96 hover:scale-110 transition duration-500 cursor-pointer m-auto mt-4 w-[260px]   justify-around">
          <div className="text-2xl mx-5 my-5  text-white  absolute mt-2">
            <PiHeartDuotone />
          </div>
          <img
            className="w-[260px] h-72 rounded-lg items-center"
            src="https://a0.muscache.com/im/pictures/f489cebe-3ae6-41bd-a283-809bf363d63b.jpg?im_w=720"
            alt=""
          />

          <div className=" flex justify-between">
            <div className="flex flex-col ml-1">
              <div>
                <p className=" font-semibold">Queto,Equador</p>
              </div>
              <div>
                <p className=" text-gray-400">3,294 m elevation</p>
              </div>
              <div>
                <p className=" text-gray-400"> 5-10 oct</p>
              </div>
              <div className="flex">
                <div className=" mt-1  ">
                  {" "}
                  <LiaRupeeSignSolid />
                </div>
                <p className="font-semibold ">36,163</p>
                <div>
                  <p className="ml-2">night</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="mt-1">
                <AiFillStar />
              </div>
              <div className="font-semibold">5.0</div>
            </div>
          </div>
        </div>

        <div className="h-96 hover:scale-110 transition duration-500 cursor-pointer m-auto mt-4 w-[260px] relative   justify-around">
          <div className="text-2xl mx-5 my-5  text-white  absolute mt-2">
            <PiHeartDuotone />
          </div>
          <img
            className="w-[260px] h-72 rounded-lg items-center"
            src="https://a0.muscache.com/im/pictures/103043747/1c2ac70a_original.jpg?im_w=720"
            alt=""
          />

          <div className=" flex justify-between">
            <div className="flex flex-col ml-1">
              <div>
                <p className=" font-semibold">Capachica, Peru</p>
              </div>
              <div>
                <p className=" text-gray-400">3,824 m elevetion</p>
              </div>
              <div>
                <p className=" text-gray-400"> 2-7 oct </p>
              </div>
              <div className="flex">
                <div className=" mt-1  ">
                  {" "}
                  <LiaRupeeSignSolid />
                </div>
                <p className="font-semibold ">5,695</p>
                <div>
                  <p className="ml-2">night</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="mt-1">
                <AiFillStar />
              </div>
              <div className="font-semibold">4.79</div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-8 grid grid-rows-none md:grid-cols-4 gap-2 md:gap-2 grid-cols-1 sm:grid-cols-2 justify-center ">
        <div className="h-96 hover:scale-110 transition duration-500 cursor-pointer  w-[260px] m-auto mt-4  justify-around">
          <div className="text-2xl text-white mx-5 my-5  absolute mt-2">
            <PiHeartDuotone />
          </div>
          <img
            className="w-[260px] h-72 rounded-lg items-center"
            src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-649957357567999792/original/dc08d008-6346-4dc7-9bda-476001e9a534.jpeg?im_w=720"
            alt=""
          />

          <div className=" flex justify-between">
            <div className="flex flex-col ml-1">
              <div>
                <p className=" font-semibold">Langza, India</p>
              </div>
              <div>
                <p className=" text-gray-400">5,091 m elevetion</p>
              </div>
              <div>
                <p className=" text-gray-400"> 2-7 oct</p>
              </div>
              <div className="flex">
                <div className=" mt-1  ">
                  {" "}
                  <LiaRupeeSignSolid />
                </div>
                <p className="font-semibold">4,564</p>
                <div>
                  <p className="ml-2">night</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="mt-1">
                <AiFillStar />
              </div>
              <div className="font-semibold">3.5</div>
            </div>
          </div>
        </div>

        <div className="h-96 hover:scale-110 transition duration-500 cursor-pointer m-auto mt-4 w-[260px]   justify-around">
          <div className="text-2xl mx-5 my-5 text-white  absolute mt-2">
            <PiHeartDuotone />
          </div>
          <img
            className="w-[260px] h-72 rounded-lg items-center"
            src="https://a0.muscache.com/im/pictures/2f97d868-bdd6-45a4-a7c5-7bba3e371815.jpg?im_w=720"
            alt=""
          />

          <div className=" flex justify-between">
            <div className="flex flex-col ml-1">
              <div>
                <p className=" font-semibold">Alma,Colorado,US</p>
              </div>
              <div>
                <p className=" text-gray-400">3,471 m elevetion</p>
              </div>
              <div>
                <p className=" text-gray-400"> 2-7 nov</p>
              </div>
              <div className="flex">
                <div className=" mt-1  ">
                  {" "}
                  <LiaRupeeSignSolid />
                </div>
                <p className="font-semibold ">19,359</p>
                <div>
                  <p className="ml-2">night</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="mt-1">
                <AiFillStar />
              </div>
              <div className="font-semibold">4.79</div>
            </div>
          </div>
        </div>

        <div className="h-96 hover:scale-110 transition duration-500 cursor-pointer m-auto mt-4 w-[260px]   justify-around">
          <div className="text-2xl mx-5 my-5  text-white  absolute mt-2">
            <PiHeartDuotone />
          </div>
          <img
            className="w-[260px] h-72 rounded-lg items-center"
            src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-49461793/original/869bd816-11db-418a-ade8-fdef95468ddf.jpeg?im_w=720"
            alt=""
          />

          <div className=" flex justify-between">
            <div className="flex flex-col ml-1">
              <div>
                <p className=" font-semibold">Queto,Equador</p>
              </div>
              <div>
                <p className=" text-gray-400">3,294 m elevation</p>
              </div>
              <div>
                <p className=" text-gray-400"> 5-10 oct</p>
              </div>
              <div className="flex">
                <div className=" mt-1  ">
                  {" "}
                  <LiaRupeeSignSolid />
                </div>
                <p className="font-semibold ">36,163</p>
                <div>
                  <p className="ml-2">night</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="mt-1">
                <AiFillStar />
              </div>
              <div className="font-semibold">5.0</div>
            </div>
          </div>
        </div>

        <div className="h-96 hover:scale-110 transition duration-500 cursor-pointer m-auto mt-4 w-[260px] relative   justify-around">
          <div className="text-2xl mx-5 my-5  text-white  absolute mt-2">
            <PiHeartDuotone />
          </div>
          <img
            className="w-[260px] h-72 rounded-lg items-center"
            src="https://a0.muscache.com/im/pictures/miso/Hosting-53472012/original/335000ac-240d-4d8c-8efc-6347a47713a2.jpeg?im_w=720"
            alt=""
          />

          <div className=" flex justify-between">
            <div className="flex flex-col ml-1">
              <div>
                <p className=" font-semibold">Capachica, Peru</p>
              </div>
              <div>
                <p className=" text-gray-400">3,824 m elevetion</p>
              </div>
              <div>
                <p className=" text-gray-400"> 2-7 oct </p>
              </div>
              <div className="flex">
                <div className=" mt-1  ">
                  {" "}
                  <LiaRupeeSignSolid />
                </div>
                <p className="font-semibold ">5,695</p>
                <div>
                  <p className="ml-2">night</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="mt-1">
                <AiFillStar />
              </div>
              <div className="font-semibold">4.79</div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-8 grid grid-rows-none md:grid-cols-4 gap-2 md:gap-2 grid-cols-1 sm:grid-cols-2 justify-center ">
        <div className="h-96 hover:scale-110 transition duration-500 cursor-pointer  w-[260px] m-auto mt-4  justify-around">
          <div className="text-2xl text-white mx-5 my-5  absolute mt-2">
            <PiHeartDuotone />
          </div>
          <img
            className="w-[260px] h-72 rounded-lg items-center"
            src="https://a0.muscache.com/im/pictures/miso/Hosting-598406736823679051/original/e8a8fc99-4b4c-4edb-8c10-a655a54e64a9.jpeg?im_w=720"
            alt=""
          />

          <div className=" flex justify-between">
            <div className="flex flex-col ml-1">
              <div>
                <p className=" font-semibold">Langza, India</p>
              </div>
              <div>
                <p className=" text-gray-400">5,091 m elevetion</p>
              </div>
              <div>
                <p className=" text-gray-400"> 2-7 oct</p>
              </div>
              <div className="flex">
                <div className=" mt-1  ">
                  {" "}
                  <LiaRupeeSignSolid />
                </div>
                <p className="font-semibold">20,325</p>
                <div>
                  <p className="ml-2">night</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="mt-1">
                <AiFillStar />
              </div>
              <div className="font-semibold">3.5</div>
            </div>
          </div>
        </div>

        <div className="h-96 hover:scale-110 transition duration-500 cursor-pointer m-auto mt-4 w-[260px]   justify-around">
          <div className="text-2xl mx-5 my-5 text-white  absolute mt-2">
            <PiHeartDuotone />
          </div>
          <img
            className="w-[260px] h-72 rounded-lg items-center"
            src="https://a0.muscache.com/im/pictures/miso/Hosting-53612731/original/957987a6-7d0f-4c4b-a670-27de6017d942.jpeg?im_w=720"
            alt=""
          />

          <div className=" flex justify-between">
            <div className="flex flex-col ml-1">
              <div>
                <p className=" font-semibold">Alma,Colorado,US</p>
              </div>
              <div>
                <p className=" text-gray-400">3,471 m elevetion</p>
              </div>
              <div>
                <p className=" text-gray-400"> 2-7 nov</p>
              </div>
              <div className="flex">
                <div className=" mt-1  ">
                  {" "}
                  <LiaRupeeSignSolid />
                </div>
                <p className="font-semibold ">24,154</p>
                <div>
                  <p className="ml-2">night</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="mt-1">
                <AiFillStar />
              </div>
              <div className="font-semibold">5.0</div>
            </div>
          </div>
        </div>

        <div className="h-96 hover:scale-110 transition duration-500 cursor-pointer m-auto mt-4 w-[260px]   justify-around">
          <div className="text-2xl mx-5 my-5  text-white  absolute mt-2">
            <PiHeartDuotone />
          </div>
          <img
            className="w-[260px] h-72 rounded-lg items-center"
            src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-776095510938512771/original/bcac0131-2226-4d19-8483-c6c66dbd397e.jpeg?im_w=720"
            alt=""
          />

          <div className=" flex justify-between">
            <div className="flex flex-col ml-1">
              <div>
                <p className=" font-semibold">Queto,Equador</p>
              </div>
              <div>
                <p className=" text-gray-400">3,294 m elevation</p>
              </div>
              <div>
                <p className=" text-gray-400"> 5-10 oct</p>
              </div>
              <div className="flex">
                <div className=" mt-1  ">
                  {" "}
                  <LiaRupeeSignSolid />
                </div>
                <p className="font-semibold ">36,163</p>
                <div>
                  <p className="ml-2">night</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="mt-1">
                <AiFillStar />
              </div>
              <div className="font-semibold">5.0</div>
            </div>
          </div>
        </div>

        <div className="h-96 hover:scale-110 transition duration-500 cursor-pointer m-auto mt-4 w-[260px] relative   justify-around">
          <div className="text-2xl mx-5 my-5  text-white  absolute mt-2">
            <PiHeartDuotone />
          </div>
          <img
            className="w-[260px] h-72 rounded-lg items-center"
            src="https://a0.muscache.com/im/pictures/miso/Hosting-20191792/original/1d17a02a-51c5-4146-88a6-751b990222fd.jpeg?im_w=720"
            alt=""
          />

          <div className=" flex justify-between">
            <div className="flex flex-col ml-1">
              <div>
                <p className=" font-semibold">Capachica, Peru</p>
              </div>
              <div>
                <p className=" text-gray-400">3,824 m elevetion</p>
              </div>
              <div>
                <p className=" text-gray-400"> 2-7 oct </p>
              </div>
              <div className="flex">
                <div className=" mt-1  ">
                  {" "}
                  <LiaRupeeSignSolid />
                </div>
                <p className="font-semibold ">12,565</p>
                <div>
                  <p className="ml-2">night</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="mt-1">
                <AiFillStar />
              </div>
              <div className="font-semibold">5.0</div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-8 grid grid-rows-none md:grid-cols-4 gap-2 md:gap-2 grid-cols-1 sm:grid-cols-2 justify-center ">
        <div className="h-96 hover:scale-110 transition duration-500 cursor-pointer  w-[260px] m-auto mt-4  justify-around">
          <div className="text-2xl text-white mx-5 my-5  absolute mt-2">
            <PiHeartDuotone />
          </div>
          <img
            className="w-[260px] h-72 rounded-lg items-center"
            src="https://a0.muscache.com/im/pictures/d509cd38-5f38-4189-9da3-0bf5a81b98f8.jpg?im_w=720"
            alt=""
          />

          <div className=" flex justify-between">
            <div className="flex flex-col ml-1">
              <div>
                <p className=" font-semibold">Luceru,Peru</p>
              </div>
              <div>
                <p className=" text-gray-400">5,091 m elevetion</p>
              </div>
              <div>
                <p className=" text-gray-400"> 2-7 oct</p>
              </div>
              <div className="flex">
                <div className=" mt-1  ">
                  {" "}
                  <LiaRupeeSignSolid />
                </div>
                <p className="font-semibold">4,876</p>
                <div>
                  <p className="ml-2">night</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="mt-1">
                <AiFillStar />
              </div>
              <div className="font-semibold">3.5</div>
            </div>
          </div>
        </div>

        <div className="h-96 hover:scale-110 transition duration-500 cursor-pointer m-auto mt-4 w-[260px]   justify-around">
          <div className="text-2xl mx-5 my-5 text-white  absolute mt-2">
            <PiHeartDuotone />
          </div>
          <img
            className="w-[260px] h-72 rounded-lg items-center"
            src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-553722861156359049/original/1eaa125c-14a0-49a3-94c8-1e891402ae4a.jpeg?im_w=720"
            alt=""
          />

          <div className=" flex justify-between">
            <div className="flex flex-col ml-1">
              <div>
                <p className=" font-semibold">Alma,Colorado,US</p>
              </div>
              <div>
                <p className=" text-gray-400">23,356 m elevetion</p>
              </div>
              <div>
                <p className=" text-gray-400"> 2-7 nov</p>
              </div>
              <div className="flex">
                <div className=" mt-1  ">
                  {" "}
                  <LiaRupeeSignSolid />
                </div>
                <p className="font-semibold ">24,154</p>
                <div>
                  <p className="ml-2">night</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="mt-1">
                <AiFillStar />
              </div>
              <div className="font-semibold">5.0</div>
            </div>
          </div>
        </div>

        <div className="h-96 hover:scale-110 transition duration-500 cursor-pointer m-auto mt-4 w-[260px]   justify-around">
          <div className="text-2xl mx-5 my-5  text-white  absolute mt-2">
            <PiHeartDuotone />
          </div>
          <img
            className="w-[260px] h-72 rounded-lg items-center"
            src="https://a0.muscache.com/im/pictures/218cd530-d056-4404-bad3-f55db02d5106.jpg?im_w=720"
            alt=""
          />

          <div className=" flex justify-between">
            <div className="flex flex-col ml-1">
              <div>
                <p className=" font-semibold">Sangla,India</p>
              </div>
              <div>
                <p className=" text-gray-400">3,294 m elevation</p>
              </div>
              <div>
                <p className=" text-gray-400"> 5-10 oct</p>
              </div>
              <div className="flex">
                <div className=" mt-1  ">
                  {" "}
                  <LiaRupeeSignSolid />
                </div>
                <p className="font-semibold ">659</p>
                <div>
                  <p className="ml-2">night</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="mt-1">
                <AiFillStar />
              </div>
              <div className="font-semibold">5.0</div>
            </div>
          </div>
        </div>

        <div className="h-96 hover:scale-110 transition duration-500 cursor-pointer m-auto mt-4 w-[260px] relative   justify-around">
          <div className="text-2xl mx-5 my-5  text-white  absolute mt-2">
            <PiHeartDuotone />
          </div>
          <img
            className="w-[260px] h-72 rounded-lg items-center"
            src="https://a0.muscache.com/im/pictures/miso/Hosting-696285624942251639/original/20cf2d97-780e-489b-bbfa-e177c44e0a3a.jpeg?im_w=720"
            alt=""
          />

          <div className=" flex justify-between">
            <div className="flex flex-col ml-1">
              <div>
                <p className=" font-semibold">Capachica, Peru</p>
              </div>
              <div>
                <p className=" text-gray-400">3,824 m elevetion</p>
              </div>
              <div>
                <p className=" text-gray-400"> 2-7 oct </p>
              </div>
              <div className="flex">
                <div className=" mt-1  ">
                  {" "}
                  <LiaRupeeSignSolid />
                </div>
                <p className="font-semibold ">12,565</p>
                <div>
                  <p className="ml-2">night</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="mt-1">
                <AiFillStar />
              </div>
              <div className="font-semibold">5.0</div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-8 grid grid-rows-none md:grid-cols-4 gap-2 md:gap-2 grid-cols-1 sm:grid-cols-2 justify-center ">
        <div className="h-96 hover:scale-110 transition duration-500 cursor-pointer  w-[260px] m-auto mt-4  justify-around">
          <div className="text-2xl text-white mx-5 my-5  absolute mt-2">
            <PiHeartDuotone />
          </div>
          <img
            className="w-[260px] h-72 rounded-lg items-center"
            src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-24984181/original/89b8c61a-ff9c-43c2-8240-167ca193e054.jpeg?im_w=720"
            alt=""
          />

          <div className=" flex justify-between">
            <div className="flex flex-col ml-1">
              <div>
                <p className=" font-semibold">Luceru,Peru</p>
              </div>
              <div>
                <p className=" text-gray-400">5,091 m elevetion</p>
              </div>
              <div>
                <p className=" text-gray-400"> 2-7 oct</p>
              </div>
              <div className="flex">
                <div className=" mt-1  ">
                  {" "}
                  <LiaRupeeSignSolid />
                </div>
                <p className="font-semibold">1,12,365</p>
                <div>
                  <p className="ml-2">night</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="mt-1">
                <AiFillStar />
              </div>
              <div className="font-semibold">4.91</div>
            </div>
          </div>
        </div>

        <div className="h-96 hover:scale-110 transition duration-500 cursor-pointer m-auto mt-4 w-[260px]   justify-around">
          <div className="text-2xl mx-5 my-5 text-white  absolute mt-2">
            <PiHeartDuotone />
          </div>
          <img
            className="w-[260px] h-72 rounded-lg items-center"
            src="https://a0.muscache.com/im/pictures/miso/Hosting-36616906/original/6d21c5b6-7056-437b-846d-f7d9a2fdf8a5.jpeg?im_w=720"
            alt=""
          />

          <div className=" flex justify-between">
            <div className="flex flex-col ml-1">
              <div>
                <p className=" font-semibold">Kaza,indai</p>
              </div>
              <div>
                <p className=" text-gray-400">23,356 m elevetion</p>
              </div>
              <div>
                <p className=" text-gray-400"> 2-7 nov</p>
              </div>
              <div className="flex">
                <div className=" mt-1  ">
                  {" "}
                  <LiaRupeeSignSolid />
                </div>
                <p className="font-semibold ">749</p>
                <div>
                  <p className="ml-2">night</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="mt-1">
                <AiFillStar />
              </div>
              <div className="font-semibold">5.0</div>
            </div>
          </div>
        </div>

        <div className="h-96 hover:scale-110 transition duration-500 cursor-pointer m-auto mt-4 w-[260px]   justify-around">
          <div className="text-2xl mx-5 my-5  text-white  absolute mt-2">
            <PiHeartDuotone />
          </div>
          <img
            className="w-[260px] h-72 rounded-lg items-center"
            src="https://a0.muscache.com/im/pictures/eb942d06-0b64-4aae-a922-4b231dc55e45.jpg?im_w=720"
            alt=""
          />

          <div className=" flex justify-between">
            <div className="flex flex-col ml-1">
              <div>
                <p className=" font-semibold">Casco,Peru</p>
              </div>
              <div>
                <p className=" text-gray-400">3,294 m elevation</p>
              </div>
              <div>
                <p className=" text-gray-400"> 5-10 oct</p>
              </div>
              <div className="flex">
                <div className=" mt-1  ">
                  {" "}
                  <LiaRupeeSignSolid />
                </div>
                <p className="font-semibold ">10,813</p>
                <div>
                  <p className="ml-2">night</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="mt-1">
                <AiFillStar />
              </div>
              <div className="font-semibold">4.95</div>
            </div>
          </div>
        </div>

        <div className="h-96 hover:scale-110 transition duration-500 cursor-pointer m-auto mt-4 w-[260px] relative   justify-around">
          <div className="text-2xl mx-5 my-5  text-white  absolute mt-2">
            <PiHeartDuotone />
          </div>
          <img
            className="w-[260px] h-72 rounded-lg items-center"
            src="https://a0.muscache.com/im/pictures/miso/Hosting-929190286025826390/original/aa92294c-753e-4801-a9d5-8f0c4d4a14de.jpeg?im_w=720"
            alt=""
          />

          <div className=" flex justify-between">
            <div className="flex flex-col ml-1">
              <div>
                <p className=" font-semibold">Capachica, Peru</p>
              </div>
              <div>
                <p className=" text-gray-400">3,824 m elevetion</p>
              </div>
              <div>
                <p className=" text-gray-400"> 2-7 oct </p>
              </div>
              <div className="flex">
                <div className=" mt-1  ">
                  {" "}
                  <LiaRupeeSignSolid />
                </div>
                <p className="font-semibold ">12,565</p>
                <div>
                  <p className="ml-2">night</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="mt-1">
                <AiFillStar />
              </div>
              <div className="font-semibold">5.0</div>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex flex-col my-24 m-auto ">
        <p className=" text-center text-xl text-gray-900 font-semibold">
          Continue exploring top of the world homes
        </p>
        <div className=" m-auto my-4 cursor-pointer">
       <div className="  text-center  bg-black text-white font-semibold p-4 rounded-2xl w-48">  Show more</div>

        </div>
      </div>
    </div>
  );
};

export default Card;
