import { createSlice } from "@reduxjs/toolkit";

const pages = { labelAnalysis: [], transactions: [] };

export const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    // filters: [],
    filters: pages,
  },
  reducers: {
    addFilter: (state, action) => {
      // state.filters.push(action.payload);
      state.filters[action.payload.page].push(action.payload.label);
      return state;
    },
    removeFilter: (state, action) => {
      // state.filters = state.filters.filter((label) => label != action.payload);
      state.filters[action.payload.page] = state.filters[
        action.payload.page
      ].filter((label) => label != action.payload.label);
    },
  },
});

export const { addFilter, removeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
