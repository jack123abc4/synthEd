import React, { useState } from 'react';
import './login.scss';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const register = () => {
        Axios({
          method: "POST",
          data: {
            email: registerEmail,
            password: registerPassword,
          },
          withCredentials: true,
          url: "http://localhost:3000/register",
        }).then((res) => console.log(res));
      };
  return (
    <div className='login'>
        <h1 className='login-title'>Choose a Registration Method</h1>
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
                <input type="email" placeholder='Email' onChange={e => setRegisterEmail(e.target.value)} />
                <input type="password" placeholder='Password'onChange={e => setRegisterPassword(e.target.value)}  />
                <button className='submit' onClick={register}>Register</button>
                <Link to='/login'>Have an account? Login</Link>
            </div>
        </div>
    </div>
  )
}

export default Register;