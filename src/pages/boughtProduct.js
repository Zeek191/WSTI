import React from "react"
import { Link } from "gatsby"
import * as styles from "./styles.module.scss"

export default function BoughtProduct() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.background} />
      <h1 className={styles.heading}>Thanks for your purchase!</h1>
      <Link to="/" className={styles.link}>
        Back to homepage
      </Link>
    </div>
  )
}
