import React, { useContext } from 'react';
import Products from './Products';
import { SiAirbnb } from "react-icons/si"
import { BiCart } from 'react-icons/bi'
import { Badge } from '@mui/material'
import { CartContext } from './CartContext';


const Main = () => {

   const {CartItemLength} = useContext(CartContext)
  
    return (
        <div className='bg-gray-100 w-[100%]'>
          <div className="m-auto w-[90%]">
            <div className="flex flex-col 2xl:flex-row py-2 2xl:items-center 2xl:justify-between space-y-2 2xl:space-y-0  ">
                <div className="space-y-2">
                    <h1 className="font-bold text-2xl">Welcome, Forsyth</h1>
                    <p className="">Discover whatever you need easily</p>
                </div>
                <div className="flex items-center">
                    <div className="w-[100%]">
                        <input type="search" placeholder='Search product...' className='rounded p-3 w-[100%] outline-none'/>
                    </div>
                    
                        {/* <div className="l" ><BiCart /></div> */}
                        <div className="">
                            <Badge badgeContent={CartItemLength}>
                                <BiCart className="ml-3 bg-white rounded p-[] text-4xl" />
                            </Badge>
                        </div>
                </div>
            </div>

            {/* shop */}

            {/* <div className="flex gap-3 py-5 w-[100%]">
             
                <div className="bg-white p-2 rounded font-bold">
                    <h1>Signature</h1>
                </div>
                <div className="bg-orange-600 text-white p-2 rounded font-bold">
                    <h1>Croissant</h1>
                </div>
                <div className="bg-white p-2 rounded font-bold">
                    <h1>Waffle</h1>
                </div>
                <div className="bg-white p-2 rounded font-bold">
                    <h1>Coffee</h1>
                </div>
                <div className="bg-white p-2 rounded font-bold">
                    <h1>Ice Cream</h1>
                </div>
            </div> */}
            <Products/>
          </div>
        </div>
    );
};

export default Main;