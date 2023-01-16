import { fullstackAppApi } from "../fullstackAppApi";

const authEndpoint = "/auth";

export const authApi = fullstackAppApi.injectEndpoints({
  endpoints: (builder) => ({
    authenticateAdminAppUser: builder.mutation<
      { isAdmin: boolean },
      { login: string; pwd: string }
    >({
      query: (args) => {
        return {
          url: authEndpoint,
          method: "POST",
          body: {
            credentials: args,
          },
        };
      },
    }),
  }),
});
