import React from 'react';
import Nav from '../components/nav/Nav';
import Resource from '../components/resources/Resources';
import Search from '../components/resources/Search';
import Videos from '../components/resources/Videos';

const Resources = () => {
  return <div>
    <Nav />
    <Resource />
    <Search />
    <Videos />
  </div>
}

export default Resources
