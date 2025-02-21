import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import section1Styles from "./section1.module.scss";
import ListItem from "./ListItem";
const Section1 = () => {
  const data = useStaticQuery(graphql`
    query {
      allPrismicListPage {
        edges {
          node {
            data {
              list_page_title {
                html
              }
              body {
                ... on PrismicListPageBodyListOfContentItems {
                  id
                  items {
                    top_image {
                      alt
                      url(imgixParams: { width: 400 })
                    }

                    content_item {
                      document {
                        ... on PrismicContentItem {
                          id
                          data {
                            date_of_event(formatString: "LL")
                            content_title {
                              text
                            }
                            place {
                              text
                            }
                            activity_type1
                          }
                        }
                      }
                    }
                    cta_subscribe_button_caption
                    subscribe_button {
                      url
                      slug
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
        <div className={section1Styles.heading_wrapp}>
          <div
            dangerouslySetInnerHTML={{
              __html:
                data.allPrismicListPage.edges[0].node.data.list_page_title.html,
            }}
          />
        </div>

        <div className={section1Styles.item__wrapp_emulated_flex_gap}>
          {data.allPrismicListPage.edges[0].node.data.body[0].items.map(
            (item) => (
              <ListItem cardData={item} key={item.content_item.id} />
            )
          )}
        </div>
      </section>
    </div>
  );
};
export default Section1;
