import React from "react";

const Customers = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">👥 Customers</h1>

      <div className="bg-white p-5 rounded-xl shadow">
        <div className="flex justify-between border-b pb-3">
          <span>Ahmed</span>
          <span>20 Orders</span>
        </div>

        <div className="flex justify-between pt-3">
          <span>Waqar</span>
          <span>15 Orders</span>
        </div>
      </div>
    </div>
  );
};

export default Customers;