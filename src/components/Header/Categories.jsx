import React from "react";

const Categories = () => {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-green-600">
        Categories
      </h1>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-green-100 p-5 rounded-lg">🥬 Vegetables</div>
        <div className="bg-green-100 p-5 rounded-lg">🍎 Fruits</div>
        <div className="bg-green-100 p-5 rounded-lg">🥛 Dairy</div>
        <div className="bg-green-100 p-5 rounded-lg">🍞 Bakery</div>
      </div>
    </div>
  );
};

export default Categories;