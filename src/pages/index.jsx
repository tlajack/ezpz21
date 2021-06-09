import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import { StaticImage } from "gatsby-plugin-image"
import { container, intro, callOut } from "./index.module.css"

export const query = graphql`
  query {
    shopifyCollection {
      products {
        ...ProductCard
      }
    }
  }
`
export default function IndexPage({ data }) {
  return (
    <Layout>
      <div className={container}>
        <h1 className={intro}>Welcome to Easy Peasy Patches store.</h1>
        <p className={callOut}>
          Easy Peasy Patches are fun, permanent, stick-on fabric patches. Just
          Peel, Stick &amp; Wear! No Ironing. No Sewing. These patches are
          fantastic to personalizing, accessorizing or mending ANYTHING! Easy
          Peasy Patches stick to clothing, backpacks, water bottles, ipods,
          bikes, computer cases and sporting gear…the uses are endless!
        </p>
        <StaticImage src="../images/banner-1.jpg" alt="A dinosaur" />
      </div>
      <ProductListing products={data.shopifyCollection.products} />
    </Layout>
  )
}
