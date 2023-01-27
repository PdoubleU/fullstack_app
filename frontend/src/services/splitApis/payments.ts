import { fullstackAppApi } from "../fullstackAppApi";

type Reservation = {};

type PaymentsDTO = {
  discount: number;
  price_per_day: number;
  days: number;
  total_price: number;
};

const PaymentsEndpoint = "/payments";

const paymentsApiWithTags = fullstackAppApi.enhanceEndpoints({
  addTagTypes: [""],
});

export const paymentsApi = paymentsApiWithTags.injectEndpoints({
  endpoints: (builder) => ({
    getPaymentsList: builder.query<PaymentsDTO[], void>({
      query: () => ({
        url: PaymentsEndpoint,
      }),
    }),
    postPayment: builder.mutation<any, PaymentsDTO>({
      query: (data) => ({
        url: PaymentsEndpoint,
        method: "POST",
        body: data,
      }),
      // invalidatesTags: ["Customers"],
    }),
  }),
});
