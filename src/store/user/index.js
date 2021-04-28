import { /*createAsyncThunk,*/ createSlice } from "@reduxjs/toolkit";
//import api from "../../api"

const initialState = {
  userData: {
    userId: "",
    name: "",
    email : "",
    userType: "",
  },
  profileData: {
  },
  tokens: {
    access: "",
    refresh: "",
  },
};

/**
 * User Slice
 */
const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    setUserData(state, action) {
      state.userData = action.payload;
    },

    setTokenData(state, action) {
      state.tokens = action.payload;
    },

    setProfileData(state, action) {
      state.profileData = action.payload;
    },

    updateProfileData(state, action) {
      state.profileData = action.payload;
    },
  },
});

/**
 * Exports
 */
export const {
  setUserData,
  setTokenData,
  setProfileData,
  updateProfileData,
} = userSlice.actions;

export default userSlice.reducer;
