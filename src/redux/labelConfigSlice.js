import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  patterns: [],
  labelTypes: [],
  transaction: {},
  updated: false,
};

export const labelConfigSlice = createSlice({
  name: "labelConfigSlice",
  initialState: initialState,
  reducers: {
    setPatterns: (state, action) => {
      state.label.patterns = action.payload;
    },
    setTransaction: (state, action) => {
      state.transaction = action.payload;
    },
    setLabel: (state, action) => {
      state.label = action.payload;
    },
    setLabelTypes: (state, action) => {
      return { ...state, labelTypes: action.payload };
    },
    setOpenSearch: (state, action) => {
      state.openSearch = action.payload;
    },
    fireLabelUpdated: (state, action) => {
      state.updated = !state.updated;
    },
  },
});
export const {
  setPatterns,
  setLabel,
  setLabelTypes,
  setTransaction,
  setOpenSearch,
  fireLabelUpdated,
} = labelConfigSlice.actions;

export default {
  labelConfigSliceReducer: labelConfigSlice.reducer,
};
