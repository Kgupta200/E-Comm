import React, { useState } from "react";

const Price = () => {
  const [minVal, setMinVal] = useState(13.99);
  const [maxVal, setMaxVal] = useState(25.99);

  const min = 0;
  const max = 50;

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxVal - 1);
    setMinVal(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minVal + 1);
    setMaxVal(value);
  };

  return (
    <div>
      <div className="mb-3 mt-3 px-3 py-6">
        <span className="text-gray-600 font-medium mr-16">Range: </span>
        <span className="font-semibold">
          ${minVal.toFixed(2)} - ${maxVal.toFixed(2)}
        </span>
      </div>

      <div className="relative w-full">

        {/* <div className="absolute top-1/2 h-1 w-full bg-gray-300 rounded"></div> */}


        <div
          className="absolute top-1/2 h-1 bg-blue-500 rounded mb-3"
          style={{
            left: `${(minVal / max) * 100}%`,
            right: `${100 - (maxVal / max) * 100}%`,
          }}
        ></div>

        
        <input type="range" min={min} max={max} step="0.01" value={minVal}  onChange={handleMinChange} className="absolute w-full h-1 bg-transparent appearance-none pointer-events-auto"/>

      
        <input type="range" min={min} max={max} step="0.01" value={maxVal}  onChange={handleMaxChange} className="absolute w-full h-1 bg-transparent appearance-none pointer-events-auto"/>
      </div>

      <style>{`
        input[type="range"] {
          -webkit-appearance: none;
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #3b82f6; /* Tailwind blue-500 */
          cursor: pointer;
          margin-top: -6px;
          position: relative;
          z-index: 10;
        }
        input[type="range"]::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Price;
