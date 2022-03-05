import { configureStore } from '@reduxjs/toolkit';
import { compose, applyMiddleware } from 'redux';

import authReducer from 'pages/auth/redux/slice';

const { BUILD_MODE } = process.env;

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  // enhancers: {}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
