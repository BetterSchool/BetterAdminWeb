/* eslint-disable no-unused-vars */
import React from 'react';
import AddressDetail from '../components/AddressDetail'; // Import AddressDetail component
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import UserDetail from '../components/Userdetail';

const Profile = () => {
  const { user } = useKindeAuth();

  // Sample address data (replace with actual data)
  const address = {
    city: 'Tokyo',
    road: '123 Main Street',
    postal_code: '100-0001',
    // Add other address properties if needed
  };

  return (
    <>
      <UserDetail user={user} /> {/* Reference UserDetail component */}
      <AddressDetail address={address} /> {/* Reference AddressDetail component */}
    </>
  );
};

export default Profile;
