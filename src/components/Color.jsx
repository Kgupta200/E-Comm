import React from 'react'
import Title from './Title'

const Color = () => {
  return (
    <div>
        <div className="bg-slate-100 px-3 py-2 rounded  w-full m-1 mt-5 text-xl">
            <Title title="COLOR"/>

            <div className='flex m-3 gap-7 px-3 py-3'>
                <button className='bg-blue-500 rounded-full w-6 h-6 hover: border-blue-200'></button>
                <button className='bg-red-500 rounded-full w-6 h-6'></button>
                <button className='bg-gray-950 rounded-full w-6 h-6'></button>
                <button className='bg-yellow-300 rounded-full w-6 h-6'></button>
                <button className='bg-pink-400 rounded-full w-6 h-6'></button>
                <button className='bg-red-100 rounded-full w-6 h-6'></button>

            </div>
        </div>
    </div>
  )
}

export default Color