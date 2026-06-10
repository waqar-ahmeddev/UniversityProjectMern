import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import Product from "./Product";
import Order from "./Order";
import Cart from "./Cart";
import Customer from "./Customer";
import Setting from "./Setting";

const Dashboard = () => {
  return (
    <div>
      <Sidebar />

      <div className="ml-64">
        <Header />

        {/* Content Area */}
        <div className="mt-20 p-6 min-h-screen bg-gray-100">
          <Routes>
            <Route index element={<Home />} />
            <Route path="products" element={<Product />} />
            <Route path="orders" element={<Order />} />
            <Route path="cart" element={<Cart />} />
            <Route path="customers" element={<Customer />} />
            <Route path="settings" element={<Setting />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
