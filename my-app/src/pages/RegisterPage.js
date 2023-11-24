import React, { useState } from "react";
import styles from "../style";
import RegistrationBackground from '../images/backgrounds/r1.jpg';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    fname: '',
    lname: '',
    password: '',
    email: '',
    profileImage: null,
  });

  const ProfileImages = [
    { name: 'Default1', path: require('../images/profilePhotos/Default1.jpg') },
    { name: 'Default2', path: require('../images/profilePhotos/Default2.jpg') },
    { name: 'Default3', path: require('../images/profilePhotos/Default3.jpg') },
    { name: 'Default4', path: require('../images/profilePhotos/Default4.jpg') },
    { name: 'Default5', path: require('../images/profilePhotos/Default5.jpg') },
    { name: 'Default6', path: require('../images/profilePhotos/Default6.jpg') },
  ];

  const register = async (ev) => {
    ev.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/register', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        alert('Registration successful');
      } else {
        alert('Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('An error occurred during registration');
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleProfileImageClick = (path) => {
    setFormData((prevData) => ({
      ...prevData,
      profileImage: prevData.profileImage === path ? null : path,
    }));
  };

  return (
    <div className="flex justify-center items-center">
      <div className={`${styles.divForm} bg-primary lg:w-[1000px] w-full`}>
        <div className="lg:{w-[40%] lg:block hidden w-[40%]">
          <img src={RegistrationBackground} className="w-full" alt="Registration Background" />
        </div>

        <form onSubmit={register} className={`${styles.form} lg:w-[60%] w-full`}>
          <h2 className={`${styles.h2}`}>Register</h2>

          <div className={`flex lg:flex-row lg:justify-between flex-col`}>
            <div className="">
              <p className={`${styles.p}`}>First name</p>
              <input
                type="text"
                placeholder="Enter your name"
                value={formData.fname}
                onChange={(ev) => handleInputChange('fname', ev.target.value)}
                className={`${styles.inputForm} w-full`}
              />
            </div>

            <div className="">
              <p className={`${styles.p}`}>Last name</p>
              <input
                type="text"
                placeholder="Enter your last name"
                value={formData.lname}
                onChange={(ev) => handleInputChange('lname', ev.target.value)}
                className={`${styles.inputForm} w-full`}
              />
            </div>
          </div>

          <p className={`${styles.p}`}>Username</p>
            <input
              type="text"
              placeholder="username"
              value={formData.username}
              onChange={(ev) => handleInputChange('username', ev.target.value)}
              className={`${styles.inputForm}`}
            />
  
            <p className={`${styles.p}`}>Email</p>
            <input
              type="email"
              placeholder="email"
              value={formData.email}
              onChange={(ev) => handleInputChange('email', ev.target.value)}
              className={`${styles.inputForm}`}
            />
  
            <p className={`${styles.p}`}>Password</p>
            <input
              type="password"
              placeholder="password"
              value={formData.password}
              onChange={(ev) => handleInputChange('password', ev.target.value)}
              className={`${styles.inputForm}`}
            />
  
{/*           
          <div className="flex flex-wrap justify-center bg-primar">
            {ProfileImages.map((profile) => (
              <img
                key={profile.name}
                src={profile.path}
                alt={profile.name}
                onClick={() => handleProfileImageClick(profile.path)}
                className={`${styles.profileImage} ${
                  formData.profileImage === profile.path ? '' : 'opacity-60'
                } w-[150px] m-2 rounded-full`}
              />
            ))}
          </div> */}

          <button className={styles.buttonForm}>Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
