import React from 'react';
import './index.css';
import Home from './routes/Home';
import About from './routes/About';
import Account from './routes/Account';
import Piano from './routes/Piano';
import PianoRoll from './routes/PianoRoll';
import Resources from './routes/Resources';
// import { ApolloProvider } from "@apollo/react-hooks";
// import ApolloClient from "apollo-boost";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Play from './routes/Play';
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
      <Route path='/play' element={<Play />} />
    </Routes>  
    </>
    </Router>
    </ApolloProvider>
  );
}
export default App;