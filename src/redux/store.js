import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import { filtersSlice } from "./filtersSlice";
import { pageCounterSlice } from "./pageCounterSlice";
import { totalPagesSlice } from "./totalPagesSlice";
import { labelConfigSlice } from "./labelConfigSlice";
import { labelSlice } from "./labelSlice";
// import finalFormReducer from "../../finalForm/finalFormDuck";

const reducer = {
  [pageCounterSlice.name]: pageCounterSlice.reducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
  [totalPagesSlice.name]: totalPagesSlice.reducer,
  [filtersSlice.name]: filtersSlice.reducer,
  [labelSlice.name]: labelSlice.reducer,
  [labelConfigSlice.name]: labelConfigSlice.reducer,
  // finalForm: finalFormReducer,
};

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
