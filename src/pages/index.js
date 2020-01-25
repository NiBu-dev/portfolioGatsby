import React from "react"

import Layout from "../hoc/layout"
import SEO from "../components/seo"
import PresentationComponent from "../components/presentation/presentation";
import WorkComponent from "../components/work/work";
import ContactComponent from "../components/contact/contact";

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <PresentationComponent />
    <WorkComponent />
    <ContactComponent />
  </Layout>
)

export default IndexPage
