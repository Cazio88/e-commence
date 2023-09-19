import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Blog from './pages/Blog'; 
import Cart from './pages/Cart';
import Contact from './pages/Contact'; 
import Products from './pages/Products';
import Shop from './pages/Shop'; 
import About from './pages/About'; 

function Routing() {
  return (
    <Routes>
      <Route path="/HomePage" element={<HomePage />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/Shop" element={<Shop />} />
      <Route path="/About" element={<About />} />
    </Routes>
  )
}

export default Routing;