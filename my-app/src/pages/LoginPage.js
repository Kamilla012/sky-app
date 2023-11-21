import React, { useState } from "react";
import styles from "../style";
import { useNavigate } from "react-router-dom";

export default function LoginPage({ setUserInfo }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password);
    fetch("http://localhost:4000/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("Login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);

          // Use React Router's Navigate component to navigate to the Home page
          navigate("/");
        }
      });
  }

  return (
    <div className={`${styles.divForm}`}>
      <form className={`${styles.form}`} onSubmit={handleSubmit}>
        <h2 className={`${styles.h2}`}>Login</h2>
        <input
          type="text"
          placeholder="email"
          className={`${styles.inputForm}`}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="password"
          className={`${styles.inputForm}`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.buttonForm}>Login</button>
      </form>
    </div>
  );
}
