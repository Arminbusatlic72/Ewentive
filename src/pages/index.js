import React from "react"
import { withPreview } from 'gatsby-source-prismic'
import Layout from "../components/layout/Layout"
import Head from "../components/head/Head"
import HeadingSection from "../components/indexPageSections/indexPageheadingSection/HeadingSection"
import Section1 from "../components/indexPageSections/indexPagesection1/Section1"
import Section2 from "../components/indexPageSections/indexPagesection2/Section2"
import { graphql, useStaticQuery } from "gatsby"
import { PopupWidget } from "react-calendly";




const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query  {
    allPrismicIndexPage {
      edges {
        node {
          data {
            meta_description
            meta_keywords
            meta_robot_noindex
            meta_title
            page_name {
              text
            }
          }
        }
      }
    }
  
  }
  
  `)
  
 
  
  const seoData = data.allPrismicIndexPage.edges[0].node.data
  

  return( <>
    <Layout>
      <Head metaData={seoData}/>
      <main>
      <HeadingSection />
      
      <Section1 />
      <Section2 />
      <PopupWidget
          text="Schedule time for a quick chat (max 30 min)"
          url="https://calendly.com/ewentive/30min"
          textColor="#ffffff"
          color='#4d5055'
          
        />
      
        
    </main>
      </Layout></>)
}
export default withPreview(IndexPage) 
