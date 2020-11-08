import React from "react"
import { withPreview } from 'gatsby-source-prismic'
import Layout from "../components/layout/Layout"
import Head from "../components/head/Head"
import HeadingSection from "../components/indexPageSections/indexPageheadingSection/HeadingSection"
import Section1 from "../components/indexPageSections/indexPagesection1/Section1"
import Section2 from "../components/indexPageSections/indexPagesection2/Section2"

const IndexPage = () => {
  
  
  
  return( <>
    <Layout>
      <Head title="Home" />
      <main>
      <HeadingSection />
      <Section1 />
      <Section2 />
        
    </main>
      </Layout></>)
}
export default withPreview(IndexPage) 
