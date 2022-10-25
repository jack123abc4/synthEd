import React, { useState } from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';


const Nav = () => {
   const [click, setClick] = useState(false);
   const handleClick = () => setClick(!click);
  return (
    <div className='nav'>
        <Link to='/'>
            <h1>SynthEd.</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
               <Link to='/'>Home</Link> 
            </li>
            {/* <li>
               <Link to='/pianoRoll'>Piano Roll</Link> 
            </li> */}
            <li>
               <Link to='/piano'>Piano Player</Link> 
            </li>
            <li>
               <Link to='/resources'>Resources</Link> 
            </li>
            <li>
               <Link to='/account'>Account</Link> 
            </li>
            <li>
               <Link to='/about'>About Us</Link> 
            </li>
        </ul>
         <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: 'white'}} />) : (<FaBars size={20} style={{color: 'white'}} />)}
            
            
         </div>
    </div>
  )
}

export default Nav
