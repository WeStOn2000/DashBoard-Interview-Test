import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Slices/userSlice';

/**
 * The Redux store configuration, using Redux Toolkit's configureStore.
 * Add additional reducers here if your app grows.
 */
export const store = configureStore({
  reducer: {
    // This key is "user", and uses the userSlice reducer
    user: userReducer
  }
});
