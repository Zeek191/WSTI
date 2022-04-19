import React from "react"
import Hero from "@/components/sections/Hero"
import Products from "@/components/sections/Products"
import Seo from "@/components/sections/Seo/Seo"
import Header from "../../sections/Header/Header"
import "@/base/styles/main.scss"

const Components = {
  section_hero: Hero,
  section_products: Products,
}

function renderComponents(component, props) {
  const Component = Components[component]
  if (!Component) return <p>COMPONENT [ {component} ] DOESN'T EXIST</p>
  return <Component {...props} />
}

export default function Main({ pageContext, location }) {
  const { blok } = pageContext || {}
  const content = JSON.parse(blok)

  if (!content || !Array.isArray(content.body) || !content.body.length)
    return null

  console.log(location)
  return (
    <div>
      <Header />
      {content.body?.map(({ component, ...props }) =>
        renderComponents(component, props)
      )}
      <Seo
        meta_description="Home page of sample site created in Gatsby. It's a part of project created special for WSTI"
        title="WSTI Praca Inzynierska"
        og_url={location.href}
      />
    </div>
  )
}
