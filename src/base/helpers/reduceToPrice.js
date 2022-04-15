export default function reduceToPrice(products) {
  return products.reduce((prevValue, currentValue) => {
    return (prevValue += currentValue.count * currentValue.price)
  }, 0)
}
