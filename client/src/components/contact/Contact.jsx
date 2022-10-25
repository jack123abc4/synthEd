
import React, { useRef, useState } from "react";
import "./contact.scss";
import emailjs from 'emailjs-com';

export default function Contact() {
  return (
    <div className="contact">
      <div className="left">
        <img src="assets/email.png" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
      </div>
    </div>
  )
}
