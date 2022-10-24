import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from '.'
import './index.css'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
              <Route 
                path="/play" 
                element={<Play />}
              />
              
              <Route 
                path="*"
                element={<NotFound />}
              />
            </Routes>
      </Router>
    </ApolloProvider>
  );
}
export default App;