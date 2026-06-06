import React from "react";

const Product = () => {
  const products = [
    {
      id: 1,
      name: "Fresh Apples",
      price: "$5.99",
      image:
        "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
    },
    {
      id: 2,
      name: "Bananas",
      price: "$3.49",
      image:
        "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmFuYW5hfGVufDB8fDB8fHww",
    },
    {
      id: 3,
      name: "Tomatoes",
      price: "$4.25",
      image:
        "https://images.unsplash.com/photo-1546094096-0df4bcaaa337",
    },
    {
      id: 4,
      name: "Milk",
      price: "$2.99",
      image:
        "https://images.unsplash.com/photo-1550583724-b2692b85b150",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Products</h1>

        <button className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700">
          + Add Product
        </button>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full object-cover"
            />

            <div className="p-4">
              <h2 className="text-lg font-semibold">
                {product.name}
              </h2>

              <p className="text-green-600 font-bold mt-2">
                {product.price}
              </p>

              <button className="w-full mt-4 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;