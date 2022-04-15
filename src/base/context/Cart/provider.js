import React from "react"
import { CartReducer } from "./reducer"

export const INITIAL_STATE = {
  cart: [],
  fullPrice: 0,
  fullCount: 0,
}

export const CartContext = React.createContext({
  state: INITIAL_STATE,
  dispatch: () => null,
})

export default function CartProvider({ children }) {
  const [state, dispatch] = React.useReducer(CartReducer, INITIAL_STATE)
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}
