// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types'; // Import PropTypes

const UserDetail = ({ user }) => {
  return (
    <div className="user-detail">
      <h2>{user.firstname} {user.lastname}</h2>
      <p>Email: {user.email}</p>
      <p>Phone: {user.mobile_number}</p>
      {/* Other user details */}
    </div>
  );
};

// Add PropTypes validation for the 'user' object
UserDetail.propTypes = {
  user: PropTypes.shape({
    firstname: PropTypes.string.isRequired, // Validate 'firstname' as a required string
    lastname: PropTypes.string.isRequired, // Validate 'lastname' as a required string
    email: PropTypes.string.isRequired, // Validate 'email' as a required string
    mobile_number: PropTypes.string.isRequired, // Validate 'mobile_number' as a required string
    // Add other properties if needed
  }).isRequired, // Make sure 'user' is required
};

export default UserDetail;
