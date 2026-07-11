import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useCart } from "./CartContext"

const API_URL = "http://localhost:5000/api"

const CardSwap = () => {
  const navigate = useNavigate()
  const { cart, changeQty } = useCart()
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${API_URL}/products`)
        setProducts(res.data)
      } catch (err) {
        console.error("Products fetch karne mein error:", err)
      }
    }

    fetchProducts()
  }, [])

  const cartItems = Object.entries(cart)

  const categoryEmoji = {
    fruits: "🍎",
    veggies: "🥬",
    dairy: "🥛",
    bakery: "🍞",
  }

  const totalPrice = () =>
    cartItems.reduce((sum, [id, qty]) => {
      const p = products.find((x) => x._id === id)
      return sum + (p ? p.price * qty : 0)
    }, 0)

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => navigate(-1)}
      />

      <div className="relative z-10 w-11/12 sm:max-w-2xl mx-auto mt-8 md:mt-16 bg-white rounded-2xl p-4 md:p-6">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg md:text-xl font-bold">Your Cart</h2>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-gray-200 rounded cursor-pointer"
          >
            Back
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500 py-10">
            Your cart is empty
          </p>
        ) : (
          <>
            {cartItems.map(([id, qty]) => {
              const product = products.find(p => p._id === id)
              if (!product) return null

              return (
                <div
                  key={id}
                  className="flex justify-between items-center border p-3 rounded mb-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{categoryEmoji[product.category] || "🛒"}</span>
                    <div>
                      <h3>{product.name}</h3>
                      <p>Rs {product.price}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 ">
                    <button onClick={() => changeQty(product._id, -1)} className="cursor-pointer">
                      -
                    </button>
                    <span>{qty}</span>
                    <button onClick={() => changeQty(product._id, 1)} className="cursor-pointer">
                      +
                    </button>
                  </div>
                </div>
              )
            })}

            <div className="text-right font-bold mt-4">
              Total: Rs {totalPrice()}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default CardSwap