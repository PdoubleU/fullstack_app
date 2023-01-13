import { fullstackAppApi } from '../fullstackAppApi'

const reservationsEndpoint = '/reservations'

const reservationsApiWithTags = fullstackAppApi.enhanceEndpoints({ addTagTypes: [''] })

export const reservationsApi = reservationsApiWithTags.injectEndpoints({
  endpoints: (builder) => ({
    getreservations: builder.query<unknown, undefined>({
      query: () => ({
        url: reservationsEndpoint,
      }),
    })
  }),
})
