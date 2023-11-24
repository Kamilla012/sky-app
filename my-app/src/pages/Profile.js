import React, { useState, useEffect } from 'react';

const Profile = () => {
  
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [profileImage, setProfileImage] = useState(null)
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      method: 'GET',
      credentials: 'include'
    }).then(response => {
      console.log(response);  // Log the response here
      response.json().then(userInfo => {
        setFname(userInfo.fname)
        setLname(userInfo.lname)
        setEmail(userInfo.email)
        setUsername(userInfo.username)
        setProfileImage(userInfo.profileImage)
      })
    })
  }, []);

  return (
  
    
        <div className='text-white'>
          <h2>Profile</h2>
          <p>First Name: {username}</p>
          <p>{fname}</p>
          <p>{lname}</p>
          <p>{email}</p>
          <img  src={profileImage} className="w-[200px]" alt='profilePhoto'/>
         
     
        </div>
  
  );
};

export default Profile;
