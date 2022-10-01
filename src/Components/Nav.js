import React from 'react';
import { useState, useEffect } from "react";
import {
    MobileNav,
} from "@material-tailwind/react";

import { HiMenu } from "react-icons/hi";
import { SiContactlesspayment } from "react-icons/si";
import {gsap} from "gsap"

const Nav = () => {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );

        gsap.fromTo(".nav", {
            y: -80,
            opacity: 0
        }, {
            opacity: 1,
            duration: 1,
            y: 0
        }
        )
    }, []);

    const navList = (
        <ul className="flex flex-col gap-2 lg:flex-row md:items-center lg:gap-6 w-[80%] md:w-[100%] m-auto py-8 md:py-0 ">

            <a href="#" className="flex items-center hover:bg-[#111111] p-3 rounded w-[100%]">
                How it works?
            </a>

            <a href="#" className="flex items-center hover:bg-[#111111] p-3 rounded">
                About
            </a>

            <a href="#" className="flex items-center hover:bg-[#111111] p-3 rounded">
                Comunity
            </a>

        </ul>
    );
    return (
        <navbar className=" text-white ">
            <div className="m-auto w-[80%] mx-auto flex items-center justify-between py-8 nav">

                {/* HEADER LOGO */}
                <div className="flex items-center">
                    <div className="">
                        <SiContactlesspayment className='mr-2 text-4xl text-orange-500 font-bold ' />
                    </div>
                    <div className="">
                        <h1 className="font-bold text-2xl mr-10">Nft Palace</h1>
                    </div>
                </div>

                {/* NAVLINKS */}
                <div className="hidden lg:block">{navList}</div>
                <button variant="" size="sm" className="hidden lg:inline-block border border-orange-500 px-3 py-2 rounded">
                    <span>Join us</span>
                </button>

                {/* ICON TOGGLE BUTTON */}
                <i
                    className='md:hidden'
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            className="h-6 w-6"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    )}
                </i>

            </div>

            <MobileNav open={openNav} className=" bg-gray-900">
                {navList}
            </MobileNav>
        </navbar>
    );
};

export default Nav;