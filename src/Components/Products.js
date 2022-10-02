import React, {useState, useEffect, useContext} from 'react';
import image  from "../Images/omk-fsz3b0UnwZ8-unsplash.jpg";
import {BiCart} from 'react-icons/bi'
import { CartContext } from './CartContext';

const Products = () => {
    const { AddItem} = useContext(CartContext)
    
  
    useEffect(()=>{
        
    },[])

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5 my-5">
                
                {/* <h1>{increase}</h1> */}
                <div className="p-3 w-[100%] space-y-3 bg-white">
                    <img src={image} alt="" className="h-[30vh] w-[100%] object-fit rounded-md" />
                    <h1 className="font-bold text-xl">Almond Brown Sugar Croissant</h1>
                    <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque incidunt</p>
                    <div className="flex justify-between">
                        <div className="price">
                            <p className="text-xl font-bold">$50</p>
                        </div>
                        <div className="">
                            <BiCart onClick={AddItem} className="text-black text-2xl font-bold" />
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 p-3 w-[100%] space-y-3 bg-white">
                    <img src={image} alt="" className="h-[30vh] w-[100%] object-fit rounded-md" />
                    <h1 className="font-bold text-xl">Smoke Tenderloin Slice Croissant</h1>
                    <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque incidunt</p>
                    <div className="flex justify-between">
                        <div className="price">
                            <p className="text-xl font-bold">$100</p>
                        </div>
                        <div className="">
                            <BiCart className="text-black text-2xl font-bold" />
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 p-3 w-[100%] space-y-3 bg-white">
                    <img src={image} alt="" className="h-[30vh] w-[100%] object-fit rounded-md" />
                    <h1 className="font-bold text-xl">Berry Whipped Cream Croissant</h1>
                    <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque incidunt</p>
                    <div className="flex justify-between">
                        <div className="price">
                            <p className="text-xl font-bold">$350</p>
                        </div>
                        <div className="">
                            <BiCart className="text-black text-2xl font-bold" />
                        </div>
                    </div>
                </div>
         
        

            </div>  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5 my-">
                <div className="p-3 w-[100%] space-y-3 bg-white">
                    <img src={image} alt="" className="h-[30vh] w-[100%] object-fit rounded-md" />
                    <h1 className="font-bold text-xl">Almond Brown Sugar Croissant</h1>
                    <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque incidunt</p>
                    <div className="flex justify-between">
                        <div className="price">
                            <p className="text-xl font-bold">$50</p>
                        </div>
                        <div className="">
                            <BiCart className="text-black text-2xl font-bold" />
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 p-3 w-[100%] space-y-3 bg-white">
                    <img src={image} alt="" className="h-[30vh] w-[100%] object-fit rounded-md" />
                    <h1 className="font-bold text-xl">Smoke Tenderloin Slice Croissant</h1>
                    <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque incidunt</p>
                    <div className="flex justify-between">
                        <div className="price">
                            <p className="text-xl font-bold">$100</p>
                        </div>
                        <div className="">
                            <BiCart className="text-black text-2xl font-bold" />
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 p-3 w-[100%] space-y-3 bg-white">
                    <img src={image} alt="" className="h-[30vh] w-[100%] object-fit rounded-md" />
                    <h1 className="font-bold text-xl">Berry Whipped Cream Croissant</h1>
                    <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque incidunt</p>
                    <div className="flex justify-between">
                        <div className="price">
                            <p className="text-xl font-bold">$350</p>
                        </div>
                        <div className="">
                            <BiCart className="text-black text-2xl font-bold" />
                        </div>
                    </div>
                </div>
         
        

            </div>  
        </div>
    );
};

export default Products;