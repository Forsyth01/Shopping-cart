import React from "react";
import image from "../Images/omk-fsz3b0UnwZ8-unsplash.jpg";
import image2 from "../Images/hesam-link-d_7IWkDz-4c-unsplash.jpg";

const Feature = () => {
    return (
        <div>
            <div className="m-auto w-[80%] text-white text-xl py-10">
                <div className="md:flex justify-between">
                    <div className="md:w-[100%]">
                        <h1 className="font-bold text-2xl">
                            Popular Feature <br /> Artwork
                        </h1>
                    </div>
                    <div className="md:w-[100%]">
                        <p className="">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
                            consectetur nisi voluptatibus cupiditate enim, m, id! Quos,
                            corporis. Rem.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 py-10 gap-5">
                    <div className="border w-[100%]">
                        <img
                            src={image}
                            alt=""
                            className="h-[40vh] w-[100%] object-cover"
                        />
                        <div className="md:flex justify-around items-end  p-3 space-y-3 md:space-y-0">
                            <div className="md:w-[50%]  ">
                                <h1 className="font-bold text-2xl">Lit Bitcoin</h1>
                                <p className="text-sm my-2 md:my-0">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elitusto.
                                </p>
                            </div>
                            <div className="">
                                <button
                                    href="#"
                                    className="border border-orange-500 hover:border-orange-400  px-3 py-2 text-sm"
                                >
                                    Place a bid
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border w-[100%]">
                        <img
                            src={image2}
                            alt=""
                            className="h-[40vh] w-[100%] object-cover"
                        />
                        <div className="md:flex justify-around items-end  p-3 space-y-3 md:space-y-0">
                            <div className="md:w-[50%]  ">
                                <h1 className="font-bold text-2xl">Lit Bitcoin</h1>
                                <p className="text-sm my-2 md:my-0">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elitusto.
                                </p>
                            </div>
                            <div className="">
                                <button
                                    href="#"
                                    className="border border-orange-500 hover:border-orange-400  px-3 py-2 text-sm"
                                >
                                    Place a bid
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border w-[100%]">
                        <img
                            src={image}
                            alt=""
                            className="h-[40vh] w-[100%] object-cover"
                        />
                        <div className="md:flex justify-around items-end  p-3 space-y-3 md:space-y-0">
                            <div className="md:w-[50%]  ">
                                <h1 className="font-bold text-2xl">Lit Bitcoin</h1>
                                <p className="text-sm my-2 md:my-0">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elitusto.
                                </p>
                            </div>
                            <div className="">
                                <button
                                    href="#"
                                    className="border border-orange-500 hover:border-orange-400  px-3 py-2 text-sm"
                                >
                                    Place a bid
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 py-10 gap-5">
                    <div className="border w-[100%]">
                        <img
                            src={image2}
                            alt=""
                            className="h-[40vh] w-[100%] object-cover"
                        />
                        <div className="md:flex justify-around items-end  p-3 space-y-3 md:space-y-0">
                            <div className="md:w-[50%]  ">
                                <h1 className="font-bold text-2xl">Lit Bitcoin</h1>
                                <p className="text-sm my-2 md:my-0">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elitusto.
                                </p>
                            </div>
                            <div className="">
                                <button
                                    href="#"
                                    className="border border-orange-500 hover:border-orange-400  px-3 py-2 text-sm"
                                >
                                    Place a bid
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border w-[100%]">
                        <img
                            src={image}
                            alt=""
                            className="h-[40vh] w-[100%] object-cover"
                        />
                        <div className="md:flex justify-around items-end  p-3 space-y-3 md:space-y-0">
                            <div className="md:w-[50%]  ">
                                <h1 className="font-bold text-2xl">Lit Bitcoin</h1>
                                <p className="text-sm my-2 md:my-0">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elitusto.
                                </p>
                            </div>
                            <div className="">
                                <button
                                    href="#"
                                    className="border border-orange-500 hover:border-orange-400  px-3 py-2 text-sm"
                                >
                                    Place a bid
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border w-[100%]">
                        <img
                            src={image}
                            alt=""
                            className="h-[40vh] w-[100%] object-cover"
                        />
                        <div className="md:flex justify-around items-end  p-3 space-y-3 md:space-y-0">
                            <div className="md:w-[50%]  ">
                                <h1 className="font-bold text-2xl">Lit Bitcoin</h1>
                                <p className="text-sm my-2 md:my-0">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elitusto.
                                </p>
                            </div>
                            <div className="">
                                <button
                                    href="#"
                                    className="border border-orange-500 hover:border-orange-400  px-3 py-2 text-sm"
                                >
                                    Place a bid
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-center">
                <a href = "#" className=" border rounded border-orange-500 hover:border-orange-400 px-4 py-3 ">See more</a>
                </p>
            </div>
        </div>
    );
};

export default Feature;
