import axios from '../axios';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

const Reset = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [codeVerified, setCodeVerified] = useState(false);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleEmail = (e) => {
    e.preventDefault();
    console.log(email)
    axios
      .post("reset-password", {
        email: email,
      })
      .then((res) => setEmailSent(true))
      .catch((err) => console.log("Error", err));
  };
  const handleCode = (e) => {
    e.preventDefault();
    axios
      .post("verify-code", {
        password_code: code,
      })
      .then((res) => setCodeVerified(true))
      .catch((err) => console.log("Error", err));
  };
  const handlePassword = (e) => {
    e.preventDefault();
    axios
      .put("change-password", {
        password_code: code,
        email: email,
        password: newPassword,
      })
      .then((res) => navigate("/login"))
      .catch((err) => console.log("Error", err));
  };

  return (
    <div>
      <NavBar />
      <div
        style={{
          width: "200px",
          height: "auto",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <h1>Reset Passoword below</h1>
        
          <form onSubmit={handleEmail}>
            <input
              type="text"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        {emailSent &&
          <form onSubmit={handleCode}>
            <input
              type="text"
              placeholder="code"
              onChange={(e) => setCode(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        }
        {codeVerified && 
          <form onSubmit={handlePassword}>
            <input
              type="text"
              placeholder="new password"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        }
      </div>
    </div>
  );
};

export default Reset;
