import { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button, Box } from '@mui/material';

/**
 * A reusable form component to handle user login input (username only).
 *
 * Props:
 *  - onSubmit: a callback function invoked when the user submits the form
 *  - loading: boolean indicating if login is in progress
 *  - error: string containing an error message (if any)
 */
function LoginForm({
  onSubmit = null,   // Default: null if not provided
  loading = false,   // Default: false if not provided
  error = ''         // Default: empty string if not provided
}) {
  // Local state to capture the username
  const [username, setUsername] = useState('');

  /**
   * Handle form submission and invoke the callback with the username.
   * Prevent default behavior of form submission (page reload).
   */
  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSubmit && username.trim()) {
      onSubmit(username.trim());
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 300,
        margin: '0 auto'
      }}
    >
      {/* Username input field */}
      <TextField
        label="Username"
        variant="outlined"
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {/* Display an error message if it exists */}
      {error && (
        <Box sx={{ color: 'red', mt: 1, fontSize: '0.9rem' }}>
          {error}
        </Box>
      )}

      {/* Submit button; disabled if loading */}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={loading}
        sx={{ mt: 2 }}
      >
        {loading ? 'Logging in...' : 'Submit'}
      </Button>
    </Box>
  );
}

LoginForm.propTypes = {
  /** Callback when the user submits the form */
  onSubmit: PropTypes.func,
  /** Whether the submit button should be disabled and show "Logging in..." */
  loading: PropTypes.bool,
  /** Error message to display above the submit button */
  error: PropTypes.string
};

export default LoginForm;
