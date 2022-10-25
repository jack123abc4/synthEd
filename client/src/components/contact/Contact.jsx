
import { useRef, useState } from "react";
import "./contact.scss";
import emailjs from 'emailjs-com';


export default function Contact() {
  const formRef = useRef();
  const [done, setDone] =useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_oel3aem', 'template_rz0wwlw', formRef.current, 'uOEZu1fDeZRQbIEq6')
    .then((result) => {
        console.log(result.text);
        e.target.reset()
        setDone(true)
    }, (error) => {
        console.log(error.text);
    });
  }
  return (
<div className="c">
  <div className="c-bg"></div>
  <div className="c-wrapper">
    <div className="c-left">
    <h1 className="c-title">Let's discuss your journey!</h1>
    </div>
    <div className="c-right">
      <p className="c-desc">
        <b>What's your story?</b> Get in touch! We'd love to hear from you.
      </p>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="user_name" />
        <input type="text" placeholder="Subject" name="user_subject" />
        <input type="text" placeholder="Email" name="user_email" />
        <textarea rows="5" placeholder="Message" name="message" />
        <button>Submit</button>
        {done && "Thank you...We'll be in touch!"}
      </form>
    </div>
  </div>
</div>
  )
}