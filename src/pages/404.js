import React from "react"

import Layout from "../hoc/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="error-container">
      <h1 className="error-header">NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness is immeasurable.</p>
    </div>
  </Layout>
)

export default NotFoundPage
