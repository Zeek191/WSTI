import React from "react"
import { Link } from "gatsby"
import * as styles from "./styles.module.scss"

export default function Button({
  link,
  external,
  url,
  children,
  onClick,
  mode = "primary",
  className,
}) {
  if (link && external)
    return (
      <a
        href={url}
        className={`${styles.button} ${className || ""}`}
        data-primary={String(mode === "primary")}
        data-secondary={String(mode === "secondary")}
      >
        {children}
      </a>
    )
  if (link && !external)
    return (
      <Link
        to={url}
        className={`${styles.button} ${className || ""}`}
        data-primary={String(mode === "primary")}
        data-secondary={String(mode === "secondary")}
      >
        {children}
      </Link>
    )

  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${className}`}
      data-primary={String(mode === "primary")}
      data-secondary={String(mode === "secondary")}
    >
      {children}
    </button>
  )
}
