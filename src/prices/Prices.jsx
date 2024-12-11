import React from 'react';
import './price.css';
import { useNavigate } from 'react-router-dom';

const Prices = () => {
  const navigate = useNavigate();

  const handleSelection = (service, code) => {
    alert(`You are choosing ${service}. CODE:${code}`);
    navigate('/final');
  };

  const services = [
    { name: 'website', price: 66.63, code: '0001' },
    { name: 'portfolio', price: 33.44, code: '0002' },
    { name: 'logo', price: 6.69, code: '0003' },
    { name: 'Login Form', price: 16.72, code: '0004' },
    { name: 'Normal Form', price: 16.72, code: '0005' },
    { name: 'poster', price: 5.02, code: '0006' },
  ];

  return (
    <div className="Prices">
      <h2>All of our services and prices:</h2>
      <ol>
        {services.map((service) => (
          <li key={service.code}>
            1 {service.name} is only ${service.price.toFixed(2)}{' '}
            <button onClick={() => handleSelection(service.name, service.code)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icon-tabler-shopping-bag-check"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M11.5 21h-2.926a3 3 0 0 1 -2.965 -2.544l-1.255 -8.152a2 2 0 0 1 1.977 -2.304h11.339a2 2 0 0 1 1.977 2.304l-.5 3.248" />
                <path d="M9 11v-5a3 3 0 0 1 6 0v5" />
                <path d="M15 19l2 2l4 -4" />
              </svg>
            </button>
          </li>
        ))}

<li>You will get an offer on your order!</li>
      </ol>
      
    </div>
  );
};

export default Prices;
