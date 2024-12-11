import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './orderform.css'
import Home from '../home/Home';

function OrderForm() {
  const [state, handleSubmit] = useForm("mpwzejjz");

  if (state.succeeded) {
     alert("Your Order is Confirmed. Thanks for choosing us") 
     return <Home />
}

  return (
    <div className="form">
      <br /><br />
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

      <label htmlFor="product">
        Select Product
      </label>
      <select id="product" name="product">
        <option value="logo">Logo</option>
        <option value="poster">Poster</option>
        <option value="loginform">Login Form</option>
        <option value="normalform">Normal Form</option>
        <option value="website">Website</option>
        <option value='webcombo'>Web Combo</option>
        <option value='combo-1'>COMBO 1</option>
      </select>
      
      <label htmlFor="country">
        Country
      </label>
      <input
        id="country"
        type="text" 
        name="country"
      />
      <label htmlFor='code'>COde of the Item</label>
      <input id='code'  type="text" name='code'/>
      <ValidationError 
        prefix="Country" 
        field="country"
        errors={state.errors}
      />
      
      <label htmlFor="mobile">
        Mobile Number
      </label>
      <input
        id="mobile"
        type="tel" 
        name="mobile"
      />
      <ValidationError 
        prefix="Mobile" 
        field="mobile"
        errors={state.errors}
      />

      {/* Hide the message field */}
      {/* 
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      */}

      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    <br /><br />
    </div>
  );
}

export default OrderForm;
