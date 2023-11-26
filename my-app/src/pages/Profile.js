import React, { useState, useEffect } from 'react';
import DefaultProfile from '../images/profilePhotos/Default0.jpg'
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
    
    <div className='flex justify-center mt-10'>
        <div className='flex justify-center items-center flex-col w-[50%] h-[50%] bg-secondary rounded-lg  shadow-sm shadow-white text-white p-10'>

          <div>
            <img src={DefaultProfile} alt="progile" className='w-[150px] rounded-full'></img>
          </div>
          <h2 className='text-[30px]'>{fname} {lname}</h2>
         <p>{email}</p>

         
         
         
     
        </div>
    </div>
  );
};

export default Profile;
