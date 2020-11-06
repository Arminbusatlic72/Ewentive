import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/Layout";
import postStyles from "./post.module.scss";
import ContentItem from "../components/no_sidebar_post_contentItem/ContentItem";
const NoSideBarPost = ({ data: { prismicNoSidebarPage } }) => {
  const { data } = prismicNoSidebarPage;

  return (
    <React.Fragment>
      <Layout>
        <main>
          <div className={postStyles.content_item__container}>
            <h1>{data.body[0].items[0].no_sidebar_content.uid}</h1>
          </div>
          <section className={postStyles.section}>
            <div className={postStyles.item__wrapp}>
              {data.body[1].items.map((item) => (
                <ContentItem cardData={item} key={item.content_item_link.id} />
              ))}
            </div>
          </section>
        </main>
      </Layout>
    </React.Fragment>
  );
};
export default NoSideBarPost;
export const pageQuery = graphql`
  query MyQuery($uid: String!) {
    prismicNoSidebarPage(uid: { eq: $uid }) {
      id
      data {
        body {
          ... on PrismicNoSidebarPageBodySection1 {
            id
            items {
              no_sidebar_content {
                uid
                slug
              }
            }
          }
          ... on PrismicNoSidebarPageBodySection2 {
            id
            items {
              font_awesome
              link_caption
              content_item_link {
                uid
                id
                document {
                  ... on PrismicContentItem {
                    id
                    data {
                      content_title {
                        text
                      }
                      short_description {
                        text
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
