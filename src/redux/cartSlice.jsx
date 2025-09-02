// src/redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};

//ToDo : Change name to id in all places

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i._id === item._id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }

      state.totalQuantity += 1;
      state.totalPrice += item.price;
    },

    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.cartItems.find((i) => i._id === itemId);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.price * existingItem.quantity;
        state.cartItems = state.cartItems.filter((i) => i._id !== itemId);
      }
    },

    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.cartItems.find((i) => i._id === itemId);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= existingItem.price;
      } else {
        // if only 1 item left, remove it completely
        state.cartItems = state.cartItems.filter((i) => i._id !== itemId);
        state.totalQuantity -= 1;
        state.totalPrice -= existingItem.price;
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
