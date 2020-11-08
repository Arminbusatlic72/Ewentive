import React from "react";
import { graphql } from "gatsby";
import { withPreview } from "gatsby-source-prismic";
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
            <section className={postStyles.section}>
              <p>
                {
                  data.body[0].items[0].no_sidebar_content.document.data
                    .activity_type1
                }
              </p>

              <div
                dangerouslySetInnerHTML={{
                  __html:
                    data.body[0].items[0].no_sidebar_content.document.data
                      .benefits.html,
                }}
              />
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    data.body[0].items[0].no_sidebar_content.document.data
                      .content_name.html,
                }}
              />

              <div
                dangerouslySetInnerHTML={{
                  __html:
                    data.body[0].items[0].no_sidebar_content.document.data
                      .deliverable.html,
                }}
              />
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    data.body[0].items[0].no_sidebar_content.document.data
                      .long_description.html,
                }}
              />
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    data.body[0].items[0].no_sidebar_content.document.data.quote
                      .html,
                }}
              />
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    data.body[0].items[0].no_sidebar_content.document.data
                      .short_description.html,
                }}
              />
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    data.body[0].items[0].no_sidebar_content.document.data
                      .subtitle.html,
                }}
              />
            </section>
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
export default withPreview(NoSideBarPost);
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
                document {
                  ... on PrismicContentItem {
                    id
                    data {
                      content_type
                      activity_type1
                      date_of_event(fromNow: false)
                      time_of_event
                      duration_in_hours
                      benefits {
                        html
                      }
                      content_name {
                        html
                      }
                      content_title {
                        html
                      }
                      deliverable {
                        html
                      }
                      long_description {
                        html
                      }
                      place {
                        html
                      }
                      quote {
                        html
                      }
                      short_description {
                        html
                      }
                      subscribe_link {
                        uid
                      }
                      subtitle {
                        html
                      }
                    }
                  }
                }
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
