import React from 'react';
import Nav from '../components/nav/Nav';
import Story from '../components/story/Story';
import Login from '../components/account/Login'



const Account = () => {
  return <div className='account-nav'>
    <Nav />
    <div className='section'>
      <Story />
      <Login />

      </div>
      </div>
}

export default Account
