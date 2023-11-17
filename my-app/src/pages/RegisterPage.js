import styles from "../style";
import { useState } from "react";

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [profileImage, setProfileImage] = useState(null)
    const ProfileImages = [
      { name: 'Default1', image: require('../images/profilePhotos/Default1.jpg') },
      { name: 'Default2', image: require('../images/profilePhotos/Default2.jpg') },
      { name: 'Default3', image: require('../images/profilePhotos/Default3.jpg') },
      { name: 'Default4', image: require('../images/profilePhotos/Default4.jpg') },
      { name: 'Default5', image: require('../images/profilePhotos/Default5.jpg') },
      { name: 'Default6', image: require('../images/profilePhotos/Default6.jpg') },
     
     
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
    const handleProfileImageClick = (index) => {
        setProfileImage((prevSelected) => (prevSelected === index ? null : index));
      };

    return (
        <div className={`${styles.divForm} bg-primary `}>
            <form onSubmit={register} className={`${styles.form}`}>
                <h2 className={`${styles.h2}`}>Register</h2>

                <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(ev) => setUsername(ev.target.value)}
                    className={`${styles.inputForm}`}
                />
                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                    className={`${styles.inputForm}`}
                />

                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(ev) => setPassword(ev.target.value)}
                    className={`${styles.inputForm}`}
                />

        <div className="flex flex-wrap justify-center bg-primar">
          {ProfileImages.map((profile, index) => (
            <img
              key={index}
              src={profile.image}
              alt={profile.name}
              onClick={() => handleProfileImageClick(index)}
                        className={`${styles.profileImage} ${
                            profileImage === index ? '' : 'opacity-60'
                        } w-[150px] m-2 rounded-full`}
            />
          ))}
        </div>
                
                <button className={styles.buttonForm}>Register</button>
            </form>
        </div>
    );
}
