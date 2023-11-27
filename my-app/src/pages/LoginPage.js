import React, { useState } from "react";
import styles from "../style";
import { Navigate } from "react-router-dom";
import loginBackground from '../images/backgrounds/login.jpg'

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  async function login(ev) {
    ev.preventDefault();
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });

    if (response.ok) {
      const userInfo = await response.json();
      setUserInfo(userInfo);
      setRedirect(true);
    } else {
      alert('wrong credentials');
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />;
  }

  return (
    <div className="flex justify-center items-center">
      
    <div className={`${styles.divForm} justi bg-primary lg:w-[1000px] w-full` }>

    <div className="lg:{w-[40%] lg:block hidden w-[40%]">
        <img src={loginBackground} alt="login_background"></img>
      </div>

      <form className={`${styles.form} lg:w-[60%] w-full` } onSubmit={login}>
        <h2 className={`${styles.h2}`}>Login</h2>
        <input
          type="text"
          placeholder="username"
          className={`${styles.inputForm}`}
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />

        <input
          type="password"
          placeholder="password"
          className={`${styles.inputForm}`}
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button className={styles.buttonForm}>Login</button>
      </form>
    </div>
    </div>
  );
}
