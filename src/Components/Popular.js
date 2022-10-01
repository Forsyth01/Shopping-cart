import React from 'react';
import image from "../Images/omk-fsz3b0UnwZ8-unsplash.jpg";

const Popular = () => {
    return (
        <div>
            <div className="m-auto w-[80%] text-white py-10">
                <div className="md:flex justify-between">
                    <div className="md:w-[100%]">
                        <h1 className="font-bold text-2xl">
                            Weekly Popular <br /> Creator!
                        </h1>
                    </div>
                    <div className="md:w-[100%]">
                        <p className="">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
                            consectetur nisi voluptatibus cupiditate enim
                        </p>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 2xl:grid-cols-4 grid-cols-1 gap-5 text-center py-10">
                  
                    <div className="border w-[100%]">
                        <img
                            src={image}
                            alt=""
                            className="h-[30vh] w-[100%] object-cover"
                        />
                        <div className="justify-around items-end  p-3">
                            <div className="my-2">
                                <h1 className="font-bold text-2xl">Lit Bitcoin</h1>
                                <p className="text-sm my-3">
                                    Lorem ipsum dolor sit amet
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
                            className="h-[30vh] w-[100%] object-cover"
                        />
                        <div className="justify-around items-end  p-3">
                            <div className="my-2">
                                <h1 className="font-bold text-2xl">Lit Bitcoin</h1>
                                <p className="text-sm my-3">
                                    Lorem ipsum dolor sit amet
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
                            className="h-[30vh] w-[100%] object-cover"
                        />
                        <div className="justify-around items-end  p-3">
                            <div className="my-2">
                                <h1 className="font-bold text-2xl">Lit Bitcoin</h1>
                                <p className="text-sm my-3">
                                    Lorem ipsum dolor sit amet
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
                            className="h-[30vh] w-[100%] object-cover"
                        />
                        <div className="justify-around items-end  p-3">
                            <div className="my-2">
                                <h1 className="font-bold text-2xl">Lit Bitcoin</h1>
                                <p className="text-sm my-3">
                                    Lorem ipsum dolor sit amet
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
            </div>
        </div>
    );
};

export default Popular;