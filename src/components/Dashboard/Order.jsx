import React from "react";

const Orders = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">📦 Orders</h1>

      <div className="bg-white rounded-xl shadow p-4">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th>ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="text-center">
              <td>#1001</td>
              <td>Ali</td>
              <td>Apple</td>
              <td className="text-green-600">Delivered</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;