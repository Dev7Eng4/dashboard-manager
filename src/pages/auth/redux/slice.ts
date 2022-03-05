import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserResponse } from 'api/types/User';
import type { RootState } from 'redux/store';

interface LoginRequest {
  username: string;
  password: string;
  isRemember: boolean;
}

type State = LoginRequest & {
  user: UserResponse;
};

const initialState: State = {
  username: '',
  password: '',
  isRemember: false,
  user: {
    id: '',
    lastName: '',
    role: 'User',
    methodSendCode: 'Phone',
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<LoginRequest>) => {
      state.username = action.payload.username;
      state.password = action.payload.password;
      state.isRemember = action.payload.isRemember;
    },
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
