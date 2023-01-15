import { fullstackAppApi } from '../fullstackAppApi'


type Customers = {

}

type CustomersDTO = {
  data: string[]
}

const customersEndpoint = '/customers';

export const customersApi = fullstackAppApi.enhanceEndpoints({ addTagTypes: [""] }).injectEndpoints({
  endpoints: (builder) => ({
    getCustomersList: builder.query<any, void>({
      query: () => ({
        url: customersEndpoint,
      }),
    }),
  }),
})

