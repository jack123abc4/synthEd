import React from 'react';
import Nav from '../components/nav/Nav';
import Resource from '../components/resources/Resources';
import Links from '../components/resources/Links';
import VideoSearch from '../components/resources/Videos';

const Resources = () => {
  return <div className='resource-page'>
    <Nav />
    <Resource />
    <Links />
    <VideoSearch />
  </div>
}

export default Resources
