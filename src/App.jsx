import React from 'react'
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Header/Home';
import Categories from './components/Header/Categories';
import About from './components/Header/About';
import Contact from './components/Header/Contact';
import First from './components/Dashboard/First';

const App = () => {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Header /><Home /></>}/>
        <Route path="/categories" element={<><Header /><Categories /></>} />
        <Route path="/about" element={<><Header /><About /></>} />
        <Route path="/contact" element={<><Header /><Contact /></>} />
        <Route path="/first" element={<><First /></>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App