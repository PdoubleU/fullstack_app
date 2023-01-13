import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { fullstackAppApi, FULLSTACK_APP_API_REDUCER_KEY } from '../services/fullstackAppApi';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [FULLSTACK_APP_API_REDUCER_KEY]: fullstackAppApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fullstackAppApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
