import './hero.css';
import React, { useEffect, useRef } from 'react';
import { init } from 'ityped';
import { Link } from 'react-router-dom';


const Hero = () => {
    const textRef = useRef();
    useEffect(() => {
      init(textRef.current, { 
        showCursor: true, 
        backDelay: 1500,
        strings: ["Learn", "Create", "Play", "Share"] })
    }, []) 
  return (
    <div className="hero">
        <div class="muzieknootjes">
  <div class="noot-1">
  &#9835; &#9833;
</div>
<div class="noot-2">
  &#9833;
</div>
<div class="noot-3">
  &#9839; &#9834;
</div>
<div class="noot-4">
  &#9834;
</div>
</div>
        <div className="mask">
            <img className='hero-img' src='assets/thumb.png' />
            
        </div>
        <div className="content">
            
            <h1>SynthEd.</h1>
            <h3>
                Music to <span ref={textRef}></span>
            </h3>
        
        <div>
            <Link to="/account" className='btn'>Sign Up</Link>
            <Link to="/account" className='btn btn-light'>Login</Link>
        </div>
        </div>


</div>
  )
}

export default Hero