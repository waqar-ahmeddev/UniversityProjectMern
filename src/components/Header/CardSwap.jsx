// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useCart, products } from './Prduct'

// const CardSwap = () => {
//   const navigate = useNavigate()
//   const { cart, changeQty, totalPrice } = useCart()

//   const cartItems = Object.entries(cart)

//   return (
//     <div className="fixed inset-0 z-50">

//       {/* 🔥 BLUR BACKGROUND */}
//       <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

//       {/* 🔥 MAIN MODAL */}
//       <div className="relative z-10 max-w-3xl mx-auto mt-10 bg-white rounded-2xl p-6 shadow-2xl">

//         {/* HEADER */}
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-xl font-bold">Your Cart</h2>

//           <button
//             onClick={() => navigate(-1)}
//             className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
//           >
//             ← Back
//           </button>
//         </div>

//         {/* EMPTY CART */}
//         {cartItems.length === 0 ? (
//           <p className="text-gray-500 text-center py-10">
//             Your cart is empty
//           </p>
//         ) : (
//           <>
//             {/* ITEMS */}
//             <div className="space-y-4">
//               {cartItems.map(([id, qty]) => {
//                 const product = products.find(p => p.id === parseInt(id))
//                 if (!product) return null

//                 return (
//                   <div
//                     key={id}
//                     className="flex items-center justify-between border p-3 rounded-lg"
//                   >
//                     <div className="flex items-center gap-3">
//                       <span className="text-3xl">{product.emoji}</span>
//                       <div>
//                         <h3 className="font-semibold">{product.name}</h3>
//                         <p className="text-sm text-gray-500">
//                           Rs {product.price}
//                         </p>
//                       </div>
//                     </div>

//                     {/* QTY */}
//                     <div className="flex items-center gap-2">
//                       <button
//                         onClick={() => changeQty(product.id, -1)}
//                         className="px-3 py-1 bg-gray-200 rounded"
//                       >
//                         -
//                       </button>

//                       <span>{qty}</span>

//                       <button
//                         onClick={() => changeQty(product.id, 1)}
//                         className="px-3 py-1 bg-gray-200 rounded"
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>

//             {/* TOTAL */}
//             <div className="mt-6 text-right">
//               <h3 className="text-lg font-bold">
//                 Total: Rs {totalPrice(products)}
//               </h3>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   )
// }

// export default CardSwap
// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useCart, products } from './Prduct'

// const CardSwap = () => {
//   const navigate = useNavigate()
//   const { cart, changeQty, totalPrice } = useCart()

//   // ✅ FIX: proper cart mapping
//   const cartItems = Object.keys(cart)
//     .map(id => {
//       const product = products.find(p => p.id === parseInt(id))
//       return product ? { ...product, qty: cart[id] } : null
//     })
//     .filter(Boolean)

//   return (
//     <div className="fixed inset-0 z-50">

//       {/* BACKDROP BLUR */}
//       <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

//       {/* MODAL */}
//       <div className="relative z-10 max-w-3xl mx-auto mt-10 bg-white rounded-2xl p-6 shadow-2xl">

//         {/* HEADER */}
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-xl font-bold">Your Cart</h2>

//           <button
//             onClick={() => navigate(-1)}
//             className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
//           >
//             ← Back
//           </button>
//         </div>

//         {/* EMPTY */}
//         {cartItems.length === 0 ? (
//           <p className="text-gray-500 text-center py-10">
//             Your cart is empty
//           </p>
//         ) : (
//           <>
//             {/* ITEMS */}
//             <div className="space-y-4">
//               {cartItems.map(item => (
//                 <div
//                   key={item.id}
//                   className="flex items-center justify-between border p-3 rounded-lg"
//                 >
//                   <div className="flex items-center gap-3">
//                     <span className="text-3xl">{item.emoji}</span>
//                     <div>
//                       <h3 className="font-semibold">{item.name}</h3>
//                       <p className="text-sm text-gray-500">
//                         Rs {item.price}
//                       </p>
//                     </div>
//                   </div>

//                   {/* QTY */}
//                   <div className="flex items-center gap-2">
//                     <button
//                       onClick={() => changeQty(item.id, -1)}
//                       className="px-3 py-1 bg-gray-200 rounded"
//                     >
//                       -
//                     </button>

//                     <span>{item.qty}</span>

//                     <button
//                       onClick={() => changeQty(item.id, 1)}
//                       className="px-3 py-1 bg-gray-200 rounded"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* TOTAL */}
//             <div className="mt-6 text-right">
//               <h3 className="text-lg font-bold">
//                 Total: Rs {totalPrice(products)}
//               </h3>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   )
// }

// export default CardSwap
import React from "react"
import { useNavigate } from "react-router-dom"
import { useCart, products } from "./Prduct"

const CardSwap = () => {
  const navigate = useNavigate()
  const { cart, changeQty, totalPrice } = useCart()

  const cartItems = Object.entries(cart)

  return (
    <div className="fixed inset-0 z-50">

      {/* BACKDROP BLUR */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => navigate(-1)}
      />

      {/* MODAL */}
      <div className="relative z-10 max-w-2xl mx-auto mt-16 bg-white rounded-2xl p-6">

        {/* HEADER */}
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold">Your Cart</h2>

          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-gray-200 rounded"
          >
            Back
          </button>
        </div>

        {/* EMPTY */}
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500 py-10">
            Your cart is empty
          </p>
        ) : (
          <>
            {/* ITEMS */}
            {cartItems.map(([id, qty]) => {
              const product = products.find(p => p.id === Number(id))
              if (!product) return null

              return (
                <div
                  key={id}
                  className="flex justify-between items-center border p-3 rounded mb-3"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{product.emoji}</span>
                    <div>
                      <h3>{product.name}</h3>
                      <p>Rs {product.price}</p>
                    </div>
                  </div>

                  {/* QTY */}
                  <div className="flex items-center gap-2">
                    <button onClick={() => changeQty(product.id, -1)}>-</button>
                    <span>{qty}</span>
                    <button onClick={() => changeQty(product.id, 1)}>+</button>
                  </div>
                </div>
              )
            })}

            {/* TOTAL */}
            <div className="text-right font-bold mt-4">
              Total: Rs {totalPrice(products)}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default CardSwap