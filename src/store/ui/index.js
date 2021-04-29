import { /*createAsyncThunk,*/ createSlice } from "@reduxjs/toolkit";
//import api from "../../api"

const initialState = {
  preloadShow : false,
};

/**
 * Product Slice
 */
const productSlice = createSlice({
  name: "ui",
  initialState,

  reducers: {
    setPreloadShow: (ui, action) => {
        ui.preloadShow = action.payload;
    },
  },
});

/**
 * Exports
 */
export const {
    setPreloadShow
} = productSlice.actions;

export default productSlice.reducer;
