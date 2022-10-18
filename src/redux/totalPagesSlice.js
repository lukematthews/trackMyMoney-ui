import { createSlice } from "@reduxjs/toolkit";

export const totalPagesSlice = createSlice({
  name: "totalPages",
  initialState: { value: 0, pages: [] },
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
    setPages: (state, action) => {
      return { ...state, pages: action.payload };
    },
  },
});

export const { set, setPages } = totalPagesSlice.actions;
export default totalPagesSlice.reducer;
