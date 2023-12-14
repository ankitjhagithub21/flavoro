import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../slices/cartSlice'

const FoodItem = ({ item }) => {
    const dispatch = useDispatch()
    return (
        <div className="p-4 md:w-1/2 lg:w-1/4 w-full cursor-pointer hover:-translate-y-5 transform duration-1000 ">
            <div className="px-4 py-6 rounded-lg shadow-lg bg-gray-200">

                <img src={item.img} alt={item.name} className='h-48 w-full object-contain' />


                <div className='flex flex-col h-48 justify-between'>

                    <div className='flex justify-between items-center gap-2 mt-2'>
                        <h2 className="text-lg text-gray-900 font-medium title-font">{item.name}</h2>
                        <b className='text-green-500'>&#8377;{item.price}</b>
                    </div>
                    <h3 className="tracking-widest text-indigo-500 text-sm font-medium title-font">{item.category}</h3>

                    <p className="leading-relaxed text-sm">{item.desc.slice(0, 100)}...</p>
                    <div className='flex justify-between  items-center'>
                        <div className='flex gap-1 text-lg items-center justify-center'>
                            <i className="ri-star-fill text-yellow-500"></i>
                            <b>{item.rating}</b>
                        </div>

                        <button className='text-xs bg-green-500 text-white px-2 py-2 rounded-lg font-medium' onClick={() => dispatch(addToCart(item))}>ADD TO CART</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FoodItem