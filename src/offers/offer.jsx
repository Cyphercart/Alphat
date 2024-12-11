import React from 'react'
import './offer.css'

const Offer = () => {
   const validation = 'Valid till 31 december!'
  return (
    <div className='offer'>
      <div className="offer-1">
         <h2>Combo 1</h2>
         <li>1 portfolio (33.46)</li>
         <li>Free customizationc (0$)</li>
         <p>save 10% and give 31$</p>
         <h5>{validation}</h5>
         <br />
        <a href='/final'> <button>Order!</button></a>
      </div>
      <div className="offer-2">
         <h2>WebCombo</h2>
         <li>1 website (66.92)</li>
         <li>1 logo (7$)</li>
         <li>1 login form (16.73)</li>
         <p>Save 20% and give 60.04$</p>
         <h5>{validation}</h5>
         <br />
         <a href='/final'> <button>Order!</button></a>
      </div>

      <div className="ovrall">
         <h2>Our overall prices</h2>
         <li>1 website - 66.92 dollars</li>
         <li>1 logo - 7 dollars</li>
         <li>1 login-form - 16.73 dollars</li>
         <li><a href='/prices'>more details.......</a></li>
      </div>
    </div>
  )
}

export default Offer