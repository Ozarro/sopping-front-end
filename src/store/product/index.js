import { /*createAsyncThunk,*/ createSlice } from "@reduxjs/toolkit";
//import api from "../../api"

const initialState = {
  products : [],
  categories : []

};

/**
 * Product Slice
 */
const productSlice = createSlice({
  name: "product",
  initialState,

  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },

    setCategories(state, action) {
      state.categories = action.payload;
    },

  },
});

/**
 * Exports
 */
export const {
    setCategories,
    setProducts
} = productSlice.actions;

export default productSlice.reducer;
