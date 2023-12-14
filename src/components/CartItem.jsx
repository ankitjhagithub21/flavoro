import React from 'react'
import { useDispatch } from 'react-redux'
import { decrementQuantity, incrementQuantity, removeFromCart } from '../slices/cartSlice'

const CartItem = ({ item }) => {
  const dispatch = useDispatch()
  return (
    <div className='p-2 bg-white m-2 rounded shadow relative'>
      <div className='flex gap-2 items-start'>
        <div className='flex flex-col gap-1 text-center justify-between'>
          <img src={item.img} alt="cart-item-name" width={70} />
          <b className='text-green-500'>&#8377;{item.price * item.quantity}</b>
        </div>
        <div className='flex flex-col justify-center items-start gap-2 pr-5'>

          <h2 className='font-medium'>{item.name}</h2>
          <div className='flex gap-2 items-center justify-center'>
            <button onClick={()=>dispatch(decrementQuantity(item.id))} className='text-red-500 text-2xl'>-</button>
            <span className='border px-2 border-gray-700 rounded'>{item.quantity}</span>
            <button onClick={()=>dispatch(incrementQuantity(item.id))} className='text-green-500 text-2xl'>+</button>
          </div>

        </div>

        <button className='absolute right-0 top-0 m-2 text-xl text-red-500'>
          <i className="ri-delete-bin-5-line" onClick={() => dispatch(removeFromCart(item.id))}></i>
        </button>

      </div>
    </div>
  )
}

export default CartItem