import React from "react"

export default function Section({ children }) {
  return (
    <div className="container">
      <div className="row">{children}</div>
    </div>
  )
}
