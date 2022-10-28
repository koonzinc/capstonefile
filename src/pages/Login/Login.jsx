import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://3000-areandd-capstonebackend-assxchiq8kz.ws-us73.gitpod.io/login",
        {
          email: email,
          password: password,
        }
      )
      .then((res) => {
        console.log("API response: ", res);
        localStorage.setItem("userToken", res.data);
        navigate("/profile-page");
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  return (
    <>
      <NavBar />
      <div className="wrapper">
        <div className="container">
          <div className="content">
            <h1 className="brand ">
              <span className="logo">CS</span> Commonstock
            </h1>
            <p className="p3">
              By continuing, you agree to our
              <br />
              <a>Terms of Service</a>, <a>Copyright Policy</a> and{" "}
              <a>Privacy Policy</a>
            </p>
            <div className="loginForm">
              <form className="login-form" action="" onSubmit={handleSubmit}>
                <input
                  className="login-inputs"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="login-inputs"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="login-button" type="submit">
                  Log in
                </button>
              </form>
              <p style={{ color: "#B6BDCB" }}>
                Don't have an account?
                <Link to="/signup" replace>
                  Sign up.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}