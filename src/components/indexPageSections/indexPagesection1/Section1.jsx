import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import section1Styles from "./section1.module.scss";
import Item from "./Item";

const Section1 = () => {
  const data = useStaticQuery(graphql`
    query {
      allPrismicIndexPage {
        edges {
          node {
            data {
              body {
                ... on PrismicIndexPageBodySection11 {
                  id
                  items {
                    cta_button_caption
                    link_to_page {
                      uid
                    }

                    top_image {
                      alt
                      localFile {
                        childImageSharp {
                          fluid(maxWidth: 600, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                        }
                      }
                    }
                    content_item {
                      id
                      slug
                      uid
                      document {
                        ... on PrismicContentItem {
                          data {
                            activity_type1
                            short_description {
                              html
                              text
                            }
                            content_title {
                              html
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
      }
    }
  `);

  return (
    <div>
      <section className={section1Styles.section1}>
        <div className={section1Styles.item__wrapp}>
          {data.allPrismicIndexPage.edges[0].node.data.body[1].items.map(
            (item) => (
              <Item cardData={item} key={item.content_item.id} />
            )
          )}
        </div>
      </section>
    </div>
  );
};
export default Section1;
