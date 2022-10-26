import React from 'react';
import './login.scss';

const Login = () => {
  return (
    <div className='login'>
        <h1 className='loginTitle'>Choose a Login Method</h1>
        <div className="wrapper">
            <div className="left">
                <div className="loginBtn">
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
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='Password' />
                <button className='submit'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login