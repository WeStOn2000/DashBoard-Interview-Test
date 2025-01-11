import { Card, CardContent, Typography, Box, Avatar } from '@mui/material';
import PropTypes from 'prop-types';

/**
 * Component that displays user information inside a styled card.
 * 
 * Props:
 *  - user: an object containing user details such as firstName, lastName, etc.
 */
const UserProfile = ({ user }) => {
  // If no user is provided, Nothing is rendered
  if (!user) return null;

  // Destructure relevant fields from the user object
  const {
    firstName,
    lastName,
    age,
    gender,
    image,
    company,
    address,
    email,
    phone
  } = user;

  return (
    <Card sx={{ maxWidth: 500, margin: '0 auto' }}>
      <CardContent>
        {/* Top Info: Avatar, Name, Gender, Age */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            marginBottom: 3
          }}
        >
          <Avatar
            alt={`${firstName} ${lastName}`}
            src={image}
            sx={{ width: 80, height: 80 }}
          />
          <Box>
            <Typography variant="h6">
              {firstName} {lastName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Gender: {gender} | Age: {age}
            </Typography>
          </Box>
        </Box>

        {/* Address section */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1">Address</Typography>
          <Typography variant="body2" color="text.secondary">
            {address?.address}, {address?.city}, {address?.state}, {address?.postalCode}
          </Typography>
        </Box>

        {/* Working Place section */}
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1">Working Place</Typography>
          <Typography variant="body2" color="text.secondary">
            {company?.name} - {company?.department}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {company?.title}
          </Typography>
        </Box>

        {/* Contact Information section */}
        <Box sx={{ mb: 1 }}>
          <Typography variant="subtitle1">Contact Information</Typography>
          <Typography variant="body2" color="text.secondary">
            Name: {firstName} {lastName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Phone: {phone}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Email: {email}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

/** Prop validation using PropTypes */
UserProfile.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    age: PropTypes.number,
    gender: PropTypes.string,
    image: PropTypes.string,
    company: PropTypes.shape({
      name: PropTypes.string,
      department: PropTypes.string,
      title: PropTypes.string
    }),
    address: PropTypes.shape({
      address: PropTypes.string,
      city: PropTypes.string,
      state: PropTypes.string,
      postalCode: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ])
    }),
    email: PropTypes.string,
    phone: PropTypes.string
  })
};

/** Default props if none are provided */
UserProfile.defaultProps = {
  user: null
};

export default UserProfile;
