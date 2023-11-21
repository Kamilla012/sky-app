import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "../style";
import { useNavigate } from "react-router-dom";

export default function Profile(){
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const navigate = useNavigate();
      
        function handleSubmit(e) {
          e.preventDefault();
      
          console.log(email, password);
          fetch("http://localhost:4000/userProfile", {
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
    <div>
        
    </div>
  );
};

