import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import section2Styles from "./section2.module.scss";
import ListPageIconItem from "./contentItem/ListPageIconItem";
const Section2 = () => {
  const data = useStaticQuery(graphql`
    query {
      allPrismicListPage {
        edges {
          node {
            data {
              body {
                ... on PrismicListPageBodyListOfPastEvents {
                  id
                  items {
                    icon_font_awesome
                    link_caption
                    link_to_recording_or_past_event {
                      uid
                    }
                    link_to_recording_or_past_event {
                      url
                    }
                    content_item {
                      uid
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
      }
    }
  `);

  return (
    <div>
      <section className={section2Styles.section2}>
        <div className={section2Styles.item__wrapp}>
          {data.allPrismicListPage.edges[0].node.data.body[1].items.map(
            (item) => (
              <ListPageIconItem cardData={item} key={item.content_item.id} />
            )
          )}
        </div>
      </section>
    </div>
  );
};
export default Section2;
