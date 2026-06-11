// import React, { useState, createContext, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// // ─── CART CONTEXT ─────────────────────────────
// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState({});

//   const addToCart = (id) =>
//     setCart((prev) => ({
//       ...prev,
//       [id]: (prev[id] || 0) + 1,
//     }));

//   const changeQty = (id, delta) =>
//     setCart((prev) => {
//       const newQty = (prev[id] || 0) + delta;

//       if (newQty <= 0) {
//         const updated = { ...prev };
//         delete updated[id];
//         return updated;
//       }

//       return { ...prev, [id]: newQty };
//     });

//   const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);

//   const totalPrice = (products) =>
//     Object.entries(cart).reduce((sum, [id, qty]) => {
//       const p = products.find((x) => x.id === parseInt(id));
//       return sum + (p ? p.price * qty : 0);
//     }, 0);

//   return (
//     <CartContext.Provider
//       value={{ cart, addToCart, changeQty, totalItems, totalPrice }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);

// // ─── PRODUCTS DATA ─────────────────────────────
// export const products = [
//   { id: 1, name: "Organic Apples", category: "fruits", catLabel: "Fruits", emoji: "🍎", price: 320, oldPrice: 400, rating: 5, organic: true },
//   { id: 2, name: "Fresh Spinach", category: "veggies", catLabel: "Vegetables", emoji: "🥬", price: 120, oldPrice: null, rating: 4, organic: true },
//   { id: 3, name: "Whole Milk 1L", category: "dairy", catLabel: "Dairy", emoji: "🥛", price: 180, oldPrice: null, rating: 5, organic: false },
//   { id: 4, name: "Ripe Bananas", category: "fruits", catLabel: "Fruits", emoji: "🍌", price: 150, oldPrice: 200, rating: 4, organic: false },
//   { id: 5, name: "Sourdough Bread", category: "bakery", catLabel: "Bakery", emoji: "🍞", price: 280, oldPrice: null, rating: 5, organic: true },
//   { id: 6, name: "Avocado", category: "fruits", catLabel: "Fruits", emoji: "🥑", price: 450, oldPrice: 520, rating: 5, organic: true },
//   { id: 7, name: "Cheddar Cheese", category: "dairy", catLabel: "Dairy", emoji: "🧀", price: 390, oldPrice: null, rating: 5, organic: false },
//   { id: 8, name: "Bell Pepper", category: "veggies", catLabel: "Vegetables", emoji: "🫑", price: 190, oldPrice: 240, rating: 4, organic: true },
// ];

// // ─── CARD COMPONENT ─────────────────────────────
// // ─── CARD COMPONENT ─────────────────────────────
// const ProductCard = ({ product }) => {
//   const { cart, addToCart, changeQty } = useCart();
//   const qty = cart[product.id] || 0;

//   return (
//     <div className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100">

//       {product.oldPrice && (
//         <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
//           SALE
//         </div>
//       )}

//       <div className="bg-gradient-to-br from-emerald-50 via-green-50 to-lime-100 p-8 flex justify-center items-center">
//         <span className="text-7xl group-hover:scale-125 transition duration-500">
//           {product.emoji}
//         </span>
//       </div>

//       <div className="p-5">
//         <div className="flex justify-between items-center mb-3">
//           <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
//             {product.catLabel}
//           </span>

//           {product.organic && (
//             <span className="text-xs bg-emerald-600 text-white px-3 py-1 rounded-full">
//               Organic
//             </span>
//           )}
//         </div>

//         <h3 className="font-bold text-lg text-slate-800">
//           {product.name}
//         </h3>

//         <div className="text-yellow-500 my-2">
//           {"⭐".repeat(product.rating)}
//         </div>

//         <div className="flex items-center gap-2">
//           <span className="text-2xl font-bold text-green-600">
//             Rs {product.price}
//           </span>

//           {product.oldPrice && (
//             <span className="line-through text-gray-400">
//               Rs {product.oldPrice}
//             </span>
//           )}
//         </div>

//         {qty === 0 ? (
//           <button
//             onClick={() => addToCart(product.id)}
//             className="w-full mt-5 py-3 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold hover:scale-105 transition cursor-pointer"
//           >
//             Add To Cart
//           </button>
//         ) : (
//           <div className="flex justify-center items-center gap-4 mt-5">
//             <button
//               onClick={() => changeQty(product.id, -1)}
//               className="w-10 h-10 rounded-full bg-red-500 text-white text-lg cursor-pointer"
//             >
//               −
//             </button>

//             <span className="font-bold text-xl">{qty}</span>

//             <button
//               onClick={() => changeQty(product.id, 1)}
//               className="w-10 h-10 rounded-full bg-green-600 text-white text-lg cursor-pointer"
//             >
//               +
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // ─── MAIN PAGE ─────────────────────────────
// const ProductsPage = () => {
//   const { totalItems, totalPrice } = useCart();
//   const navigate = useNavigate();
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100">
//       <div className="max-w-7xl mx-auto px-6 py-10">

//         <div className="text-center mb-12">
//           <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
//             Fresh Grocery Store
//           </h1>

//           <p className="text-slate-500 mt-3">
//             Fresh • Organic • Healthy
//           </p>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//           {products.map((p) => (
//             <ProductCard key={p.id} product={p} />
//           ))}
//         </div>
//       </div>

//       <div className="fixed bottom-6 right-6 bg-white shadow-2xl rounded-3xl px-6 py-5 border min-w-[220px]">
//   <p className="text-sm text-slate-500">
//     Cart Summary
//   </p>

//   <h3 className="font-bold text-lg">
//     🛒 {totalItems} Items
//   </h3>

//   <p className="text-green-600 font-bold text-xl mb-4">
//     Rs {totalPrice(products)}
//   </p>

//   <button
//     onClick={() => navigate("/")}
//     className="w-full py-3 rounded-2xl bg-gradient-to-r from-emerald-500 via-green-600 to-lime-500 text-white font-bold shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
//   >
//     ✓ Confirm Order
//   </button>
// </div>
//     </div>
//   );
// };
import React, { useContext, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

// ─── CART CONTEXT (ONLY ONCE HERE) ─────────────────────────────
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

// ❌ REMOVE CartProvider from here (already in App.jsx)

// ─── PRODUCTS DATA ─────────────────────────────
export const products = [
  { id: 1, name: "Organic Apples", category: "fruits", catLabel: "Fruits", emoji: "🍎", price: 320, oldPrice: 400, rating: 5, organic: true },
  { id: 2, name: "Fresh Spinach", category: "veggies", catLabel: "Vegetables", emoji: "🥬", price: 120, oldPrice: null, rating: 4, organic: true },
  { id: 3, name: "Whole Milk 1L", category: "dairy", catLabel: "Dairy", emoji: "🥛", price: 180, oldPrice: null, rating: 5, organic: false },
  { id: 4, name: "Ripe Bananas", category: "fruits", catLabel: "Fruits", emoji: "🍌", price: 150, oldPrice: 200, rating: 4, organic: false },
  { id: 5, name: "Sourdough Bread", category: "bakery", catLabel: "Bakery", emoji: "🍞", price: 280, oldPrice: null, rating: 5, organic: true },
  { id: 6, name: "Avocado", category: "fruits", catLabel: "Fruits", emoji: "🥑", price: 450, oldPrice: 520, rating: 5, organic: true },
  { id: 7, name: "Cheddar Cheese", category: "dairy", catLabel: "Dairy", emoji: "🧀", price: 390, oldPrice: null, rating: 5, organic: false },
  { id: 8, name: "Bell Pepper", category: "veggies", catLabel: "Vegetables", emoji: "🫑", price: 190, oldPrice: 240, rating: 4, organic: true },
];

// ─── PRODUCT CARD ─────────────────────────────
const ProductCard = ({ product, cart, addToCart, changeQty }) => {
  const qty = cart[product.id] || 0;

  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100">

      {product.oldPrice && (
        <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
          SALE
        </div>
      )}

      <div className="bg-gradient-to-br from-emerald-50 via-green-50 to-lime-100 p-8 flex justify-center items-center">
        <span className="text-7xl group-hover:scale-125 transition duration-500">
          {product.emoji}
        </span>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
            {product.catLabel}
          </span>

          {product.organic && (
            <span className="text-xs bg-emerald-600 text-white px-3 py-1 rounded-full">
              Organic
            </span>
          )}
        </div>

        <h3 className="font-bold text-lg text-slate-800">{product.name}</h3>

        <div className="text-yellow-500 my-2">
          {"⭐".repeat(product.rating)}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-green-600">
            Rs {product.price}
          </span>

          {product.oldPrice && (
            <span className="line-through text-gray-400">
              Rs {product.oldPrice}
            </span>
          )}
        </div>

        {qty === 0 ? (
          <button
            onClick={() => addToCart(product.id)}
            className="w-full mt-5 py-3 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold hover:scale-105 transition cursor-pointer"
          >
            Add To Cart
          </button>
        ) : (
          <div className="flex justify-center items-center gap-4 mt-5">
            <button
              onClick={() => changeQty(product.id, -1)}
              className="w-10 h-10 rounded-full bg-red-500 text-white text-lg cursor-pointer"
            >
              −
            </button>

            <span className="font-bold text-xl">{qty}</span>

            <button
              onClick={() => changeQty(product.id, 1)}
              className="w-10 h-10 rounded-full bg-green-600 text-white text-lg cursor-pointer"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// ─── MAIN PAGE ─────────────────────────────
const Product = () => {
  const [cart, setCart] = useState({});
  const navigate = useNavigate();

  const addToCart = (id) =>
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));

  const changeQty = (id, delta) =>
    setCart((prev) => {
      const newQty = (prev[id] || 0) + delta;
      if (newQty <= 0) {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      }
      return { ...prev, [id]: newQty };
    });

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);

  const totalPrice = products =>
    Object.entries(cart).reduce((sum, [id, qty]) => {
      const p = products.find((x) => x.id === parseInt(id));
      return sum + (p ? p.price * qty : 0);
    }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
            Fresh Grocery Store
          </h1>

          <p className="text-slate-500 mt-3">
            Fresh • Organic • Healthy
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              cart={cart}
              addToCart={addToCart}
              changeQty={changeQty}
            />
          ))}
        </div>
      </div>

      {/* CART SUMMARY */}
      <div className="fixed bottom-6 right-6 bg-white shadow-2xl rounded-3xl px-6 py-5 border min-w-[220px]">
        <p className="text-sm text-slate-500">Cart Summary</p>

        <h3 className="font-bold text-lg">🛒 {totalItems} Items</h3>

        <p className="text-green-600 font-bold text-xl mb-4">
          Rs {totalPrice(products)}
        </p>

        <button
          onClick={() => navigate("/")}
          className="w-full py-3 rounded-2xl bg-gradient-to-r from-emerald-500 via-green-600 to-lime-500 text-white font-bold shadow-lg hover:scale-105 transition cursor-pointer"
        >
          ✓ Confirm Order
        </button>
      </div>
    </div>
  );
};

export default Product;