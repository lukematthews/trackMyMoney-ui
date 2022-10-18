// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define our single API slice object
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getMonth: builder.query({
      query: (args) => ({
        url: `/month?sort=monthValue,desc&size=1&page=${args.page}`,
      }),
    }),
    getLabel: builder.query({
      query: (args) => ({ url: `/labels/label-page?page=${args.page}` }),
    }),
    getLabelSearch: builder.query({
      query: (args) => ({ url: "/label-search" }),
    }),
    getParentLabels: builder.query({
      query: () => ({ url: "/parentLabels" }),
    }),
    getLabelTypes: builder.query({ query: () => ({ url: "/labelTypes" }) }),
    getMatchedTransactions: builder.query({
      query: (args) => ({
        url: "/matchTransactions",
        params: args,
      }),
    }),
    updateLabel: builder.mutation({
      query: ({ ...patch }) => ({
        url: "/save-label",
        method: "PUT",
        body: patch,
      }),
    }),
    deleteLabel: builder.mutation({
      query: (args) => ({
        url: `/delete-label?labelId=${args.labelId}`,
        method: "DELETE",
      }),
    }),
    uploadTransactions: builder.mutation({
      query: (args) => ({
        url: `/upload-text`,
        method: "POST",
        body: args,
      }),
    }),
    deleteAuthorisation: builder.mutation({
      query: (args) => ({
        url: `/delete-authorisations`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  endpoints,
  useGetMonthQuery,
  useGetLabelQuery,
  useGetLabelSearchQuery,
  useGetParentLabelsQuery,
  useGetLabelTypesQuery,
  useGetMatchedTransactionsQuery,
  useUpdateLabelMutation,
} = apiSlice;
