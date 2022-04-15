import React, { useContext } from "react"
import { ReactComponent as CartIcon } from "@/base/assets/icons/cart.svg"
import { CartContext } from "../../../base/context/Cart/provider"
import * as styles from "./styles.module.scss"
import Button from "../../elements/Button/Button"

export default function Cart({ mode, onClick, isVisible }) {
  const {
    state: { fullCount, fullPrice, cart },
  } = useContext(CartContext)

  function renderCards(cards) {
    return (
      <ul className={styles.list}>
        {cards.map(card => (
          <li key={card.id} className={styles.cardWrapper}>
            <div className={styles.imageWrapper}>
              <img src={card.image} className={styles.cardImage} />
            </div>
            <div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.count}>
                Count: <span>{card.count}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.buttonWrapper}
        data-primary={String(mode === "primary")}
        data-secondary={String(mode === "secondary")}
        onClick={onClick}
      >
        <CartIcon />
        {fullCount > 0 && (
          <div className={styles.order}>
            <p>{fullCount}</p>
          </div>
        )}
      </button>
      <div className={styles.cart} data-open={String(isVisible)}>
        {cart.length ? renderCards(cart) : <p>Cart is empty</p>}
        <div className={styles.cartInformation}>
          <p>
            Total count: <span>{fullCount}</span>
          </p>
          <p>
            Total price: <span>${fullPrice}</span>
          </p>
          {cart.length ? (
            <div className={styles.buyButton}>
              <Button
                link
                types="internal"
                mode="secondary"
                url="/boughtProduct"
              >
                BUY!
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
