import { /*createAsyncThunk,*/ createSlice } from "@reduxjs/toolkit";
//import api from "../../api"

const initialState = {
  orders : [],
  coupons : [],
};

/**
 * Product Slice
 */
const orderSlice = createSlice({
  name: "order",
  initialState,

  reducers: {
    setOrders(state, action) {
      state.orders = action.payload;
    },

    setCoupons(state, action) {
      state.coupons = action.payload;
    },

  },
});

/**
 * Exports
 */
export const {
  setOrders,
  setCoupons
} = orderSlice.actions;

export default orderSlice.reducer;
