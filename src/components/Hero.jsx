import React from 'react';

const Hero = () => {
  return (
    <div className="bg-blue-400 p-10 flex items-center justify-between mt-5 ml-5 h-90 w-full mr-5">
      <div className="text-white max-w-md">
        <h1 className="text-3xl font-bold">Adidas Men Running</h1>
        <h2 className="text-4xl font-extrabold mt-2">Sneakers</h2>
        <p className="mt-4 text-sm">
          Performance and design. Taken right to the edge.
        </p>
        <button className="mt-6 px-6 py-2 border-b-2 border-white hover:bg-white hover:text-blue-400 transition-all">
          SHOP NOW
        </button>
      </div>
      <div>
        <img src="sneaker.png" alt="Sneaker" className="w-[300px] object-contain" />
      </div> 
    </div>
  );
};

export default Hero;
