import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserByUsername, getUserById } from '../../api/dummyJsonService';

/**
 * Thunk to fetch a user by their username.
 * Dispatch this thunk with a username; it calls the API and returns user data if found.
 */
export const fetchUserByUsername = createAsyncThunk(
  'user/fetchUserByUsername',
  async (username, { rejectWithValue }) => {
    try {
      // Call the API service to fetch user by username
      const user = await getUserByUsername(username);

      // If no user is found, reject the promise with an error message
      if (!user) {
        return rejectWithValue('User not found');
      }

      // Return the user data as the fulfilled payload
      return user;
    } catch (error) {
      // If there's an error (e.g., network issue), reject with the error message
      return rejectWithValue(error.message);
    }
  }
);

/**
 * Thunk to fetch more detailed information for a user by their ID.
 */
export const fetchUserDetails = createAsyncThunk(
  'user/fetchUserDetails',
  async (userId, { rejectWithValue }) => {
    try {
      // Call the API service to fetch user details by user ID
      const user = await getUserById(userId);
      // Return the detailed user as the fulfilled payload
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

/**
 * The userSlice handles the state of the current user, including login status,
 * loading state, and any errors that occur during fetches.
 */
const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,          // full user data object
    status: 'idle',      // can be: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,         // stores error messages
    isLoggedIn: false    // boolean indicating if the user is logged in
  },
  reducers: {
    // A simple logout action that resets user-related state
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      state.status = 'idle';
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    // Handle fetchUserByUsername states
    builder.addCase(fetchUserByUsername.pending, (state) => {
      state.status = 'loading';  // indicate loading state
      state.error = null;        // clear previous errors
    });
    builder.addCase(fetchUserByUsername.fulfilled, (state, action) => {
      state.status = 'succeeded'; // data fetch succeeded
      state.error = null;         // clear error
      state.user = action.payload; // store the fetched user
      state.isLoggedIn = true;    // user is now considered logged in
    });
    builder.addCase(fetchUserByUsername.rejected, (state, action) => {
      state.status = 'failed';    // data fetch failed
      // If we have a specific payload, use that; otherwise, default message
      state.error = action.payload || 'Failed to fetch user by username';
      state.isLoggedIn = false;   // set logged in to false
    });

    // Handle fetchUserDetails states
    builder.addCase(fetchUserDetails.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(fetchUserDetails.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.error = null;
      // Overwrite user data with the more detailed data from the API
      state.user = action.payload;
      state.isLoggedIn = true;
    });
    builder.addCase(fetchUserDetails.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload || 'Failed to fetch user details';
    });
  }
});

// Export our logout action so we can use it in components
export const { logout } = userSlice.actions;

// Export the reducer (default export) to be included in the Redux store
export default userSlice.reducer;
