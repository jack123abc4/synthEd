import React from 'react';
import './index.css';
import Home from './routes/Home';
import About from './routes/About';
import Account from './routes/Account';
import Piano from './routes/Piano';
import PianoRoll from './routes/PianoRoll';
import Resources from './routes/Resources';
import Play from './routes/Play';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/pianoRoll' element={<PianoRoll />} />
      <Route path='/piano' element={<Piano />} />
      <Route path='/resources' element={<Resources />} />
      <Route path='/account' element={<Account />} />
      <Route path='/about' element={<About />} />
      <Route path='/play' element={<Play />} />
    </Routes>  
    </>
  );
}
export default App;