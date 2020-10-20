import React from "react"
import Layout from "../components/layout/Layout"
// import { graphql, useStaticQuery } from "gatsby"

// import indexStlye from "./index.module.scss"
import HeadingSection from "../components/headingSection/HeadingSection"
import Section1 from "../components/section1/Section1"

const IndexPage = () => {
  
  
  
  return( <>
    <Layout>
      <main>
      <HeadingSection />
      <Section1 />
        
    </main>
      </Layout></>)
}
export default IndexPage

