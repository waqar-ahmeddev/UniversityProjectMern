// import { createContext, useState, useContext } from "react"

// const CartContext = createContext()

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState({})

//   const addToCart = (id) =>
//     setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }))

//   const changeQty = (id, delta) =>
//     setCart(prev => {
//       const newQty = (prev[id] || 0) + delta
//       if (newQty <= 0) {
//         const copy = { ...prev }
//         delete copy[id]
//         return copy
//       }
//       return { ...prev, [id]: newQty }
//     })

//   return (
//     <CartContext.Provider value={{ cart, addToCart, changeQty }}>
//       {children}
//     </CartContext.Provider>
//   )
// }

// export const useCart = () => useContext(CartContext)
import { createContext, useState, useContext } from "react"

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({})

  const addToCart = (id) =>
    setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }))

  const changeQty = (id, delta) =>
    setCart(prev => {
      const newQty = (prev[id] || 0) + delta
      if (newQty <= 0) {
        const copy = { ...prev }
        delete copy[id]
        return copy
      }
      return { ...prev, [id]: newQty }
    })

  // Naya function: pura cart khali karne ke liye (Confirm Order ke baad)
  const clearCart = () => setCart({})

  return (
    <CartContext.Provider value={{ cart, addToCart, changeQty, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
