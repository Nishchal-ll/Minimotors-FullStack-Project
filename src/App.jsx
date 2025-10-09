import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext/CartContext';
import Homepage from './components/HomeMainPage/Homepage'
import About from './components/AboutMainPage/About'
import Contact from './components/ContactMainPage/Contact'
import Shop from './components/ShopPageMain/Shop'
import Account from './components/Account/Account';

function App() {
  return (
    <CartProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
    </CartProvider>
  );
}
export default App;
