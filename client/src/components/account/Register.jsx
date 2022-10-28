import React from 'react';


const Register = () => {


  return (
    <div className="login">
      <h1 className="login-title">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginBtn google">
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
        <input type="email" placeholder='Email' onChange={e => setLoginEmail(e.target.value)} />
                <input type="password" placeholder='Password'onChange={e => setLoginPassword(e.target.value)}  />
                <button className='submit' onClick={register}>Register</button>
                <Link to='/register'><span>Already registered?</span> Login</Link>
    </div>
    </div>
    </div>
  )
}

export default Register
