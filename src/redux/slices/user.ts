import { AuthResponse } from '@/core/api/dto';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '../store';

export interface IUserState {
  data: AuthResponse | null;
}

const initialState: IUserState = {
  data: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<AuthResponse | null>) => {
      state.data = action.payload;
    },
  },
});

export const { setUserData } = userSlice.actions;

export const selectUserData = (state: AppState) => state.user.data;

export const userReducer = userSlice.reducer;
