import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
const Navbar = ({ onSearch, handleClick, }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const cart = useSelector((state)=>state.cart.value)
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };
  return (
    <nav className='w-full flex p-4 gap-2 bg-gray-100 fixed top-0 z-10 justify-center'>

     
      <input
        type='text'
        placeholder='Search Food here'
        className='border-2 px-2 py-1 border-green-600 rounded-md w-full lg:w-1/2'
        value={searchQuery}
        onChange={handleSearch}

      />
      <div className='relative'>
        <span className='absolute bg-green-500 text-white rounded-full px-2 py-1 text-sm top-0 right-0 -m-3'>{cart.length}</span>
      <button onClick={handleClick} className='border px-2 py-1 text-xl rounded '><i className="ri-shopping-cart-2-line mt-1"></i></button>
      </div>
    
    </nav>
  )
}

export default Navbar