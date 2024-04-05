// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

const AddressDetail = ({ address }) => {
  return (
    <div className="address-detail">
      <h2>City: {address.city}</h2> {/* New line for city */}
      <p>Road: {address.road}</p> {/* New line for road */}
      <p>Postal Code: {address.postal_code}</p> {/* New line for postal code */}
      {/* Other user details */}
    </div>
  );
};

AddressDetail.propTypes = {
  address: PropTypes.shape({
    city: PropTypes.string.isRequired, // Validate 'city' as a required string
    road: PropTypes.string.isRequired, // Validate 'road' as a required string
    postal_code: PropTypes.string.isRequired, // Validate 'postal_code' as a required string
    // Add other properties if needed
  }).isRequired,
};

export default AddressDetail;
