import React, { useEffect, useState } from 'react';
import './index.scss';
import Home from './routes/Home';
import About from './routes/About';
import Account from './routes/Account';
import Piano from './routes/Piano';
import Resources from './routes/Resources';
import Register from './routes/Register';
import Login from './routes/Login';
import Nav from './components/nav/Nav';
import Play from './routes/Play';

// import { ApolloProvider } from "@apollo/react-hooks";
// import ApolloClient from "apollo-boost";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// const client = new ApolloClient({
//   request: (operation) => {
//     const token = localStorage.getItem("id_token");
//     operation.setContext({
//       headers: {
//         authorization: token ? `Bearer ${token}` : "",
//       },
//     });
//   },
//   uri: "/graphql",
// });
const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache(),
});


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
  const getUser = () => {
    fetch("https://synthed.herokuapp.com/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        throw new Error("Authentication has failed!");
      })
      .then((resObject) => {
        setUser(resObject.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getUser();
}, []);
  return (
    
    <ApolloProvider  client={client}>
    <Router>
      <>
      <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/piano' element={<Piano />} />
      <Route path='/resources' element={<Resources />} />
      <Route path='/account' element={user ? <Account /> : <Navigate to='/login' />} />
      <Route path='/login' element={user ? <Navigate to='/account'/> : <Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/about' element={<About />} />
      <Route path='/play' element={<Play />} />
    </Routes>  
    </>
    </Router>
    </ApolloProvider>
  );
}
export default App;