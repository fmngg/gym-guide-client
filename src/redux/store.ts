import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { commentReducer } from './slices/comment';
import { userReducer } from './slices/user';

export function makeStore() {
  return configureStore({
    reducer: {
      user: userReducer,
      comment: commentReducer,
    },
  });
}

export const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;
