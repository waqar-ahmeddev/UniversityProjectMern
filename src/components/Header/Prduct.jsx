// import React, { useState, createContext, useContext } from 'react'
// import { useNavigate } from 'react-router-dom'

// // ─── Cart Context (same file) ───────────────────────────────────────────────
// const CartContext = createContext()

// const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState({})

//   const addToCart = (id) =>
//     setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }))

//   const changeQty = (id, delta) =>
//     setCart(prev => {
//       const newQty = (prev[id] || 0) + delta
//       if (newQty <= 0) {
//         const updated = { ...prev }
//         delete updated[id]
//         return updated
//       }
//       return { ...prev, [id]: newQty }
//     })

//   const totalItems = Object.values(cart).reduce((a, b) => a + b, 0)
//   const totalPrice = (products) =>
//     Object.entries(cart).reduce((sum, [id, qty]) => {
//       const p = products.find(x => x.id === parseInt(id))
//       return sum + (p ? p.price * qty : 0)
//     }, 0)

//   return (
//     <CartContext.Provider value={{ cart, addToCart, changeQty, totalItems, totalPrice }}>
//       {children}
//     </CartContext.Provider>
//   )
// }

// const useCart = () => useContext(CartContext)

// // ─── Data ────────────────────────────────────────────────────────────────────
// const products = [
//   { id: 1,  name: 'Organic Apples',    category: 'fruits',  catLabel: 'Fruits',      emoji: '🍎', price: 320, oldPrice: 400, rating: 5, organic: true,  sale: true  },
//   { id: 2,  name: 'Fresh Spinach',     category: 'veggies', catLabel: 'Vegetables',  emoji: '🥬', price: 120, oldPrice: null, rating: 4, organic: true,  sale: false },
//   { id: 3,  name: 'Whole Milk 1L',     category: 'dairy',   catLabel: 'Dairy',       emoji: '🥛', price: 180, oldPrice: null, rating: 5, organic: false, sale: false },
//   { id: 4,  name: 'Ripe Bananas',      category: 'fruits',  catLabel: 'Fruits',      emoji: '🍌', price: 150, oldPrice: 200,  rating: 4, organic: false, sale: true  },
//   { id: 5,  name: 'Sourdough Bread',   category: 'bakery',  catLabel: 'Bakery',      emoji: '🍞', price: 280, oldPrice: null, rating: 5, organic: true,  sale: false },
//   { id: 6,  name: 'Cherry Tomatoes',   category: 'veggies', catLabel: 'Vegetables',  emoji: '🍅', price: 200, oldPrice: 250,  rating: 4, organic: true,  sale: true  },
//   { id: 7,  name: 'Farm Eggs (12)',    category: 'dairy',   catLabel: 'Dairy',       emoji: '🥚', price: 260, oldPrice: null, rating: 5, organic: true,  sale: false },
//   { id: 8,  name: 'Sweet Mango',       category: 'fruits',  catLabel: 'Fruits',      emoji: '🥭', price: 350, oldPrice: null, rating: 5, organic: false, sale: false },
//   { id: 9,  name: 'Croissant Pack',    category: 'bakery',  catLabel: 'Bakery',      emoji: '🥐', price: 380, oldPrice: 450,  rating: 4, organic: false, sale: true  },
//   { id: 10, name: 'Greek Yogurt',      category: 'dairy',   catLabel: 'Dairy',       emoji: '🍦', price: 220, oldPrice: null, rating: 4, organic: true,  sale: false },
//   { id: 11, name: 'Broccoli',          category: 'veggies', catLabel: 'Vegetables',  emoji: '🥦', price: 140, oldPrice: 170,  rating: 4, organic: true,  sale: true  },
//   { id: 12, name: 'Strawberries',      category: 'fruits',  catLabel: 'Fruits',      emoji: '🍓', price: 290, oldPrice: null, rating: 5, organic: true,  sale: false },
// ]

// const filters = [
//   { key: 'all',    label: 'All Items' },
//   { key: 'fruits', label: '🍎 Fruits'  },
//   { key: 'veggies',label: '🥦 Veggies' },
//   { key: 'dairy',  label: '🥛 Dairy'   },
//   { key: 'bakery', label: '🍞 Bakery'  },
// ]

// // ─── Star Rating ─────────────────────────────────────────────────────────────
// const StarRating = ({ rating }) => (
//   <div className="flex items-center gap-0.5">
//     {[1,2,3,4,5].map(s => (
//       <svg key={s} width="12" height="12" viewBox="0 0 24 24"
//         fill={s <= rating ? '#f59e0b' : 'none'}
//         stroke="#f59e0b" strokeWidth="2">
//         <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
//       </svg>
//     ))}
//     <span className="text-xs text-gray-400 ml-1">({rating}.0)</span>
//   </div>
// )

// // ─── Product Card ─────────────────────────────────────────────────────────────
// const ProductCard = ({ product }) => {
//   const { cart, addToCart, changeQty } = useCart()
//   const qty = cart[product.id] || 0
//   const discount = product.oldPrice
//     ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
//     : null

//   return (
//     <div className="bg-white rounded-2xl border border-[#e0eedd] overflow-hidden hover:border-[#5da85e] hover:shadow-md transition-all duration-200 flex flex-col">

//       {/* Image */}
//       <div className="bg-[#EEF7EA] h-44 flex items-center justify-center relative">
//         {product.organic && (
//           <span className="absolute top-2 left-2 bg-[#d4edda] text-[#2E7D32] text-[10px] font-semibold px-2 py-0.5 rounded-full tracking-wide">
//             ORGANIC
//           </span>
//         )}
//         {discount && (
//           <span className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
//             -{discount}%
//           </span>
//         )}
//         <span className="text-6xl select-none">{product.emoji}</span>
//       </div>

//       {/* Info */}
//       <div className="p-4 flex flex-col flex-1">
//         <span className="text-[10px] font-semibold text-[#6a9a68] uppercase tracking-wider mb-1">
//           {product.catLabel}
//         </span>
//         <h3 className="text-sm font-semibold text-[#1a3a1c] mb-1.5 leading-snug">
//           {product.name}
//         </h3>
//         <StarRating rating={product.rating} />

//         <div className="mt-auto pt-3 flex items-center justify-between">
//           {/* Price */}
//           <div>
//             <span className="text-base font-bold text-[#156019]">Rs {product.price}</span>
//             {product.oldPrice && (
//               <span className="text-xs text-gray-400 line-through ml-1.5">Rs {product.oldPrice}</span>
//             )}
//           </div>

//           {/* Add / Qty */}
//           {qty === 0 ? (
//             <button
//               onClick={() => addToCart(product.id)}
//               className="flex items-center gap-1.5 bg-[#156019] hover:bg-[#0f4a12] text-white text-xs font-semibold px-3 py-2 rounded-xl transition-colors cursor-pointer"
//             >
//               <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                 <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
//               </svg>
//               Add
//             </button>
//           ) : (
//             <div className="flex items-center gap-1.5 bg-[#EEF7EA] rounded-xl px-2 py-1">
//               <button
//                 onClick={() => changeQty(product.id, -1)}
//                 className="w-6 h-6 rounded-lg bg-white border border-[#c5e0c6] text-[#156019] font-bold text-sm flex items-center justify-center hover:bg-red-50 transition cursor-pointer"
//               >−</button>
//               <span className="text-sm font-bold text-[#1a3a1c] w-5 text-center">{qty}</span>
//               <button
//                 onClick={() => changeQty(product.id, 1)}
//                 className="w-6 h-6 rounded-lg bg-white border border-[#c5e0c6] text-[#156019] font-bold text-sm flex items-center justify-center hover:bg-[#d4edda] transition cursor-pointer"
//               >+</button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// // ─── Main Page ────────────────────────────────────────────────────────────────
// const ProductsPage = () => {
//   const [activeFilter, setActiveFilter] = useState('all')
//   const { totalItems, totalPrice } = useCart()
//   const navigate = useNavigate()

//   const filtered = activeFilter === 'all'
//     ? products
//     : products.filter(p => p.category === activeFilter)

//   return (
//     <div className="min-h-screen bg-[#f5f9f2]">

//       {/* Header */}
//       <div className="bg-white border-b border-[#e0eedd] px-8 py-4 flex items-center justify-between sticky top-0 z-40">
//         <div className="flex items-center gap-3">
//           <button
//             onClick={() => navigate('/')}
//             className="text-[#156019] hover:bg-[#EEF7EA] p-2 rounded-lg transition cursor-pointer"
//           >
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>
//             </svg>
//           </button>
//           <div>
//             <h1 className="text-lg font-bold text-[#1a3a1c]">Fresh Products</h1>
//             <p className="text-xs text-gray-400">{filtered.length} items available</p>
//           </div>
//         </div>

//         <button
//           onClick={() => navigate('/cartSwap')}
//           className="relative flex items-center gap-2 bg-[#156019] hover:bg-[#0f4a12] text-white px-5 py-2.5 rounded-xl transition cursor-pointer"
//         >
//           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
//             <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
//           </svg>
//           <span className="text-sm font-semibold">Cart</span>
//           {totalItems > 0 && (
//             <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
//               {totalItems}
//             </span>
//           )}
//         </button>
//       </div>

//       <div className="px-8 py-6">

//         {/* Filter Tabs */}
//         <div className="flex gap-2 mb-6 flex-wrap">
//           {filters.map(f => (
//             <button
//               key={f.key}
//               onClick={() => setActiveFilter(f.key)}
//               className={`px-4 py-2 rounded-full text-sm font-medium border transition cursor-pointer ${
//                 activeFilter === f.key
//                   ? 'bg-[#156019] text-white border-[#156019]'
//                   : 'bg-white text-[#2e7d32] border-[#c5e0c6] hover:bg-[#EEF7EA]'
//               }`}
//             >
//               {f.label}
//             </button>
//           ))}
//         </div>

//         {/* Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {filtered.map(product => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       </div>

//       {/* Floating Checkout Bar */}
//       {totalItems > 0 && (
//         <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
//           <div className="bg-[#156019] text-white px-6 py-3.5 rounded-2xl flex items-center gap-5 shadow-lg">
//             <div className="flex items-center gap-2">
//               <span className="bg-white text-[#156019] text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
//                 {totalItems}
//               </span>
//               <span className="text-sm">items in cart</span>
//             </div>
//             <span className="text-white/40">|</span>
//             <span className="font-bold text-base">Rs {totalPrice(products)}</span>
//             <button
//               className="bg-white text-[#156019] font-bold text-sm px-4 py-2 rounded-xl hover:bg-[#EEF7EA] transition cursor-pointer"
//             >
//               Checkout →
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// // ─── Export with CartProvider wrapped ────────────────────────────────────────
// const Products = () => (
//   <CartProvider>
//     <ProductsPage />
//   </CartProvider>
// )

// export default Products
import React, { useState, createContext, useContext } from "react";

// ─── CART CONTEXT ─────────────────────────────
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});

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

  const totalPrice = (products) =>
    Object.entries(cart).reduce((sum, [id, qty]) => {
      const p = products.find((x) => x.id === parseInt(id));
      return sum + (p ? p.price * qty : 0);
    }, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, changeQty, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

// ─── PRODUCTS DATA ─────────────────────────────
export const products = [
  { id: 1, name: "Organic Apples", category: "fruits", catLabel: "Fruits", emoji: "🍎", price: 320, oldPrice: 400, rating: 5, organic: true },
  { id: 2, name: "Fresh Spinach", category: "veggies", catLabel: "Vegetables", emoji: "🥬", price: 120, oldPrice: null, rating: 4, organic: true },
  { id: 3, name: "Whole Milk 1L", category: "dairy", catLabel: "Dairy", emoji: "🥛", price: 180, oldPrice: null, rating: 5, organic: false },
  { id: 4, name: "Ripe Bananas", category: "fruits", catLabel: "Fruits", emoji: "🍌", price: 150, oldPrice: 200, rating: 4, organic: false },
  { id: 5, name: "Sourdough Bread", category: "bakery", catLabel: "Bakery", emoji: "🍞", price: 280, oldPrice: null, rating: 5, organic: true },
];

// ─── CARD COMPONENT ─────────────────────────────
const ProductCard = ({ product }) => {
  const { cart, addToCart, changeQty } = useCart();
  const qty = cart[product.id] || 0;

  return (
    <div className="border p-4 rounded-lg bg-white">
      <div className="text-4xl">{product.emoji}</div>

      <h3 className="font-bold">{product.name}</h3>
      <p>Rs {product.price}</p>

      {qty === 0 ? (
        <button
          onClick={() => addToCart(product.id)}
          className="bg-green-600 text-white px-3 py-1 mt-2"
        >
          Add
        </button>
      ) : (
        <div className="flex gap-2 mt-2">
          <button onClick={() => changeQty(product.id, -1)}>-</button>
          <span>{qty}</span>
          <button onClick={() => changeQty(product.id, 1)}>+</button>
        </div>
      )}
    </div>
  );
};

// ─── MAIN PAGE ─────────────────────────────
const ProductsPage = () => {
  const { totalItems, totalPrice } = useCart();

  return (
    <div>
      <h1 className="text-xl font-bold">Products</h1>

      <div className="grid grid-cols-2 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="fixed bottom-5 right-5 bg-black text-white p-3 rounded">
        Items: {totalItems} | Total: Rs {totalPrice(products)}
      </div>
    </div>
  );
};

// ─── EXPORT WRAPPED ─────────────────────────────
const Products = () => (
  <CartProvider>
    <ProductsPage />
  </CartProvider>
);

export default Products;