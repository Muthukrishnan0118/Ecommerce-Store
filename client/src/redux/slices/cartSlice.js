import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const exist = state.items.find((x) => x._id === item._id);

      if (exist) {
        exist.qty += 1;
      } else {
        state.items.push({ ...item, qty: 1 });
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((x) => x._id !== action.payload);
    },

    clearCart: (state) => {
      state.items = [];
    },
    increaseQty: (state, action) => {
      const item = state.items.find((x) => x._id === action.payload);

      if (item) {
        item.qty += 1;
      }
    },

    decreaseQty: (state, action) => {
      const item = state.items.find((x) => x._id === action.payload);

      if (item && item.qty > 1) {
        item.qty -= 1;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQty,
  decreaseQty,
} = cartSlice.actions;

export default cartSlice.reducer;
