import { useDispatch, useSelector } from 'react-redux';
import { fetchUserByUsername } from '../Redux/Slices/userSlice';
import LoginForm from '../components/LoginForm';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

/**
 * The main Login Page component.
 * Renders a title and the LoginForm, and handles login logic via Redux.
 */
const LoginPage = () => {
  // Hook to dispatch actions to the Redux store
  const dispatch = useDispatch();
  // React Router hook to navigate programmatically
  const navigate = useNavigate();
  // Access user state from the store (to get status, error, etc.)
  const { status, error } = useSelector((state) => state.user);

  /**
   * Triggered after the user submits the login form with a username.
   * Dispatches the fetchUserByUsername thunk.
   */
  const handleLogin = async (username) => {
    // Dispatch the thunk action
    const action = await dispatch(fetchUserByUsername(username));

    // If the action was fulfilled, navigate to the dashboard
    if (fetchUserByUsername.fulfilled.match(action)) {
      navigate('/dashboard');
    }
    // If it was rejected, an error message will appear from state.error
  };

  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="h4" textAlign="center" mb={3}>
        Login Page
      </Typography>
      {/* The login form: pass loading state and error from Redux */}
      <LoginForm
        onSubmit={handleLogin}
        loading={status === 'loading'}
        error={error}
      />
    </Box>
  );
};

export default LoginPage;
