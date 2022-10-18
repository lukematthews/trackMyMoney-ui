import { createSlice } from "@reduxjs/toolkit";

export const pageCounterSlice = createSlice({
  name: "currentPage",
  initialState: {
    value: 0,
  },
  reducers: {
    nextMonth: (state) => {
      if (state.value == 0) {
        return state;
      }
      state.value -= 1;
    },
    previousMonth: (state) => {
      state.value += 1;
    },
  },
});

export const { nextMonth, previousMonth } = pageCounterSlice.actions;
export default pageCounterSlice.reducer;
