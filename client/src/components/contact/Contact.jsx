
import React, { useRef, useState } from "react";
import "./contact.scss";
import emailjs from 'emailjs-com';

export default function Contact() {
  return (
    <div className="contact">
      <div className="line"></div>
      <div className="contact-wrapper">
      <div className="left">
        <h1 className="contact-intro">Share your musical journey</h1>
        <div className="emailContainer">
        <img src="assets/email.png" alt="" />
      </div>
      </div>
      <div className="right">
        <p className="contact-info">
          <b>What's your tune?</b> Contact us below with any questions, comments, or just to say, "What's up?"!
        </p>
        <form>
          <input type="text" placeholder="Name..." name="name" />
          <input type="text" placeholder="Email..." name="email" />
          <input type="text" placeholder="Subject..." name="subject" />
          <textarea rows="10" placeholder="Type your message here..." name="message" />
          <button type="submit">Submit</button>
        </form>
      </div>
      </div>
    </div>
  )
}
