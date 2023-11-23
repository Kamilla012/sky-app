import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [username, setUsername] = useState(null)
  const [profileImage, setProfileImage] = useState(null)
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      method: 'GET',
      credentials: 'include'
    }).then(response => {
      console.log(response);  // Log the response here
      response.json().then(userInfo => {
        setUsername(userInfo.username)
        setProfileImage(userInfo.profileImage)
      })
    })
  }, []);

  return (
  
    
        <div>
          <h2>Profile</h2>
          <p>First Name: {username}</p>
          <img  src={profileImage} className="w-[200px]" alt='profilePhoto'/>
         
     
        </div>
  
  );
};

export default Profile;
