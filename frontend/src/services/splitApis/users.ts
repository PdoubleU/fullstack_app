import { fullstackAppApi } from "../fullstackAppApi";

export type UserObject = {
  login: string;
  user_type: string;
};

const usersEndpoint = "/users";

export const userssApi = fullstackAppApi
  .enhanceEndpoints({ addTagTypes: ["Users"] })
  .injectEndpoints({
    endpoints: (builder) => ({
      getUsersList: builder.query<UserObject[], void>({
        query: () => ({
          url: usersEndpoint,
        }),
        providesTags: ["Users"],
      }),
    }),
  });
