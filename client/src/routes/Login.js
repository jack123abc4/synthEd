import React from "react";
import Nav from "../components/nav/Nav";
import LoginPage from '../components/account/Login';


const Login = () => {
  return (
    <div className="login-nav">
      <Nav />
      <div className="section">
        <LoginPage />
      </div>
    </div>
  );
};

export default Login;
