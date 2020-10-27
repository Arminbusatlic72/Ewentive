import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import section2Styles from "./section2.module.scss";
import IconItem from "./IconItem";
const Section1 = () => {
  const data = useStaticQuery(graphql`
    query {
      allPrismicIndexPage {
        edges {
          node {
            data {
              body {
                ... on PrismicIndexPageBodySection3 {
                  id
                  items {
                    extra_content {
                      id
                      uid
                      document {
                        ... on PrismicContentItem {
                          id
                          data {
                            short_description {
                              html
                              text
                            }
                            content_title {
                              html
                              text
                            }
                          }
                        }
                      }
                    }
                    link_to_detail {
                      id
                      slug
                    }
                    font_awesome_name
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
      <section className={section2Styles.section2}>
        <div className={section2Styles.item__wrapp}>
          {data.allPrismicIndexPage.edges[0].node.data.body[2].items.map(
            (item) => (
              <IconItem cardData={item} key={item.extra_content.id} />
            )
          )}
        </div>
      </section>
    </div>
  );
};
export default Section1;
