import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import FoodContainer from '../components/FoodContainer'
import FoodData from "../data/FoodData"
import Cart from '../components/Cart'
import { Toaster } from 'react-hot-toast'
import CategoryMenu from '../components/CategoryMenu'
const Home = () => {
  const [data, setData] = useState(FoodData)
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(true)
  }

  if (active) {
    document.body.style.overflow = 'hidden';
  }
  const closeCart = () => {
    setActive(false)
    document.body.style.overflow = "visible";
  }
  const handleCategoryClick = (category) => {
    if (category === 'All') {
      setData(FoodData);
    } else {
      const updatedData = FoodData.filter((food) => food.category === category);
      setData(updatedData);
    }
  };
  const handleSearch = (query) => {


    const updatedData = FoodData.filter(
      (food) =>
        food.name.toLowerCase().includes(query.toLowerCase())
    );

    setData(updatedData);
  };

  return (
    <div className='relative'>
      <Toaster />
      <Navbar handleClick={handleClick} onSearch={handleSearch}/>
      <CategoryMenu handleClick={handleCategoryClick} />
      <Cart active={active} closeCart={closeCart} />
      <FoodContainer data={data} />
    </div>
  )
}

export default Home