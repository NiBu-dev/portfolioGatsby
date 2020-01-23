import React from "react"

import Layout from "../hoc/layout"
import SEO from "../components/seo"
import PresentationComponent from "../components/presentation/presentation";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PresentationComponent />
  </Layout>
)

export default IndexPage
