import React from "react"
import CartProvider from "@/base/context/Cart"

export const wrapRootElement = ({ element }) => (
  <CartProvider>{element}</CartProvider>
)
