import React from "react";

const Customers = () => {
  return (
    <div className="p-3 md:p-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">👥 Customers</h1>

      <div className="bg-white p-4 md:p-5 rounded-xl shadow">
        <div className="flex flex-col sm:flex-row sm:justify-between border-b pb-3 gap-2\">
          <span className="font-medium\">Ahmed</span>
          <span className="text-gray-600 text-sm sm:text-base\">20 Orders</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-between pt-3 gap-2\">
          <span className="font-medium\">Waqar</span>
          <span className="text-gray-600 text-sm sm:text-base\">15 Orders</span>
        </div>
      </div>
    </div>
  );
};

export default Customers;