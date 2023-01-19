import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BACKEND_URL = "http://localhost:8000/";

export const FULLSTACK_APP_API_REDUCER_KEY = "fullstackAppApi";

export const fullstackAppApi = createApi({
  reducerPath: FULLSTACK_APP_API_REDUCER_KEY,
  baseQuery: fetchBaseQuery({
    baseUrl: BACKEND_URL,
    prepareHeaders: (headers, { getState }) => {
      // here you can build headers that will be sent with each call
      // const authToken = (getState() as any).someState.token;
      // if (authToken) {
      //    headers.set("Authorization", `Bearer ${authToken}`);
      // }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
