import { fullstackAppApi } from "../fullstackAppApi";

type Reservation = {};

type PaymentsDTO = {};

const PaymentsEndpoint = "/payments";

const paymentsApiWithTags = fullstackAppApi.enhanceEndpoints({
  addTagTypes: [""],
});

export const paymentsApi = paymentsApiWithTags.injectEndpoints({
  endpoints: (builder) => ({
    getPaymentsList: builder.query<any, void>({
      query: () => ({
        url: PaymentsEndpoint,
      }),
    }),
  }),
});
