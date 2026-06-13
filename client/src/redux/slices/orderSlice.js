import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOrders = createAsyncThunk("orders/fetchAll", async () => {
  const { data } = await axios.get("http://localhost:5000/api/orders");

  return data;
});

const orderSlice = createSlice({
  name: "orders",

  initialState: {
    orders: [],
    shippingAddress: {},
    loading: false,
  },

  reducers: {
    saveShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })

      .addCase(fetchOrders.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { saveShippingAddress } = orderSlice.actions;

export default orderSlice.reducer;
