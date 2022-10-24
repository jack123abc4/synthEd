import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div className='header'>
        <Link to='/'>
            <h1>SynthEd.</h1>
        </Link>
        <ul>
            <li>
               <Link to='/'>Home</Link> 
            </li>
            <li>
               <Link to='/pianoRoll'>Piano Roll</Link> 
            </li>
            <li>
               <Link to='/piano'>Piano</Link> 
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
    </div>
  )
}
