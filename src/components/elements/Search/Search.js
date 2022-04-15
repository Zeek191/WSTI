import React from "react"
import * as styles from "./styles.module.scss"

export default function Search({
  id,
  name,
  label,
  placeholder,
  value,
  onChange,
}) {
  return (
    <label htmlFor={id} className={styles.label}>
      {label}
      <input
        id={id}
        name={name}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.input}
      />
    </label>
  )
}
