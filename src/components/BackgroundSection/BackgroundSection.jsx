import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import backgrounSectionStyles from "./backgroundSection.module.scss";
import BackgroundImage from "gatsby-background-image";

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
  const imageData =
    data.allPrismicIndexPage.edges[0].node.data.background_image.localFile
      .childImageSharp.fluid;

  return (
    <BackgroundImage
      Tag="section"
      className={backgrounSectionStyles.backgroundSection}
      fluid={imageData}
      backgroundColor={`#040e18`}
    ></BackgroundImage>
  );
};

export default BackgroundSection;
