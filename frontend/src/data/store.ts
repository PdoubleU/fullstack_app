import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authorizationReducer from "../data/auth/index";
import {
  fullstackAppApi,
  FULLSTACK_APP_API_REDUCER_KEY,
} from "../services/fullstackAppApi";

export const store = configureStore({
  reducer: {
    authorizationReducer,
    [FULLSTACK_APP_API_REDUCER_KEY]: fullstackAppApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fullstackAppApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
