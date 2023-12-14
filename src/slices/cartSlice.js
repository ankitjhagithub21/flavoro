import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

const initialState = {
  value: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItemIndex = state.value.findIndex((item) => item.id === action.payload.id);

      if (existingItemIndex !== -1) {
        const updatedCartItems = [...state.value];
        updatedCartItems[existingItemIndex].quantity += 1;

        state.value = updatedCartItems;
        toast.success('Added to cart');
      } else {
        state.value = [...state.value, { ...action.payload, quantity: 1 }];
        toast.success('Added to cart');
      }
    },
    removeFromCart: (state, action) => {
      const updatedCartItems = state.value.filter((item) => item.id !== action.payload);

      state.value = updatedCartItems;
      toast.success('Removed from cart.');
    },
    incrementQuantity: (state, action) => {
      const updatedCartItems = state.value.map((item) =>
        item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
      );

      state.value = updatedCartItems;
    },
    decrementQuantity: (state, action) => {
      const updatedCartItems = state.value.map((item) =>
        item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
      );


      state.value = updatedCartItems.filter((item) => item.quantity > 0);
    },
    clearCart: (state) => {
      state.value = [];
      toast.success("Checkout Successfull!")
    },
  },
});

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity,clearCart } = cartSlice.actions;

export default cartSlice.reducer;
