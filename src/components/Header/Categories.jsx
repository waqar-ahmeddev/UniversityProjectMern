import React from "react";

const Categories = () => {
  const categories = [
    {
      name: "Fresh Vegetables",
      icon: "🥬",
      items: "120+ Items",
    },
    {
      name: "Fresh Fruits",
      icon: "🍎",
      items: "80+ Items",
    },
    {
      name: "Dairy Products",
      icon: "🥛",
      items: "50+ Items",
    },
    {
      name: "Bakery",
      icon: "🍞",
      items: "40+ Items",
    },
    {
      name: "Beverages",
      icon: "🥤",
      items: "60+ Items",
    },
    {
      name: "Snacks",
      icon: "🍪",
      items: "90+ Items",
    },
  ];

  return (
    <section className="bg-white py-8 md:py-16 px-4 md:px-10\">
      {/* Heading */}
      <div className="text-center">
        <h3 className="text-green-600 font-semibold text-lg">
          Shop By Category
        </h3>

        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2 text-gray-800">
          Browse Our Categories
        </h1>

        <p className="text-gray-500 mt-3">
          Discover fresh groceries and daily essentials at the best prices.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-[#F7FAF5] p-4 md:p-6 lg:p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer"
          >
            <div className="text-5xl">{item.icon}</div>

            <h2 className="text-xl font-bold mt-4 text-gray-800">
              {item.name}
            </h2>

            <p className="text-gray-500 mt-2">{item.items}</p>

            <button className="mt-5 text-green-600 font-semibold">
              Explore →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;