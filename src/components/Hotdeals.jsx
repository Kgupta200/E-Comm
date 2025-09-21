import React, { useState } from 'react'
import {hotdealsdata} from '../assets/assets';
import Title from './Title';



const Hotdeals = () => {

    const [dealdata,setDealdata]=useState(hotdealsdata)

  return (
    <div>
        <div className="bg-slate-100 px-3 py-2 rounded  w-full m-1 mt-5 text-xl">
            <Title title="HOT deals" />

            <div className='space-y-8 text-sm px-3 py-4 m-3'>
                {dealdata.map((item,index)=>(
                    <div className='flex justify-between text-gray-500' key={index}>
                        <span className='text-gray-500 hover:text-blue-500'>{item.company}</span>
                        <span className='text-gray-500 hover:text-blue-500'>{item.number}</span>
                    </div>
                ))}
                
            </div>


        </div>
    </div>
  )
}

export default Hotdeals