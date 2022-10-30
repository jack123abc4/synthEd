import React, { useState } from "react";
import "./login.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const googleLogin = () => {
    window.open("http://localhost:3000/auth/google", "_self")
  }
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const register = () => {
    axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "http://localhost:3000/register",
    }).then((res) => console.log(res));
  };
  return (
    <div className="login">
      <h1 className="login-title">Choose a Registration Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginBtn google" onClick={googleLogin}>
            <img src="assets/google.png" alt="" className="icon" /> Google
          </div>
          <div className="loginBtn">
            <img src="assets/facebook.png" alt="" className="icon" /> Facebook
          </div>
          <div className="loginBtn">
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
              onChange={(e) => setRegisterUsername(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
            <button type="submit" className="submit" onClick={register}>
              Register
            </button>
            <Link to="/login">
              <span>Have an account?</span> Login
            </Link>

        </div>
      </div>
    </div>
  );
};

export default Register;
