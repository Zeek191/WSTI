import React from "react"
import { ReactComponent as HeroImage } from "@/base/assets/images/hero.svg"
import * as styles from "./styles.module.scss"
import Button from "../../elements/Button/Button"

export default function Hero({ title, description, cta_label, cta_link }) {
  return (
    <div className={styles.outer}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1 className={styles.heading}>{title}</h1>
          <p className={styles.paragraph}>{description}</p>
          <div className={styles.link}>
            <Button link external url={cta_link} mode="primary">
              {cta_label}
            </Button>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <HeroImage className={styles.image} />
        </div>
      </div>
    </div>
  )
}
