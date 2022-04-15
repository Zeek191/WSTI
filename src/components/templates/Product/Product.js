import React, { useState, useEffect, useContext } from "react"
import { Link } from "gatsby"
import { ReactComponent as BackIcon } from "../../../base/assets/icons/back.svg"
import Button from "../../elements/Button/Button"
import Cart from "../../modules/Cart/Cart"
import { CartContext } from "../../../base/context/Cart/provider"
import { addProduct } from "../../../base/context/Cart/actions"
import * as styles from "./styles.module.scss"

export default function Product({ pageContext }) {
  const { category, description, id, image, price, rating, title } = pageContext
  const [isCartVisible, setCartVisibility] = useState(false)
  const { state, dispatch } = useContext(CartContext)

  function changeCartVisibility() {
    return setCartVisibility(!isCartVisible)
  }

  useEffect(() => {
    console.log("done")
    console.log(state)
  }, [state.cart])

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <Link to="/" className={styles.svgWrapper}>
            <BackIcon /> <p>Back to store</p>
          </Link>
          <img src={image} alt={title} />
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.cart}>
            <Cart
              mode="secondary"
              onClick={changeCartVisibility}
              isVisible={isCartVisible}
            />
          </div>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.category}>Category: {category}</p>
          <p className={styles.description}>{description}</p>
          <h2 className={styles.price}>${price}</h2>
          <div className={styles.buttonWrapper}>
            <Button link mode="secondary" type="external" url="/boughtProduct">
              BUY NOW!
            </Button>
            <Button
              mode="primary"
              onClick={() => dispatch(addProduct(pageContext))}
            >
              ADD TO CART
            </Button>
          </div>
        </div>
      </div>
      <button
        className={styles.backdrop}
        data-open={String(isCartVisible)}
        onClick={changeCartVisibility}
      />
    </>
  )
}
