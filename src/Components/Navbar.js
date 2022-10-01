import React from 'react';
import { SiContactlesspayment } from "react-icons/si";

const Navbar = () => {
    return (
        <div>
            <div className="m-auto w-[80%] text-white">
                <div className="md:flex items-center justify-between py-10">
                    <div className="flex items-center">
                        <div className="logo">
                            <div className="flex items-center">
                                <div className="">
                                    <SiContactlesspayment className='mr-2 text-4xl text-orange-500 font-bold ' />
                                </div>
                                <div className="">
                                    <h1 className="font-bold text-2xl mr-10">Nft Palace</h1>
                                </div>
                            </div>
                        </div>
                        <div className="nav-links gap-5 text-light hidden md:flex">
                            <a href="/">How it works?</a>
                            <a href="">About</a>
                            <a href="">Comunity</a>
                        </div>
                    </div>
                    <div className="md:flex hidden">
                        <a href="" className="font-bold border-2  px-3 py-2  border-orange-500 ">Join us</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;