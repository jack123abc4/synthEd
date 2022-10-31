import React from "react";
import Nav from "../components/nav/Nav";
import Register from '../components/account/Register';


const Signup = () => {
  return (
    <div className="register-nav">

      <div className="section">
        <Register />
      </div>
    </div>
  );
};

export default Signup;