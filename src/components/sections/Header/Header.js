import React, { useState, useEffect, useRef } from "react"
import Cart from "../../modules/Cart/Cart"
import { useMedia, getMdMedia } from "./useMedia"
import * as styles from "./Header.module.scss"

export default function Header() {
  const [isCartVisible, setCartVisibility] = useState(false)
  const [scroll, setScroll] = useState(false)
  const headerRef = useRef(null)
  const isTablet = useMedia(getMdMedia())

  function changeCartVisibility() {
    return setCartVisibility(!isCartVisible)
  }

  const headerScroll = () => {
    const scrollBreakpoint = isTablet ? 40 : 20

    const offsetTop = headerRef?.current?.offsetTop || 0
    if (offsetTop > scrollBreakpoint) return setScroll(true)
    return setScroll(false)
  }

  useEffect(() => {
    document.addEventListener("scroll", headerScroll)
    return () => document.removeEventListener("scroll", headerScroll)
  }, [])

  return (
    <>
      <div
        className={styles.wrapper}
        data-scroll={String(scroll)}
        ref={headerRef}
      >
        <div className={styles.content}>
          <Cart
            mode={scroll ? "secondary" : "primary"}
            onClick={changeCartVisibility}
            isVisible={isCartVisible}
          />
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
