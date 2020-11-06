import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ButtonMd from "../../button/ButtonMd";
import HeadingSectionStyles from "./headingSection.module.scss";
const HeadingSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allPrismicIndexPage {
        edges {
          node {
            data {
              body {
                ... on PrismicIndexPageBodySection1 {
                  id
                  primary {
                    title {
                      html
                    }
                  }
                  items {
                    cta_button_capture
                    cta_button_link {
                      uid
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
  console.log(data);

  const sectionData = data.allPrismicIndexPage.edges[0].node.data.body[0];

  return (
    <>
      <section className={HeadingSectionStyles.heading__section}>
        <div
          dangerouslySetInnerHTML={{ __html: sectionData.primary.title.html }}
        />
        <ButtonMd link={`/${sectionData.items[0].cta_button_link.uid}`}>
          {sectionData.items[0].cta_button_capture}
        </ButtonMd>
      </section>
    </>
  );
};
export default HeadingSection;
