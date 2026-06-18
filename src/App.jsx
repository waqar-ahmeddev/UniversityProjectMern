// import React from 'react';
// import Header from './components/Header/Header';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { CartProvider } from './components/Header/CartContext';

// import Home from './components/Header/Home';
// import Categories from './components/Header/Categories';
// import About from './components/Header/About';
// import Contact from './components/Header/Contact';
// import Product from './components/Header/Product';
// import Dashboard from './components/Dashboard/Dashboard';
// import CardSwap from './components/Header/CardSwap';

// const App = () => {
//   return (
//     <CartProvider>
//       <BrowserRouter>
//         <Routes>

//           {/* HOME */}
//           <Route path="/" element={<><Header /><Home /></>} />

//           {/* CATEGORIES */}
//           <Route path="/categories" element={<><Header /><Categories /></>} />

//           {/* ABOUT */}
//           <Route path="/about" element={<><Header /><About /></>} />

//           {/* CONTACT */}
//           <Route path="/contact" element={<><Header /><Contact /></>} />

//           {/* PRODUCT (IMPORTANT) */}
//           <Route path="/product" element={<><Header /><Product /></>} />

//           {/* DASHBOARD */}
//           <Route path="/dashboard/*" element={<Dashboard />} />

//           {/* CARD SWAP */}
//           <Route path="/cartSwap" element={<CardSwap />} />

//         </Routes>
//       </BrowserRouter>
//     </CartProvider>
//   );
// };

// export default App;
import React from 'react';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CartProvider } from './components/Header/CartContext';

import Home from './components/Header/Home';
import Categories from './components/Header/Categories';
import About from './components/Header/About';
import Contact from './components/Header/Contact';
import Product from './components/Header/Product';
import Dashboard from './components/Dashboard/Dashboard';
import CardSwap from './components/Header/CardSwap';

const App = () => {
  return (
    <CartProvider>
      {/* 👈 Yahan basename add kiya hai */}
      <BrowserRouter basename="/UniversityProjectMern"> 
        <Routes>

          {/* HOME */}
          <Route path="/" element={<><Header /><Home /></>} />

          {/* CATEGORIES */}
          <Route path="/categories" element={<><Header /><Categories /></>} />

          {/* ABOUT */}
          <Route path="/about" element={<><Header /><About /></>} />

          {/* CONTACT */}
          <Route path="/contact" element={<><Header /><Contact /></>} />

          {/* PRODUCT (IMPORTANT) */}
          <Route path="/product" element={<><Header /><Product /></>} />

          {/* DASHBOARD */}
          <Route path="/dashboard/*" element={<Dashboard />} />

          {/* CARD SWAP */}
          <Route path="/cartSwap" element={<CardSwap />} />

        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;