import { ACTIONS } from "./types"

export function addProduct(product) {
  return {
    type: ACTIONS.addProduct,
    payload: { ...product, count: 1 },
  }
}
