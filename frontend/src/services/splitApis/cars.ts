import { fullstackAppApi } from '../fullstackAppApi'

export const carsApi = fullstackAppApi.enhanceEndpoints({ addTagTypes: [""] }).injectEndpoints({
  endpoints: (builder) => ({
    getCarsList: builder.query<unknown, void>({
      query: () => ({
        url: "",
      }),
    }),
  }),
})
