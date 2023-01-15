import { fullstackAppApi } from '../fullstackAppApi'

const authEndpoint = '/authenticate'

export const authApi = fullstackAppApi.injectEndpoints({
  endpoints: (builder) => ({
    authenticateAdminAppUser: builder.mutation<{ isAdmin: boolean }, { login: string, pwd: string}>({
      query: (args) => {
        return ({
          url: authEndpoint,
          method: 'POST',
          body: {
            credentials: args,
          },
        })
      }
    }),
    authenticateStdAppUser: builder.query<{ isAdmin: boolean }, void> ({
      query: () => {
        return ({
          url: authEndpoint,
        })
      }
    })
  }),
})
