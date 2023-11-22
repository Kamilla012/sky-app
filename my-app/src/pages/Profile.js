import React, { useEffect } from 'react';
import axios from 'axios';

export default function Profile({ setUserInfo }) {
  useEffect(() => {
    fetch("http://localhost:4000/userdata", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        // Use setUserInfo or any other logic based on the API response
      });
  }, []); // Empty dependency array means this useEffect runs once after mount

  return (
    <div>
      {/* Add other fields you want to display */}
    </div>
  );
}
