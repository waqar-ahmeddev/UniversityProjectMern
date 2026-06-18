import React from "react";

const About = () => {
  return (
    <section className="bg-[#F8FCF6] py-8 md:py-16 px-4 md:px-10">
      {/* Heading */}
      <div className="text-center">
        <h3 className="text-green-600 font-semibold text-lg">
          About Fresh Mart
        </h3>

        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mt-2">
          Bringing Freshness To Your Doorstep
        </h1>

        <p className="text-gray-500 mt-4 max-w-3xl mx-auto">
          Fresh Mart is dedicated to delivering farm-fresh groceries,
          fruits, vegetables, dairy products, and daily essentials
          directly to your home with speed, quality, and convenience.
        </p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center mt-8 md:mt-16">
        
        {/* Left */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e"
            alt="Fresh Grocery"
            className="rounded-3xl shadow-xl"
          />
        </div>

        {/* Right */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Why Choose Fresh Mart?
          </h2>

          <p className="text-gray-600 mt-4">
            We work directly with trusted farmers and suppliers
            to ensure that every product reaches you fresh,
            healthy, and affordable.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-5 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold text-green-600">
                5000+
              </h3>
              <p className="text-gray-500">Products</p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold text-green-600">
                10K+
              </h3>
              <p className="text-gray-500">Happy Customers</p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold text-green-600">
                30 Min
              </h3>
              <p className="text-gray-500">Fast Delivery</p>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-md">
              <h3 className="text-2xl font-bold text-green-600">
                100%
              </h3>
              <p className="text-gray-500">Fresh Quality</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;