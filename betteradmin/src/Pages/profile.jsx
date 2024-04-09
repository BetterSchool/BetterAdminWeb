/* eslint-disable no-unused-vars */
import React from 'react';
import AddressDetail from '../components/AddressDetail'; // Import AddressDetail component
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import UserDetail from '../components/Userdetail';

const Profile = () => {
  const { user } = useKindeAuth();
  const userPicture = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"

  // Sample address data (replace with actual data)
  const address = {
    city: 'Tokyo',
    road: '123 Main Street',
    postal_code: '100-0001',
  };

  return (
    <>
      <body className="bg-gray-300 antialiased">
      <UserDetail user={user} /> {/* Reference UserDetail component */}
      <AddressDetail address={address} /> {/* Reference AddressDetail component */}

      {/* <!-- component --> */}
          <div className="container mx-auto my-60">
              <div>

                  <div className="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
                      <div className="flex justify-center">
                              <img src={userPicture} alt="" className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"/>
                      </div>
                      
                      <div className="mt-16">
                          <h1 className="font-bold text-center text-3xl text-gray-900">{user.given_name}</h1>
                          <p className="text-center text-sm text-gray-400 font-medium">{user.email}</p>
                          <p>
                              <span>
                                  
                              </span>
                          </p>
                          {/* <div className="my-5 px-6">
                              <a href="#" className="text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white">Connect with <span className="font-bold">@pantazisoft</span></a>
                          </div> */}
                          {/* <div className="flex justify-between items-center my-5 px-6">
                              <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Facebook</a>
                              <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Twitter</a>
                              <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Instagram</a>
                              <a href="" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Email</a>
                          </div> */}

                          <div className="w-full">
                              <h3 className="font-medium text-gray-900 text-left px-6">Recent activites</h3>
                              <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                                  
                                  <a href="#" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                      <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2"/>
                                          Adresse: 
                                          <span className="text-gray-600 text-xs">{address.road}</span>
                                  </a>

                                  <a href="#" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                      <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2"/>
                                          By: 
                                          <span className="text-gray-600 text-xs">{address.city}, {address.postal_code}</span>
                                  </a>

                                  <a href="#" className="w-full border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150">
                                      <img src="https://avatars0.githubusercontent.com/u/35900628?v=4" alt="" className="rounded-full h-6 shadow-md inline-block mr-2"/>
                                      Posted new article in 
                                      {/* <span className="font-bold">#Web Dev</span> */}
                                      <span className="text-gray-600 text-xs">49 min ago</span>
                                  </a>

                                  
                              </div>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
</body>
    </>
  );
};

export default Profile;
