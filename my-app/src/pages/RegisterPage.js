import styles from "../style";
import { useState } from "react";
import RegistrationBackground from '../images/backgrounds/r1.jpg'

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState(null);

  const ProfileImages = [
    { name: 'Default1', path: require('../images/profilePhotos/Default1.jpg') },
    { name: 'Default2', path: require('../images/profilePhotos/Default2.jpg') },
    { name: 'Default3', path: require('../images/profilePhotos/Default3.jpg') },
    { name: 'Default4', path: require('../images/profilePhotos/Default4.jpg') },
    { name: 'Default5', path: require('../images/profilePhotos/Default5.jpg') },
    { name: 'Default6', path: require('../images/profilePhotos/Default6.jpg') },
  ];

  async function register(ev) {
    ev.preventDefault();

    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify({ username, email, password, profileImage }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.status === 200) {
      alert('Registration successful');
    } else {
      alert('Registration failed');
    }
  }

  const handleProfileImageClick = (path) => {
    setProfileImage((prevSelectedPath) => (prevSelectedPath === path ? null : path));
  };

  return (
    <div className={`flex justify-center items-center`}>
    <div className={`${styles.divForm} bg-primary w-[60%]` }>
    <div className="w-[40%]">

         <img src={RegistrationBackground} className="w-full " alt="Registration Background" />
    </div>

      <form onSubmit={register} className={`${styles.form} w-[60%]`}>
        <h2 className={`${styles.h2}`}>Register</h2>

        <p className={`${styles.p}`}>First name</p>
        <input
          type="text"
          placeholder="Enter your name"
          value={fname}
          onChange={(ev) => setFname(ev.target.value)}
          className={`${styles.inputForm}`}
        />

        
        <p className={`${styles.p}`}> Last name</p>
        <input
          type="text"
          placeholder="Enter your name last"
          value={lname}
          onChange={(ev) => setLname(ev.target.value)}
          className={`${styles.inputForm}`}
        />

        <p className={`${styles.p}`}>Username</p>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
          className={`${styles.inputForm}`}
        />

        <p className={`${styles.p}`}>Email</p>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
          className={`${styles.inputForm}`}
        />

        <p className={`${styles.p}`}>Password</p>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          className={`${styles.inputForm}`}
        />

        {/* <div className="flex flex-wrap justify-center bg-primar">
          {ProfileImages.map((profile) => (
            <img
              key={profile.name}
              src={profile.path}
              alt={profile.name}
              onClick={() => handleProfileImageClick(profile.path)}
              className={`${styles.profileImage} ${
                profileImage === profile.path ? '' : 'opacity-60'
              } w-[150px] m-2 rounded-full`}
            />
          ))}
        </div> */}

        <button className={styles.buttonForm}>Register</button>
      </form>
    </div>
    </div>
  );
}
