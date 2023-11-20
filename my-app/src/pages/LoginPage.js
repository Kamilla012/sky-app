import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import styles from '../style';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  async function login(ev) {
    ev.preventDefault();
  
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });
  
      if (response.ok) {
        const { id, username, token } = await response.json();
  
        // Store the token in local storage
        localStorage.setItem('token', token);
  
        // Redirect to the profile page after successful login
        setRedirect(true);
      } else {
        alert('Wrong credentials');
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle other types of errors, e.g., network issues
    }
  }

  if (redirect) {
    // Redirect to the profile page
    return <Navigate to={'/profile'} />;
  }

  return (
    <div className={`${styles.divForm}`}>
      <form className={`${styles.form}`} onSubmit={login}>
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
        <button type="submit" className={styles.buttonForm}>
          Login
        </button>
      </form>
    </div>
  );
}
