import React, { useEffect, useState } from 'react';
import './links.scss'

const Links = () => {
  return (
    <div className='links'>
      <h1>Helpful Links</h1>
      <div className="links-container">
        <div className="links-item">
          <div className="single-item">
          <a href="https://www.musictheory.net/" target="_blank"><img src="assets/theory.png" alt="" /></a>
          <h3>Music Theory</h3>
          </div>
          <div className="single-item">
          <a href="https://www.pianochord.org/" target="_blank"><img src="assets/chord.png" alt="" /></a>
          <h3>Piano Chords</h3></div>
          <div className="single-item">
          <a href="https://musescore.com/" target="_blank"><img src="assets/sheet.png" alt="" /></a>
          <h3>Sheet Music</h3></div>
          <div className="single-item">
          <a href="https://www.skillshare.com/blog/en/how-to-compose-music-a-step-by-step-guide/" target="_blank"><img src="assets/compose.png" alt="" /></a>
          <h3>Composing Music</h3></div>
          
        </div>
      </div>
    </div>
  )
}

export default Links