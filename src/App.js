import './App.css';
import Home from './home/Home';
import Navbar from './navbar/Navbar';
import Offer from './offers/offer';
import Starting from './starting/Starting';
import Prices from './prices/Prices';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Erorr from './Erorr';

import Why from './home/Why';
import Ending from './Ending';
import OrderForm from './AllForms/OrderForm';
import ContactForm from './AllForms/Problem';

function App() {
  return (
    <BrowserRouter> {/* Move Navbar inside BrowserRouter */}
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/feedback' element={<ContactForm/>} />
          <Route path="/" element={<Home />} />
          <Route path="/offers" element={<Offer />} />
          <Route path="/prices" element={<Prices />} />
          <Route path='*' element={<Erorr />} />
          <Route path='/final' element={<OrderForm/>} />
        </Routes>
        <Why/>
        <br/><br/><br/>
        <Ending/>
      </div>
    </BrowserRouter>
  );
}

export default App;
