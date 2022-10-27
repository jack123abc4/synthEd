import React, { useState } from 'react';
import './login.scss';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
const [loginEmail, setLoginEmail] = useState("");
const [loginPassword, setLoginPassword] = useState("");
const login = () => {
    Axios({
      method: "POST",
      data: {
        email: loginEmail,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:3000/login",
    }).then((res) => console.log(res));
  };
  return (
    <div className='login'>
        <h1 className='login-title'>Choose a Login Method</h1>
        <div className="wrapper">
            <div className="left">
                <div className="loginBtn google" >
                    <img src="assets/google.png" alt="" className='icon'/> Google
                    </div>
                    <div className="loginBtn">
                    <img src="assets/facebook.png" alt="" className='icon'/> Facebook
                    </div>
                    <div className="loginBtn">
                    <img src="assets/twitterlogo.png" alt="" className='icon'/> Twitter
                    </div>
                </div>
                <div className="center">
                    <div className="divider" />
                        <div className="or">OR</div>
                </div>
            
            <div className="right">
                <input type="text" placeholder='Email' onChange={e => setLoginEmail(e.target.value)} />
                <input type="text" placeholder='Password'onChange={e => setLoginPassword(e.target.value)}  />
                <button className='submit' onClick={login}>Login</button>
                <Link to='/register'>New around here? Register</Link>
            </div>
        </div>
    </div>
  )
}

export default Login