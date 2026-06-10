import React from 'react'
import Header from './components/Header/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { CartProvider } from './components/Header/CartContext'

import Home from './components/Header/Home'
import Categories from './components/Header/Categories'
import About from './components/Header/About'
import Contact from './components/Header/Contact'
import Prduct from './components/Header/Prduct'
import Dashboard from './components/Dashboard/Dashboard'
import CardSwap from './components/Header/CardSwap'

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<><Header /><Home /></>} />
          <Route path="/categories" element={<><Header /><Categories /></>} />
          <Route path="/about" element={<><Header /><About /></>} />
          <Route path="/contact" element={<><Header /><Contact /></>} />
          <Route path="/prduct" element={<><Header /><Prduct /></>} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/cartSwap" element={<CardSwap />} />

        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App