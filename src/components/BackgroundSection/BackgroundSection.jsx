import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import backgroundSectionStyles from "./backgroundSection.module.scss";
import Img from "gatsby-image";

const BackgroundSection = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      allPrismicIndexPage {
        edges {
          node {
            id
            data {
              background_image {
                localFile {
                  childImageSharp {
                    fluid(quality: 90, maxWidth: 1920) {
                      ...GatsbyImageSharpFluid_withWebp
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

  const imageData = data.allPrismicIndexPage.edges[0].node.data.background_image
    .localFile
    ? data.allPrismicIndexPage.edges[0].node.data.background_image.localFile
        .childImageSharp.fluid
    : null;

  return (
    <>
      {imageData !== null && (
        <Img
          className={backgroundSectionStyles.backgroundSection}
          fluid={imageData}
          backgroundColor={`#040e18`}
          alt="ewentive-bcg-image"
        />
      )}
    </>
  );
};

export default BackgroundSection;
