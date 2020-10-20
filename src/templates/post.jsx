import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import postStyles from "./post.module.scss"
const Post = ({ data: { prismicContentItem } }) => {
  const { data } = prismicContentItem
  console.log(data)
  return (
    <React.Fragment>
      <Layout>
        <main>
          <div className={postStyles.content_item__container}>
     
      <div dangerouslySetInnerHTML={{ __html: data.activity_type.html }} />
      <div dangerouslySetInnerHTML={{ __html: data.benefits.html }} />
      <div dangerouslySetInnerHTML={{ __html: data.content_name.html }} />
      <div dangerouslySetInnerHTML={{ __html: data.content_title.html }} />
      <div dangerouslySetInnerHTML={{ __html: data.deliverable.html }} />
      <div dangerouslySetInnerHTML={{ __html: data.long_description.html }} />
      <div dangerouslySetInnerHTML={{ __html: data.quote.html }} />
      <div dangerouslySetInnerHTML={{ __html: data.short_description.html }} />
      <div dangerouslySetInnerHTML={{ __html: data.subtitle.html }} />
      <div dangerouslySetInnerHTML={{ __html: data.tag_line.html }} />
      </div>
      </main>
      </Layout>
    </React.Fragment>
  )
}
export default Post
export const pageQuery = graphql`
  query PriscmicContentItemBySlug($uid: String!) {
    prismicContentItem(uid: { eq: $uid }) {
      uid
      data {
        
          activity_type {
            html
          }
          benefits {
            html
            text
          }
          content_name {
            html
            text
          }
          content_title {
            html
            text
          }
          deliverable {
            html
            text
          }
          long_description {
            html
            text
          }
          quote {
            html
            text
          }
          short_description {
            html
            text
          }
          subtitle {
            text
          }
          tag_line {
            html
            text
          }
        
      }
    }
  }
`