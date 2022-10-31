import React from 'react';
import Nav from '../components/nav/Nav';
import AboutHero from '../components/about/AboutHero';
import Story from '../components/story/Story';
import Testimonials from '../components/testimonials/Testimonials';
import Contact from '../components/contact/Contact';


const About = () => {
  return <div className='about-nav'>

    <AboutHero />
    <div className='section'>
      <Story />
      <Testimonials />
      <Contact />
      </div>
      </div>
}

export default About
