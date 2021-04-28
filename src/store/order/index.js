import { /*createAsyncThunk,*/ createSlice } from "@reduxjs/toolkit";
//import api from "../../api"

const initialState = {
  orders : [],
  coupons : [],
  zoneCities : [],
  zoneArray : [],
  cartItems : [],
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

    setZoneCities(state, action) {
      state.zoneCities = action.payload;
    },

    setZoneArray(state, action) {
      state.zoneArray = action.payload;
    },

    setCartItems(state, action) {
      state.cartItems = action.payload;
    },



  },
});

/**
 * Exports
 */
export const {
  setOrders,
  setCoupons,
  setCartItems,
  setZoneArray,
  setZoneCities

} = orderSlice.actions;

export default orderSlice.reducer;
