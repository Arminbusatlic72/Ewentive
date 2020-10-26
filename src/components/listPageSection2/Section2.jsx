import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import section2Styles from "./section2.module.scss";
import ListPageIconItem from "./section2/ListPageIconItem";
const Section2 = () => {
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
                ... on PrismicListPageBodyListOfPastEvents {
                  id
                  items {
                    content_item {
                      id
                      slug
                    }
                    icon_font_awesome
                    link_caption
                    link_to_recording_or_past_event {
                      url
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
