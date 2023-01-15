import { fullstackAppApi } from '../fullstackAppApi'

type Reservation = {}

type ReservationsDTO = {}

const reservationsEndpoint = '/reservations'

const reservationsApiWithTags = fullstackAppApi.enhanceEndpoints({ addTagTypes: [''] })

export const reservationsApi = reservationsApiWithTags.injectEndpoints({
  endpoints: (builder) => ({
    getReservationsList: builder.query<any, void>({
      query: () => ({
        url: reservationsEndpoint,
      }),
    })
  }),
})
