import { fullstackAppApi } from "../fullstackAppApi";

type CustomerObject = {
  PESEL: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
};

const customersEndpoint = "/customers";

export const customersApi = fullstackAppApi
  .enhanceEndpoints({ addTagTypes: ["Customers"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getCustomersList: builder.query<CustomerObject[], void>({
        query: () => ({
          url: customersEndpoint,
        }),
        providesTags: ["Customers"],
      }),
      postCustomers: builder.mutation<any, CustomerObject>({
        query: (data) => ({
          url: customersEndpoint,
          method: "POST",
          body: data,
        }),
        // invalidatesTags: ["Customers"],
      }),
      deleteCustomer: builder.mutation<any, { id: string }>({
        query: ({ id }) => ({
          url: `${customersEndpoint}/${id}`,
          method: "POST",
        }),
      }),
    }),
  });
