import React from "react";

const products = [
  {
    id: 1,
    name: "Fresh Tomato",
    price: 120,
    image: "https://cdn-icons-png.flaticon.com/512/590/590685.png",
  },
  {
    id: 2,
    name: "Banana",
    price: 80,
    image: "https://cdn-icons-png.flaticon.com/512/590/590685.png",
  },
  {
    id: 3,
    name: "Milk",
    price: 110,
    image: "https://cdn-icons-png.flaticon.com/512/2674/2674505.png",
  },
  {
    id: 4,
    name: "Potato",
    price: 70,
    image: "https://cdn-icons-png.flaticon.com/512/2909/2909894.png",
  },
  {
    id: 5,
    name: "Onion",
    price: 60,
    image: "https://cdn-icons-png.flaticon.com/512/7016/7016790.png",
  },
  {
    id: 6,
    name: "Apple",
    price: 200,
    image: "https://cdn-icons-png.flaticon.com/512/415/415733.png",
  },
];

const Home = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      {/* Top Section */}
      <div className="grid grid-cols-4 gap-5">

        {/* Banner */}
        <div className="col-span-3 bg-[#EAF7E8] rounded-2xl p-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-green-800">
              Big Savings on
              <br />
              Fresh Groceries
            </h1>

            <p className="text-2xl font-semibold mt-4">
              Up to 30% OFF
            </p>

            <button className="mt-5 bg-green-600 text-white px-6 py-2 rounded-lg">
              Shop Now
            </button>
          </div>

          <img
            src="https://png.pngtree.com/png-clipart/20241121/original/pngtree-supermarket-shopping-basket-png-image_17283317.png"
            alt=""
            className="h-48 object-contain"
          />
        </div>

        {/* Right Cards */}
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-bold">Free Delivery</h3>
            <p className="text-gray-500 text-sm">
              On orders above Rs.999
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow">
            <h3 className="font-bold">10 Minutes</h3>
            <p className="text-gray-500 text-sm">
              Delivery Time
            </p>
          </div>

          <div className="bg-yellow-50 p-4 rounded-xl shadow">
            <h3 className="font-bold">
              Deals of the Day
            </h3>
            <p className="text-gray-500 text-sm">
              Grab Best Offers
            </p>
          </div>
        </div>

      </div>

      {/* Popular Products */}
      <div className="mt-8 flex justify-between items-center">
        <h2 className="text-2xl font-bold">
          Popular Products
        </h2>

        <button className="text-green-600 font-semibold">
          View All →
        </button>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-6 gap-5 mt-5">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt=""
              className="h-28 mx-auto object-contain"
            />

            <h3 className="font-semibold mt-3">
              {item.name}
            </h3>

            <p className="text-gray-500 text-sm">
              1 kg
            </p>

            <p className="font-bold mt-2">
              Rs. {item.price}
            </p>

            <button className="w-full mt-3 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Home;