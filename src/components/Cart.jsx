import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { useDispatch } from 'react-redux';
import { clearCart } from '../slices/cartSlice';
const Cart = ({ active, closeCart }) => {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch()
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  return (
    <div className={`fixed top-0 ${active ? 'right-0' : '-right-full'} h-full lg:w-96 w-full bg-gray-100 transform duration-500 z-10 overflow-scroll`}>
      <div className='p-3 flex justify-between items-center'>
        <h2 className='text-xl font-medium'>Your Order</h2>
        <button onClick={closeCart}>
          <i className="ri-close-circle-line text-2xl"></i>
        </button>
      </div>
      <div>
        {cart.length > 0 ? cart.map((item) => <CartItem key={item.id} item={item} />) : <p className='text-center my-5'>Cart is empty!</p>}
      </div>
      {cart.length > 0 && (
        <div className='flex flex-col w-full p-2 gap-3'>
          <p>Total Price: &#8377;{calculateTotalPrice()}</p>
          <button className='p-2 bg-indigo-500 text-white rounded' onClick={()=>dispatch(clearCart())}>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
