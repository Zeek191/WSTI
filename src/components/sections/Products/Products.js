import React, { useState, useEffect } from "react"
import fetchAndSave from "@/base/helpers/fetchAndSave"
import CategoryPicker from "@/components/modules/CategoryPicker"
import ProductsGrid from "../../modules/ProductsGrid/ProductsGrid"
import Search from "../../elements/Search/Search"
import * as styles from "./styles.module.scss"

const ALL_PRODUCTS = "./products.json"
const ALL_CATEGORIES = "./categories.json"

export default function Products({ category_label }) {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [search, setSearchValue] = useState("")

  const [selectedCategories, setSelectedCategories] = useState([])

  function changeCategories(value) {
    const indexOfValue = selectedCategories.indexOf(value)
    if (indexOfValue === -1)
      return setSelectedCategories([...selectedCategories, value])

    const arrWithoutIndex = selectedCategories.filter(function (item) {
      return item !== value
    })

    return setSelectedCategories(arrWithoutIndex)
  }

  function changeProducts(products) {
    // IMPROVE
    const filteredProducts = products.filter(product => {
      if (selectedCategories.includes(product.category)) return product
    })

    const filteredProductsResults = filteredProducts.length
      ? filteredProducts
      : products

    // IMPROVE
    const filteredBySearchProducts = filteredProductsResults.filter(product =>
      product.title.toLowerCase().includes(search)
    )

    return setProducts(filteredBySearchProducts)
  }

  useEffect(() => {
    fetchAndSave(ALL_CATEGORIES, setCategories)
  }, [])

  useEffect(() => {
    fetchAndSave(ALL_PRODUCTS, changeProducts)
  }, [selectedCategories, search])

  if (!categories || !products) return null
  return (
    <div className="container" id="#section_products">
      <div className="row">
        <div className={styles.content}>
          <div className={`col-md-3`}>
            <div className={styles.filtersWrapper}>
              <Search
                id="search"
                name="search"
                label="Look for your product!"
                placeholder="Search..."
                value={search}
                onChange={e => setSearchValue(e.target.value)}
              />
              <div className={styles.categoryWrapper}>
                <h3>{category_label}</h3>
                <CategoryPicker
                  name="filters"
                  categories={categories}
                  onChange={changeCategories}
                />
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <ProductsGrid products={products} categories={selectedCategories} />
          </div>
        </div>
      </div>
    </div>
  )
}
