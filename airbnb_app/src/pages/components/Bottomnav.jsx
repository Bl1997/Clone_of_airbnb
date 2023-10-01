import React from "react";
import { HiOutlineSwitchHorizontal } from "react-icons/hi"

// const SliderData = [
//   {
//     img: "https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg",
//   },
//   {
//     img: "https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg",
//   },
//   {
//     img: "https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg",
//   },
//   {
//     img: "https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg",
//   },
//   {
//     img: "https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg",
//   },
//   {
//     img: "https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg",
//   },
//   {
//     img: "https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg",
//   },
//   {
//     img: "https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg",
//   },
// ];
const Bottomnav = () => {
  return (
    <div className=" justify-center w-[96%] h-24 border m-auto shadow-lg">
      {/*      
      {SliderData.map((item, index) => {
        <div>
          <img src={item.img} alt="" />
         
        </div>;
      })} */}

      <div className="flex gap-4">
        <div>
          <img
            className="w-8 h-8 mt-5 "
            src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
            alt=""
          />
          <p className=" mt-2  text-center text-sm font-semibold">Farms</p>
        </div>
        <div>
          <img
            className="w-8 h-8 mt-5"
            src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
            alt=""
          />
          <p className="mt-2  text-center text-sm font-semibold">Amezing veiws</p>
        </div>
        <div>
          <img
            className="w-8 h-8 mt-5"
            src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
            alt=""
          />
          <p className="mt-2  text-center text-sm font-semibold">Beachfront</p>
        </div>

        <div>
          <img
            className="w-8 h-8 mt-5"
            src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
            alt=""
          />
          <p className="mt-2  text-center text-sm font-semibold">OMG!</p>
        </div>

        <div>
          <img
            className="w-8 h-8 mt-5"
            src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
            alt=""
          />
          <p className=" mt-2  text-center text-sm font-semibold">Amezing pool</p>
        </div>

      

        <div>
          <img
            className="w-8 h-8 mt-5"
            src="https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg"
            alt=""
          />
          <p className="mt-2  text-center text-sm font-semibold">Countryside</p>
        </div>

        <div>
          <img
            className="w-8 h-8 mt-5"
            src="https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg"
            alt=""
          />
          <p className="mt-2 text-sm font-semibold">Surfing</p>
        </div>
        <div>
          <img
            className="w-8 h-8 mt-5"
            src="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg"
            alt=""
          />
          <p className=" mt-2 text-sm font-semibold">National Park</p>
        </div>
        <div>
          <img
            className="w-8 h-8 mt-5"
            src="https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg"
            alt=""
          />
          <p className="mt-2 text-sm font-semibold">Luxe</p>
        </div>

        <div>
          <img
            className="w-8 h-8 mt-5"
            src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"
            alt=""
          />
          <p className="mt-2 text-sm font-semibold">Cabins</p>
        </div>

        <div>
          <img
            className="w-8 h-8 mt-5"
            src="https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg"
            alt=""
          />
          <p className="mt-2 text-sm font-semibold">Tranding</p>
        </div>
        <div className="flex b-2 rounded-lg cursor-pointer border w-32 h-16 text-center  mt-4 shadow-lg">
        <div className="mt-5 w-8  h-8  text-3xl flex mx-2 ">
        < HiOutlineSwitchHorizontal/>
    
       </div>
       <div><p className=" mt-4 text-2xl  font-semibold">filters</p></div>
        </div>
        <button className=" text-sm font-semibold border h-12 mt-6 p-4 rounded-full shadow-2xl">Display total before taxes</button>
       
      </div>

     
    </div>
  );
};

export default Bottomnav;
