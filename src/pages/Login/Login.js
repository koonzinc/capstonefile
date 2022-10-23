import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import './Login.css';

export default function Login() {
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
            <div className="login">
              <p>Continue with Google.</p>
            </div>
            <div className="login">
              <p>Continue with Github.</p>
            </div>
            <div>
              <h2 id='or'>or</h2>
            </div>
            <div className='loginForm'>
              <form className='login-form' action="">
                <input className='login-inputs' type="email" placeholder='Email'/>
                <input className='login-inputs' type="password" placeholder='Password' />
                <button className='login-button' type='submit'>Log in</button>
              </form>
              <p style={{color: '#B6BDCB'}}>
                Don't have an account? <a href="#">Sign up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
