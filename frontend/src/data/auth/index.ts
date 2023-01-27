import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authApi } from "../../services/splitApis/authApi";

const initialState = {
  status: "idle",
  isLogged: false,
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
          state.isAdmin = action.payload.isAdmin;
          state.isLogged = true;
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

export const { testPayloadPrepare, handleAuthUserError } =
  authorizationSlice.actions;
export default authorizationSlice.reducer;
