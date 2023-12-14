import React, { useState } from 'react';

const categories = ['All', 'Lunch', 'Breakfast', 'Dinner', 'Snacks'];

const CategoryMenu = ({ handleClick }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const handleButtonClick = (category) => {
    setActiveCategory(category);
    handleClick(category);
  };

  return (
    <div className='flex gap-3 flex-wrap px-5 pt-20 justify-start lg:justify-center container mx-auto'>
      {categories.map((category) => (
        <CategoryButton
          key={category}
          category={category}
          isActive={activeCategory === category}
          onClick={handleButtonClick}
        />
      ))}
    </div>
  );
};

const CategoryButton = ({ category, isActive, onClick }) => {
  return (
    <button
      className={`px-2 py-2 rounded-lg font-bold ${isActive ? 'bg-green-500' : 'bg-gray-100'}`}
      onClick={() => onClick(category)}
    >
      {category}
    </button>
  );
};

export default CategoryMenu;