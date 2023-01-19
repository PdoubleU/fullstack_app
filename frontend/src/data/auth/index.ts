import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authApi } from "../../services/splitApis/authApi";

const initialState = {
  status: "idle",
  isAdmin: false,
};

const authorizationSlice = createSlice({
  name: "authorization",
  initialState,
  reducers: {
    testPayloadPrepare: {
      reducer: (state, action: PayloadAction<string>) => {
        state.status = action.payload;
      },
      prepare: (text: string) => {
        const testStatus = `That test status is ${text}`;
        return { payload: testStatus };
      },
    },
    setAuthorizedUser: (state, data) => {
      console.log(state, data);
      state.isAdmin = data.payload.isAdmin;
    },
    handleAuthUserError: (state, e) => {
      state.status = "failed";
      console.error("Error while trying /auth: ", e);
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApi.endpoints.authenticateAdminAppUser.matchFulfilled,
        (state, action) => {
          console.log("CHECK THIS OUT ", action);
          state.isAdmin = action.payload.isAdmin;
          state.status = "loaded";
        }
      )
      .addMatcher(
        authApi.endpoints.authenticateAdminAppUser.matchRejected,
        (state) => {
          state.status = "failed";
        }
      );
  },
});

export const { testPayloadPrepare, setAuthorizedUser, handleAuthUserError } =
  authorizationSlice.actions;
export default authorizationSlice.reducer;
