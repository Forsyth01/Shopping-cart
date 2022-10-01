import React from 'react';
import image from "../Images/hesam-link-d_7IWkDz-4c-unsplash.jpg";

const Marketplace = () => {
    return (
        <div>
            <div className="m-auto w-[80%] text-white py-10 text-xl">
                <div className="md:flex items-center">
                    <div className="w-[100%]">
                        <img src={image} alt="" className='rounded md:h-[65vh] md:w-[80%] object-cover '/>
                    </div>
                    <div className="space-y-3 w-[100%]">
                        <p className="text-orange-500">Miracle Feature</p>
                        <h1 className="text-xl font-bold text-2xl">Best digital art  marketplace</h1>
                        <p className="">A digital marketplace to buy or sell and find all the exclusive digital artwork assets. also Miracle can create digital art</p>
                        <button className="border-orange-500 px-3 py-2 rounded border text-md font-bold">Learn more </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Marketplace;