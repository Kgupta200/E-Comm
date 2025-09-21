import React from 'react'
import Navbar from './components/Navbar'
import SideBar from './components/SideBar'
import Hero from './components/Hero'
import SortBar from './components/SortBar'
import Footer from './components/Footer'
import Product from './components/Product'
import ShopPage from './components/ShopPage'


const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="h-2 bg-gray-200"></div>
      <div className='flex'>
        <SideBar/>
        <div className='flex flex-col w-280'>
          <Hero/>
          <ShopPage/>
        </div>
      </div>
      
      <Footer/>
    </div>
  )
}

export default App