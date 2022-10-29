import React, { useState } from "react";
import "./Signup.css";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://3000-areandd-capstonebackend-6zmt4au06vs.ws-us73.gitpod.io/signup",
        { email: email, password: password }
      )
      .then((res) => {
        console.log("API response: ", res);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // }

  // const handleSubmit = (e) => {
  //   e.prevent.Default();

  //   const url = 'https://3000-areandd-capstonebackend-qbuxdevyiqo.ws-us72.gitpod.io/signup';

  //   axios.post(url, {
  //     email: email,
  //     password: password
  //   })
  //     .then(response => response.data)
  //     .catch(error => console.log('Error'))
  // }

  return (
    <>
      <NavBar />
      <div className="wrapper">
        <div className="container">
          <div className="content">
            <h1 className="brand">
              <span className="logo">CS</span> Commonstock
            </h1>
            <h2 className="statement">Create an account to continue.</h2>
            <form className="login-form" onSubmit={handleSubmit}>
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
            <p className="p1">
              Already have an account?
              <Link to="/login" replace>
                Log in.
              </Link>
            </p>
            <p className="p2">
              By signing up, you agree to our
              <br />
              <a>Terms of Service</a>, <a>Copyright Policy</a> and{" "}
              <a>Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
