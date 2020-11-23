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
              body {
                ... on PrismicListPageBodyListOfContentItems {
                  id
                  items {
                    top_image {
                      alt
                      url
                    }
                    cta_subscribe_button_caption
                    content_item {
                      id
                    }
                    subscribe_button {
                      slug
                    }
                  }
                }
              }
              list_page_title {
                html
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

        <div className={section1Styles.item__wrapp}>
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
