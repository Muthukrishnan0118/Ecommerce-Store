import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  product: null,
  isLoading: false,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchAll",
  async ({ keyword = "", category = "" } = {}) => {
    const { data } = await axios.get(
      `http://localhost:5000/api/products?keyword=${keyword}&category=${category}`,
    );

    return data;
  },
);

export const fetchProductById = createAsyncThunk(
  "products/fetchById",
  async (id) => {
    const { data } = await axios.get(
      `http://localhost:5000/api/products/${id}`,
    );

    return data;
  },
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      })
      .addCase(fetchProductById.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default productSlice.reducer;
