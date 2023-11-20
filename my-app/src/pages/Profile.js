import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../style';

const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Get the token from localStorage
        const token = localStorage.getItem('token');
  
        // Check if the token is present
        if (!token) {
          console.error('Token not found');
          // Redirect to the login page or handle it as per your application's logic
          return;
        }
  
        // Make the request with the token in the Authorization header
        const response = await axios.get('http://localhost:4000/myprofile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        // Process the response data
        console.log(response.data);
        const userData = response.data;
        setUserInfo(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Handle the error or redirect the user to the login page
      }
    };
  
    fetchUserData();
  }, []);

  return (
    <div className='flex justify-center'>
      {userInfo ? (
        <div>
          <h1 className={`${styles.h1}`}>Hello {userInfo.name}</h1>
          <img
            src={userInfo.profileImage}
            className='w-[200px] rounded-full'
            alt='profile_image'
          />
          <p>Email: {userInfo.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
