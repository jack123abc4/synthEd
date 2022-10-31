import React, { useState } from "react";
import "./login.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const Register = () => {
  const googleLogin = () => {
    window.open("https://synthed.herokuapp.com/auth/google", "_self")
  };
  const githubLogin = () => {
    window.open("https://synthed.herokuapp.com/auth/github", "_self")
  };
  const twitterLogin = () => {
    window.open("https://synthed.herokuapp.com/auth/twitter", "_self")
  };
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const register = () => {
    const data = {
      username: registerUsername,
      email: registerEmail,
      password: registerPassword,
    }
    console.log(data);
    axios.post("https://synthed.herokuapp.com/register", data).then(
      res => {
        console.log(res)
      }
    ).catch(
      err => {
        console.log(err);
      }
    )
  //   axios({
  //     data: {
  //       username: registerUsername,
  //       email: registerEmail,
  //       password: registerPassword,
  //     },
  //     withCredentials: true,
  //     url: "https://synthed.herokuapp.com/register",
  //   }).then((res) => console.log(res));
  };
  return (
    <div className="login">
      <h1 className="login-title">Choose a Registration Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginBtn google" onClick={googleLogin}>
            <img src="assets/google.png" alt="" className="icon" /> Google
          </div>
          <div className="loginBtn" onClick={githubLogin}>
            <img src="assets/github.png" alt="" className="icon" /> Github
          </div>
          <div className="loginBtn">
            <img src="assets/twitterlogo.png" alt="" className="icon" onClick={twitterLogin} /> Twitter
          </div>
        </div>
        <div className="center">
          <div className="divider" />
          <div className="or">OR</div>
        </div>


        <div className="right">
          <form>
            <div className="form-group">
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={(e) => setRegisterUsername(e.target.value)}
            />
            </div>
            <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
            </div>
            <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
            </div>
            </form>
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
