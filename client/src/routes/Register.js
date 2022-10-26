import React from "react";
import Nav from "../components/nav/Nav";
import Register from '../components/account/git';


const Signup = () => {
  return (
    <div className="register-nav">
      <Nav />
      <div className="section">
        <Register />
      </div>
    </div>
  );
};

export default Signup;