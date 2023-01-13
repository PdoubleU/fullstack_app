import { fullstackAppApi } from '../fullstackAppApi'

const authEndpoint = '/authenticate'

export const authApi = fullstackAppApi.injectEndpoints({
  endpoints: (builder) => ({
    authenticateAppUser: builder.mutation<{ user: string }, unknown>({
      query: (args) => {
        console.log("ARGS ", args);
        return ({
          url: authEndpoint,
          method: 'POST',
          body: {
            user: args,
          },
        })
      }
    }),
  }),
})
