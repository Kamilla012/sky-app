import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../style';

const Profile = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/myprofile');
        const userData = response.data; 
        setUserInfo(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      {userInfo ? (
        <div>
          <h1 className={`${styles.h1}`}>Hello {userInfo.username}</h1>
          <img src={userInfo.profileImage} className="w-[300px]" alt='profile_image'/>
          <p>Email: {userInfo.email}</p>
         
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
