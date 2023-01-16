import { createAsyncThunk } from "@reduxjs/toolkit";

export const authenticateStdUser = createAsyncThunk(
  "auth/stduser",
  async (_, { rejectWithValue }) => {
    try {
      const auth = await fetch("http://localhost:8000/auth/stduser", {
        method: "GET",
      });
      console.log(auth);
      return auth;
    } catch {
      return rejectWithValue("Error while authenticating the user");
    }
  }
);
