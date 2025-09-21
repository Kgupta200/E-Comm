import React from 'react'
import Hotdeals from './Hotdeals'
import Title from './Title'
import Brands from './Brands'
import Color from './Color'
import Price from './Price'

const SideBar = () => {
  return (
    <div className='w-[355px]  ml-3 text-xl font-medium text-[#262626]'>

        <Hotdeals/>

       <div className="bg-slate-100 px-3 py-2 rounded  w-full m-1 mt-5 text-xl">
         <Title title="PRICES"/>
         <Price/>
       </div>

        <Color/>

        <Brands/>

        
       <button className="bg-slate-100 px-3 py-2 rounded text-center w-full m-1 mt-5 cursor-pointer">MORE</button>

    </div>
  )
}

export default SideBar