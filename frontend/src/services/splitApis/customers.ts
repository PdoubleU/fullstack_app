import { fullstackAppApi } from '../fullstackAppApi'

export const customersApi = fullstackAppApi.enhanceEndpoints({ addTagTypes: [""] }).injectEndpoints({
  endpoints: (builder) => ({
    getCustomersList: builder.query<unknown, void>({
      query: () => ({
        url:"",
      }),
    }),
  }),
})
