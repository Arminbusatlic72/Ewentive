import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import backgroundSectionStyles from "./backgroundSection.module.scss";
import { Background } from "react-imgix";

const BackgroundSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allPrismicIndexPage {
        edges {
          node {
            data {
              background_image {
                url(imgixParams: { maxWidth: 1920, h: 500 })
              }
            }
          }
        }
      }
    }
  `);

  const imageData = data.allPrismicIndexPage.edges[0].node.data.background_image
    ? data.allPrismicIndexPage.edges[0].node.data.background_image.url
    : null;

  return (
    <>
      {imageData !== null && (
        <Background
          src={imageData}
          imgixParams={{ w: 1920, h: 500 }}
          className={backgroundSectionStyles.backgroundSection}
        ></Background>
      )}
    </>
  );
};

export default BackgroundSection;
