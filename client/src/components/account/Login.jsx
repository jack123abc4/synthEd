import React, { useState } from "react";
import "./login.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const googleLogin = () => {
    window.open("https://synthed.herokuapp.com/auth/google", "_self")
  };
  const githubLogin = () => {
    window.open("https://synthed.herokuapp.com/auth/github", "_self")
  };
  const twitterLogin = () => {
    window.open("https://synthed.herokuapp.com/auth/twitter", "_self")
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
      url: "https://synthed.herokuapp.com/login",
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
          <div className="loginBtn" onClick={githubLogin}>
            <img src="assets/github.png" alt="" className="icon" /> Github
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
