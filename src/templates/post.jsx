import React from "react";
import { graphql } from "gatsby";
import { withPreview } from "gatsby-source-prismic";
import Layout from "../components/layout/Layout";
import Head from "../components/head/Head";
import postStyles from "./post.module.scss";
const Post = ({ data: { prismicContentItem } }) => {
  const { data } = prismicContentItem;

  return (
    <React.Fragment>
      <Layout>
        <Head title={data.content_title.text} />
        <main>
          <div className={postStyles.content_item__container}>
            <p>{data.activity_type1}</p>

            <div dangerouslySetInnerHTML={{ __html: data.benefits.html }} />
            <div dangerouslySetInnerHTML={{ __html: data.content_name.html }} />

            <div dangerouslySetInnerHTML={{ __html: data.deliverable.html }} />
            <div
              dangerouslySetInnerHTML={{
                __html: data.long_description.html,
              }}
            />
            <div dangerouslySetInnerHTML={{ __html: data.quote.html }} />
            <div
              dangerouslySetInnerHTML={{
                __html: data.short_description.html,
              }}
            />
            <div dangerouslySetInnerHTML={{ __html: data.subtitle.html }} />
            <div dangerouslySetInnerHTML={{ __html: data.tag_line.html }} />
          </div>
        </main>
      </Layout>
    </React.Fragment>
  );
};
export default withPreview(Post);
export const pageQuery = graphql`
  query PriscmicContentItemBySlug($uid: String!) {
    prismicContentItem(uid: { eq: $uid }) {
      uid
      data {
        activity_type1
        benefits {
          html
        }
        content_name {
          html
        }
        content_title {
          text
          html
        }
        deliverable {
          html
        }
        long_description {
          html
        }
        quote {
          html
        }
        short_description {
          html
        }
        subtitle {
          html
        }
        tag_line {
          html
        }
      }
    }
  }
`;
