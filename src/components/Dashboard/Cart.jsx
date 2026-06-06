import React from "react";

const Cart = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">🛍 Cart</h1>

      <div className="bg-white p-5 rounded-xl shadow">
        <h2 className="font-bold">Apple</h2>
        <p>Quantity: 2</p>
        <p className="text-green-600">$20</p>
      </div>
    </div>
  );
};

export default Cart;