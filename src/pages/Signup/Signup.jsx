import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "../../axios";
import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("signup", {
        email: email,
        password: password,
        user_name: username
      })

      .then((res) => {
        console.log("API response: ", res);
        navigate("/login");
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
            <h1 className="brand">goodstocks</h1>
            <div className="loginForm">
              <form className="login-form" action="" onSubmit={handleSubmit}>
                <input
                  className="login-inputs signup__inputs"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="login-inputs signup__inputs"
                  type="text"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  className="login-inputs signup__inputs"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="login-button" type="submit">
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
    // <>
    //   <NavBar />
    //   <div className="wrapper">
    //     <div className="container">
    //       <div className="content">
    //         <h1 className="brand">
    //           goodstocks
    //         </h1>
    //         <h2 className="statement">Create an account to continue.</h2>
    //         <form className="login-form" onSubmit={handleSubmit}>
    //           <input
    //             className="login-inputs"
    //             type="email"
    //             placeholder="Email"
    //             onChange={(e) => setEmail(e.target.value)}
    //           />
    //           <input
    //             className="login-inputs"
    //             type="password"
    //             placeholder="Password"
    //             onChange={(e) => setPassword(e.target.value)}
    //           />
    //           <button className="login-button" type="submit">
    //             Log in
    //           </button>
    //         </form>
    //         <p className="p1">
    //           Already have an account?
    //           <Link to="/login" replace>
    //             Log in.
    //           </Link>
    //         </p>
    //         <p className="p2">
    //           By signing up, you agree to our
    //           <br />
    //           <a>Terms of Service</a>, <a>Copyright Policy</a> and{" "}
    //           <a>Privacy Policy</a>
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
};

export default Signup;
