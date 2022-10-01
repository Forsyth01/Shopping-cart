import React, { useEffect } from "react";
import image from "../Images/omk-fsz3b0UnwZ8-unsplash.jpg";
import { BsArrowRight } from 'react-icons/bs'
import { VscWorkspaceTrusted } from 'react-icons/vsc'
import { MdPayments } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import {gsap} from 'gsap'

const Header = () => {
  useEffect(()=>{
    gsap.fromTo(".fadein",{
      y:80,
      opacity:0
    },{
  stagger:0.5,
  opacity:1,
  duration:1,
  y:0
}
)
    gsap.fromTo(".scale",{
      opacity:0,
      scale: 0
    },{
  stagger:0.5,
  scale:1,
  opacity:1,
  duration:1,
 
}
)
  },[])

  return (
    <div>
      <div className="text-white md:flex gap-5 m-auto w-[80%] justify-around items-center py-5 space-y-10 md:space-y-0">
        <div className="space-y-5 w-[100%]">
          <h1 className="md:text-4xl fadein text-2xl 2xl:text-5xl font-bold">
            Discover super rare artwork and sell it
          </h1>
          <p className="md:w-[90%] fadein">
            more than 1000 digital artworks are available to be yours, start by
            searching according to the category you are interested in
          </p>
          <div className="flex gap-5 items-center font-bold fadein">
            <a href="" className="bg-orange-500 hover:bg-orange-400 py-3 px-5 rounded text-black">
              Discover
            </a>
            <div className="flex items-center ">
              <a href="" className="text-xl">
                Create Nft
              </a>
              <div className="">
                <BsArrowRight className="mx-3 text-2xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%]">
          <img src={image} alt="" className="scale w-[100%] h-[70vh] object-cover " />
        </div>
      </div>

      <div className="bg-gray-900 text-white">
        <div className="md:flex justify-around gap-5 py-8 items-center m-auto w-[80%] font-bold space-y-5 md:space-y-0">
          <div className="flex items-center">
            <div className="logo">
              <VscWorkspaceTrusted className="text-4xl mr-3" />
            </div>
            <div className="">
              <h1 className="">Trusted with 10 Achievment</h1>
            </div>
          </div>
          <div className="flex items-center">
            <div className="logo">
              <MdPayments className="text-4xl mr-3" />
            </div>
            <div className="">
              <h1 className="">Easy payment and order</h1>
            </div>
          </div>


          <div className="flex">
            <div className="logo">
              <RiSecurePaymentLine className="text-4xl mr-3" />
            </div>
            <div className="">
              <h1 className="">Get Discount Membership</h1>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Header;
