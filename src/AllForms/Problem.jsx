import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './problem.css';  // Make sure to import the CSS file
import Home from '../home/Home';

function ContactForm() {
  const [state, handleSubmit] = useForm("xrbgvayq");

  if (state.succeeded) {
     alert("Thanks")  
    return <Home/>;
  }

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
          placeholder='complain or feedback here'
            id="message"
            name="message"
            required
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <button type="submit" disabled={state.submitting}>
          {state.submitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
