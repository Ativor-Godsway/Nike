// ./redux/orderApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3000/api",
  credentials: "include",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const OrderApi = createApi({
  reducerPath: "orderApi",
  baseQuery,
  tagTypes: ["Order"],
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: () => "/orders",
      providesTags: ["Order"],
    }),
    createOrder: builder.mutation({
      query: (newOrder) => ({
        url: "/orders",
        method: "POST",
        body: newOrder,
      }),
      invalidatesTags: ["Order"],
    }),
    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `/orders/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Order"],
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useCreateOrderMutation,
  useDeleteOrderMutation,
} = OrderApi;
export default OrderApi;
