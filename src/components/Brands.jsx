import React, { useState } from 'react'
import {brand} from '../assets/assets'
import Title from './Title'



const Brands = () => {
    const [branddata,setBranddata]= useState(brand)
  return (
    <div>
        <div className="bg-slate-100 px-3 py-2 rounded  w-full m-1 mt-5 text-xl">
            <Title title="BRANDS"/>
            <div className="space-y-3 text-sm">
                {branddata.map((item,index)=>(
                    <div className="flex justify-between text-gray-500" key={index}>
                    <span className='text-gray-500 hover:text-blue-500'>{item.company}</span>
                    <span className="text-gray-500 hover:text-blue-500">{item.num}</span>
                </div>
                ))}
                

            </div>
        </div>
    </div>
  )
}

export default Brands