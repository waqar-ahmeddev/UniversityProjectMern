import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "./CartContext";

const API_URL = "http://localhost:5000/api";

const ProductCard = ({ product, cart, addToCart, changeQty }) => {
  const qty = cart[product._id] || 0;

  const categoryEmoji = {
    fruits: "🍎",
    veggies: "🥬",
    dairy: "🥛",
    bakery: "🍞",
  };

  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100">

      <div className="bg-gradient-to-br from-emerald-50 via-green-50 to-lime-100 p-8 flex justify-center items-center">
        <span className="text-7xl group-hover:scale-125 transition duration-500">
          {categoryEmoji[product.category] || "🛒"}
        </span>
      </div>

      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full capitalize">
            {product.category}
          </span>
        </div>

        <h3 className="font-bold text-lg text-slate-800">{product.name}</h3>

        <div className="flex items-center gap-2 mt-2">
          <span className="text-2xl font-bold text-green-600">
            Rs {product.price}
          </span>
        </div>

        {qty === 0 ? (
          <button
            onClick={() => addToCart(product._id)}
            className="w-full mt-5 py-3 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold hover:scale-105 transition cursor-pointer"
          >
            Add To Cart
          </button>
        ) : (
          <div className="flex justify-center items-center gap-4 mt-5">
            <button
              onClick={() => changeQty(product._id, -1)}
              className="w-10 h-10 rounded-full bg-red-500 text-white text-lg cursor-pointer"
            >
              −
            </button>

            <span className="font-bold text-xl">{qty}</span>

            <button
              onClick={() => changeQty(product._id, 1)}
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

// ─── THANK YOU POPUP ─────────────────────────────
const ThankYouPopup = () => (
  <div className="fixed inset-0 z-[100] flex items-center justify-center">
    {/* Blur background */}
    <div className="absolute inset-0 bg-black/30 backdrop-blur-md" />

    {/* Popup card */}
    <div className="relative z-10 bg-white rounded-3xl px-10 py-12 mx-4 text-center shadow-2xl animate-[fadeIn_0.3s_ease-out]">
      <div className="text-6xl mb-4">🎉</div>
      <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent mb-2">
        Thank You!
      </h2>
      <p className="text-slate-500">Your order has been placed successfully.</p>
      <p className="text-sm text-slate-400 mt-3">Redirecting you to home...</p>
    </div>
  </div>
);

// ─── MAIN PAGE ─────────────────────────────
const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showThankYou, setShowThankYou] = useState(false);
  const { cart, addToCart, changeQty, clearCart } = useCart();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${API_URL}/products`);
        setProducts(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Products fetch karne mein error:", err);
        setError("Products load nahi ho sake. Backend server chal raha hai check karo.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Search query ke hisaab se products filter karna (name ya category se match)
  const filteredProducts = searchQuery
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products;

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);

  const totalPrice = () =>
    Object.entries(cart).reduce((sum, [id, qty]) => {
      const p = products.find((x) => x._id === id);
      return sum + (p ? p.price * qty : 0);
    }, 0);

  // Confirm Order dabane par: popup dikhao, cart clear karo, 2.5 sec baad home bhej do
  const handleConfirmOrder = () => {
    setShowThankYou(true);
    if (clearCart) clearCart();

    setTimeout(() => {
      setShowThankYou(false);
      navigate("/");
    }, 2500);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-slate-500">Products load ho rahe hain...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-10">

        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
            Fresh Grocery Store
          </h1>

          <p className="text-sm md:text-base text-slate-500 mt-3">
            Fresh • Organic • Healthy
          </p>

          {searchQuery && (
            <p className="text-sm text-green-600 mt-2">
              Showing results for: <strong>"{searchQuery}"</strong>
            </p>
          )}
        </div>

        {filteredProducts.length === 0 ? (
          <p className="text-center text-slate-500 py-10">
            Koi product nahi mila "{searchQuery}" ke liye.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((p) => (
              <ProductCard
                key={p._id}
                product={p}
                cart={cart}
                addToCart={addToCart}
                changeQty={changeQty}
              />
            ))}
          </div>
        )}
      </div>

      {/* CART SUMMARY */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-white shadow-2xl rounded-3xl px-4 md:px-6 py-4 md:py-5 border min-w-[200px] md:min-w-[220px]">
        <p className="text-sm text-slate-500">Cart Summary</p>

        <h3 className="font-bold text-lg">🛒 {totalItems} Items</h3>

        <p className="text-green-600 font-bold text-xl mb-4">
          Rs {totalPrice()}
        </p>

        <button
          onClick={handleConfirmOrder}
          disabled={totalItems === 0}
          className="w-full py-3 rounded-2xl bg-gradient-to-r from-emerald-500 via-green-600 to-lime-500 text-white font-bold shadow-lg hover:scale-105 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          ✓ Confirm Order
        </button>
      </div>

      {showThankYou && <ThankYouPopup />}
    </div>
  );
};

export default Product;
