import React from "react"
import { withPreview } from 'gatsby-source-prismic'
import Layout from "../components/layout/Layout"
import Head from "../components/head/Head"
import Section1 from "../components/listPageSections/listPageSection1/section1/Section1"
import Section2 from "../components/listPageSections/listPageSection2/Section2"

export const query = graphql`
  query ListPageQuery {
    allPrismicListPage {
        edges {
          node {
            data {
              meta_description
              meta_keywords
              meta_title
              page_name {
                text
              }
            }
          }
        }
      }
  }
`
const List = ({data}) => {
console.log(data)
const seoData = data.allPrismicListPage.edges[0].node.data

    return(
        <>
        <Layout>
            <Head metaData={seoData}/>
            <main>
                <Section1/>
                <Section2 />

            </main>
        </Layout>
        </>
    )
}
export default withPreview(List)