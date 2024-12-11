import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import "./navbar.css";

function Navbar() {
  const navigate = useNavigate(); // Hook for navigation

  const goToPrices = () => {
    navigate('/final'); // Navigate to the "/prices" route
  };

  const goToProblem = () => {
    navigate('/feedback'); // Navigate to the "/problem" route (if created)
  };

  return (
    <div className='Navbar'>
      <h1>Alpha T</h1>
      <button onClick={() => navigate('/')}>Home</button>
      <button onClick={() => navigate('/prices')}>Products</button>
      <button onClick={goToPrices}>Order!</button>
      <button onClick={goToProblem}>Problem?</button>
    </div>
  );
}

export default Navbar;
