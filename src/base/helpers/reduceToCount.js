export default function reduceToCount(products) {
  return products.reduce((prevValue, currentValue) => {
    return (prevValue += currentValue.count)
  }, 0)
}
