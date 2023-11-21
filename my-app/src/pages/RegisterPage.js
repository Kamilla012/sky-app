import styles from "../style";
import { useState } from "react";

export default function RegisterPage() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profileImage, setProfileImage] = useState(null);

    const ProfileImages = [
        { name: 'Default1', path: require('../images/profilePhotos/Default1.jpg') },
        { name: 'Default2', path: require('../images/profilePhotos/Default2.jpg') },
        { name: 'Default3', path: require('../images/profilePhotos/Default3.jpg') },
        { name: 'Default4', path: require('../images/profilePhotos/Default4.jpg') },
        { name: 'Default5', path: require('../images/profilePhotos/Default5.jpg') },
        { name: 'Default6', path: require('../images/profilePhotos/Default6.jpg') },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // W tym miejscu możesz używać fname, lname, username, email, password, profileImage
        console.log("Form submitted:", { fname, lname, username, email, password, profileImage });
        fetch("http://localhost:4000/register",{
            
                method: "POST",
                crossDomain: true,
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                  "Access-Control-Allow-Origin": "*",
                },   
                body: JSON.stringify({
                    fname,
                    lname,
                    username,
                    email,
                    password,
                    profileImage
                  }),
        })


        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            alert("Registration Successful");
          } else {
            alert("Something went wrong");
          }
        });
    };

    const handleProfileImageClick = (path) => {
        setProfileImage((prevSelected) => (prevSelected === path ? null : path));
    };

    return (
        <div className={`${styles.divForm} bg-primary`}>
            <form onSubmit={handleSubmit} className={`${styles.form}`}>
                <h2 className={`${styles.h2}`}>Register</h2>

                <input
                    type="text"
                    placeholder="name"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    className={`${styles.inputForm}`}
                />

                <input
                    type="text"
                    placeholder="lastname"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                    className={`${styles.inputForm}`}
                />
                <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={`${styles.inputForm}`}
                />
                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`${styles.inputForm}`}
                />

                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`${styles.inputForm}`}
                />

                <div className="flex flex-wrap justify-center bg-primar">
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
                </div>

                <button className={styles.buttonForm} type="submit">Register</button>
            </form>
        </div>
    );
}
