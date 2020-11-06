import React from "react"
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
export default IndexPage
