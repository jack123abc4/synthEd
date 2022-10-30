import React, { useState } from "react";
import "./login.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const googleLogin = () => {
    window.open("http://localhost:3000/auth/google", "_self")
  };
  const facebookLogin = () => {
    window.open("http://localhost:3000/auth/facebook", "_self")
  };
  const twitterLogin = () => {
    window.open("http://localhost:3000/auth/twitter", "_self")
  };
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const login = () => {
    axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:3000/login",
    }).then((res) => console.log(res));
  };
  return (
    <div className="login">
      <h1 className="login-title">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginBtn google" onClick={googleLogin}>
            <img src="assets/google.png" alt="" className="icon" /> Google
          </div>
          <div className="loginBtn" onClick={facebookLogin}>
            <img src="assets/facebook.png" alt="" className="icon" /> Facebook
          </div>
          <div className="loginBtn" onClick={twitterLogin}>
            <img src="assets/twitterlogo.png" alt="" className="icon" /> Twitter
          </div>
        </div>
        <div className="center">
          <div className="divider" />
          <div className="or">OR</div>
        </div>

        <div className="right">

            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) => setLoginUsername(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <button type="submit" className="submit" onClick={login}>
              Login
            </button>
            <Link to="/register">
              <span>New around here?</span> Register
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
