import React from 'react';
import { AiOutlineSetting } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineHome } from 'react-icons/ai'
import { BiCategory } from 'react-icons/bi'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { BsAppIndicator } from 'react-icons/bs'
import { TbBrandTinder } from 'react-icons/tb'
import { TbWindmill } from 'react-icons/tb'

const SideMenu = () => {
    return (
        <div className='relative sticky top-0'>
            <div className="flex flex-col items-center ">
                <div className="">
                    <p className='font-bold text-2xl py-5 text-center'><TbBrandTinder className='text-4xl text-orange-500 font-bold' /></p>
                </div>
                <div className="mt-[5vh] space-y-5">
                    <p><AiOutlineHome className='text-2xl' /></p>
                    <p><BiCategory className='text-2xl' /></p>
                    <p><TbBrandTinder className='text-2xl' /></p>
                    <p><BsAppIndicator className='text-2xl' /></p>
                    <p><HiOutlineShoppingBag className='text-2xl' /></p>
                </div>
            </div>
            <div className="flex flex-col justify-end h-[50vh] items-center">
                <div className="space-y-4">
                    <p><CgProfile className='text-2xl' /></p>
                    <p><AiOutlineSetting className='text-2xl'/></p>
                </div>
            </div>
        </div>
    );
};

export default SideMenu;