import React from 'react';
import './index.css';
import Home from './routes/Home';
import About from './routes/About';
import Account from './routes/Account';
import Piano from './routes/Piano';
import PianoRoll from './routes/PianoRoll';
import Resources from './routes/Resources';
import Login from './routes/Login';
import Register from './routes/Register';
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token");
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "/graphql",
});

function App() {
  const user = false;
  return (
    
    <ApolloProvider  client ={client}>
    <Router>
      <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/pianoRoll' element={<PianoRoll />} />
      <Route path='/piano' element={<Piano />} />
      <Route path='/resources' element={<Resources />} />
      <Route path='/account' element={user ? <Account /> : <Navigate to="/login" />}
          />
        <Route path='/register' element={<Register />} />
      <Route path='/about' element={<About />} />
      <Route path='/login' element={user ? <Navigate to="/account" /> : <Login />}
          />
    </Routes>  
    </>
    </Router>
    </ApolloProvider>
  );
}

export default App;