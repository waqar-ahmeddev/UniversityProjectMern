import React from 'react'
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Header/Home';
import Categories from './components/Header/Categories';
import About from './components/Header/About';
import Contact from './components/Header/Contact';

const App = () => {
  return (
  <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App