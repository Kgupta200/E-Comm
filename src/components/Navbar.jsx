import React from 'react'


const Navbar = () => {
  return (
    <>
    <div className='flex flex-row items-center gap-55 h-15 px-3 py-3 font-medium '>
        <img src="logo.png" alt="logo" className="h-15 ml-2" />


            <ul className='flex flex-row list-none text-center gap-20 text-xl ml-4'>
                 <li><a href="#" className="text-blue-500 hover:text-blue-700">HOME</a></li>
                  <li><a href="#"  className='hover:text-blue-700'>BAG</a></li>
                  <li><a href="#"  className='hover:text-blue-700'>SNEAKERS</a></li>
                  <li><a href="#" className='hover:text-blue-700' >BELT</a></li>
                  <li><a href="#"  className='hover:text-blue-700'>CONTACT</a></li>
            </ul>

        <div className='flex flex-row gap-3 text-lg items-center ml-auto mr-auto'>
           <i className="fas fa-shopping-cart text-xl mr-3"></i>
           <p>Items <span className='text-gray-500 ml-2'>$0.00</span></p>
        </div>

    </div>
    </>
  )
}

export default Navbar