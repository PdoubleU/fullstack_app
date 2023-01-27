import { fullstackAppApi } from "../fullstackAppApi";

type Reservation = {};

type ReservationsDTO = {
  license_plate: string;
  national_id_number: string;
  start_date: string;
  end_date: string;
};

type ReturnedReservationsDTO = ReservationsDTO & {
  id: number;
  payment_id?: number;
};

const reservationsEndpoint = "/reservations";

const reservationsApiWithTags = fullstackAppApi.enhanceEndpoints({
  addTagTypes: [""],
});

export const reservationsApi = reservationsApiWithTags.injectEndpoints({
  endpoints: (builder) => ({
    getReservationsList: builder.query<ReturnedReservationsDTO[], void>({
      query: () => ({
        url: reservationsEndpoint,
      }),
    }),
    postReservation: builder.mutation<any, ReservationsDTO>({
      query: (data) => ({
        url: reservationsEndpoint,
        method: "POST",
        body: data,
      }),
      // invalidatesTags: ["Customers"],
    }),
  }),
});
