import { fullstackAppApi } from '../fullstackAppApi'

type Car = {

}

type CarsDTO = {
  data: string[]
}

const carsEndpoint = '/cars';

export const carsApi = fullstackAppApi.enhanceEndpoints({ addTagTypes: [""] }).injectEndpoints({
  endpoints: (builder) => ({
    getCarsList: builder.query<any, void>({
      query: () => ({
        url: carsEndpoint,
      }),
    }),
  }),
})
