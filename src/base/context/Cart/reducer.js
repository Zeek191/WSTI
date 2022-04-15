import reduceToCount from "../../helpers/reduceToCount"
import reduceToPrice from "../../helpers/reduceToPrice"
import { ACTIONS } from "./types"

export function CartReducer(state, action) {
  switch (action.type) {
    case ACTIONS.addProduct: {
      const { id } = action.payload
      const productInCard = state.cart?.filter(product => product.id === id)
      const cartWithoutCurrentProduct = state.cart?.filter(
        product => product.id !== id
      )

      if (!productInCard.length)
        return {
          ...state,
          cart: [...state.cart, action.payload],
          fullPrice: state.fullPrice + action.payload.price,
          fullCount: state.fullCount + action.payload.count,
        }

      const updatedCart = [
        ...cartWithoutCurrentProduct,
        { ...action.payload, count: productInCard[0].count + 1 },
      ]

      return {
        ...state,
        cart: updatedCart,
        fullPrice: reduceToPrice(updatedCart),
        fullCount: reduceToCount(updatedCart),
      }
    }
    default: {
      console.error(`Unhandled action type: ${action.type}`)
      return { ...state }
    }
  }
}
