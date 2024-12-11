import React from 'react';
import Navbar from '../navbar/Navbar';
import Starting from '../starting/Starting';
import Offer from '../offers/offer';

import Why from './Why';

function Home() {
  return (
    <div>
      <br /><br /><br />
      <Starting/>
      <br /><br /><br />
      <Offer/>
      <br /><br/><br/>
    </div>
  )
}

export default Home