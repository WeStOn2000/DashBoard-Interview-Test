import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserDetails } from '../Redux/Slices/userSlice';
import UserProfile from '../components/UserProfile';
import { Box, Typography } from '@mui/material';

/**
 * The Dashboard page that displays detailed user information.
 */
const DashboardPage = () => {
  // Setup dispatch for Redux
  const dispatch = useDispatch();
  // Pull user, status, error, and isLoggedIn from the user slice in the store
  const { user, status, error, isLoggedIn } = useSelector((state) => state.user);

  /**
   * useEffect hook runs on mount or when 'user' changes.
   * If we have a user ID, more detailed info is fetched.
   */
  useEffect(() => {
    if (user && user.id) {
      // Dispatch an action to fetch more detailed info by user ID
      dispatch(fetchUserDetails(user.id));
    }
  }, [dispatch, user]);

  // If the user is not logged in, Message is shown
  if (!isLoggedIn) {
    return (
      <Box sx={{ textAlign: 'center', mt: 5 }}>
        <Typography variant="h6">
          You are not logged in.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h4" textAlign="center" mb={3}>
        Dashboard
      </Typography>

      {/* If we are currently fetching data*/}
      {status === 'loading' && (
        <Typography textAlign="center">Loading user profile...</Typography>
      )}

      {/* If there's an error */}
      {error && (
        <Typography textAlign="center" color="error">
          {error}
        </Typography>
      )}

      {/* Pass the user object to the UserProfile component for display */}
      {user && <UserProfile user={user} />}
    </Box>
  );
};

export default DashboardPage;
