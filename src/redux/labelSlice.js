import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const labelSlice = createSlice({
  name: "labels",
  initialState,
  reducers: {
    loadLabels: (state, action) => {
      return { ...state, labels: action.payload };
    },
  },
});

export const { loadLabels } = labelSlice.actions;
export default labelSlice.reducer;
