import { Link } from "gatsby"
import React from "react"
import Button from "../../elements/Button/Button"

import * as styles from "./styles.module.scss"

export default function ProductsGrid({ products }) {
  return (
    <ul className={styles.grid}>
      {products.map(product => {
        return (
          <li key={product.id}>
            <Link to={product.slug} className={styles.item}>
              <div className={styles.imageWrapper}>
                <img
                  src={product.image}
                  alt={`${product.title} title`}
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <p className={styles.title}>{product.title}</p>
                <p>
                  <span className={styles.category}>Category:</span>{" "}
                  {product.category}
                </p>
                <p className={styles.price}>${product.price}</p>
              </div>
              <div className={styles.buttonWrapper}>
                <Button link mode="primary" url="/boughtProduct">
                  BUY NOW!
                </Button>
                <Button link mode="secondary" url={product.slug.toLowerCase()}>
                  PREVIEW PRODUCT
                </Button>
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
