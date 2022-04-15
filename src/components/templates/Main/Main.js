import React from "react"
import Hero from "@/components/sections/Hero"
import Products from "@/components/sections/Products"

import "@/base/styles/main.scss"
import Header from "../../sections/Header/Header"

const Components = {
  section_hero: Hero,
  section_products: Products,
}

function renderComponents(component, props) {
  const Component = Components[component]
  if (!Component) return <p>COMPONENT [ {component} ] DOESN'T EXIST</p>
  return <Component {...props} />
}

export default function Main({ pageContext }) {
  const { blok } = pageContext || {}
  const content = JSON.parse(blok)

  if (!content || !Array.isArray(content.body) || !content.body.length)
    return null

  return (
    <div>
      <Header />
      {content.body?.map(({ component, ...props }) =>
        renderComponents(component, props)
      )}
    </div>
  )
}
