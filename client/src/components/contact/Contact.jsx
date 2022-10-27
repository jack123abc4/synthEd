
import React, { useRef, useState } from "react";
import "./contact.scss";
import emailjs from 'emailjs-com';

export default function Contact() {
  const formRef = useRef();
  const [done, setDone] =useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_oel3aem', 'template_ge6pxgy', formRef.current, 'uOEZu1fDeZRQbIEq6')
    .then((result) => {
        console.log(result.text);
        e.target.reset()
        setDone(true)
    }, (error) => {
        console.log(error.text);
    });
  }
  return (
    <div className="contact">
      <div className="line"></div>
      <div className="contact-wrapper">
      <div className="left">

        <div className="party">
      <div className="wave-container">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
    </div>
    </div>
      </div>
      <div className="right">
        <p className="contact-info">
          <b>What's your tune?</b> Contact us below with any questions, comments, or just to say, "What's up?"!
        </p>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" placeholder="Name..." name="name" />
          <input type="text" placeholder="Email..." name="email" />
          <input type="text" placeholder="Subject..." name="subject" />
          <textarea rows="10" placeholder="Type your message here..." name="message" />
          <button type="submit">Submit</button>
          <div className="thanks">
          {done && "Thank you...We'll be in touch!"}
          </div>
        </form>
      </div>
      </div>
    </div>
  )
}
