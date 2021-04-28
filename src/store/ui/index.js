import {createSlice} from "@reduxjs/toolkit";

/**
 * UI Slice
 */
const uiSlice = createSlice({
    name: "ui",
    initialState: {
        sidebarShow: "responsive",
        loading: false
    },
    reducers: {
        sidebarShowSet: (ui, action) => {
            ui.sidebarShow = action.payload.sidebarShow;
        },

    },
});


export default uiSlice.reducer;

//Action creators
export const setSidebarShow = (data) => (dispatch, getState) => {
    dispatch({
        type: "ui/sidebarShowSet",
        payload: {
            ...data,
        },
    });
};

//Selectors
export const getSidebarShow = (state) => state.ui.sidebarShow;
