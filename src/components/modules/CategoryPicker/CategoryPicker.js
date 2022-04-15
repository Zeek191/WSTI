import React from "react"
import * as styles from "./styles.module.scss"

export default function CategoryPicker({ name, categories, onChange }) {
  return (
    <ul className={styles.list}>
      {categories?.map(category => (
        <li key={category} className={styles.listItem}>
          <label htmlFor={category} className={styles.label}>
            <input
              id={category}
              type="checkbox"
              name="name"
              className={styles.input}
              value={category}
              onChange={() => onChange(category)}
            />
            {category}
          </label>
        </li>
      ))}
    </ul>
  )
}
