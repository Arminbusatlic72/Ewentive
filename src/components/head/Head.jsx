import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      allPrismicIndexPage {
        edges {
          node {
            data {
              meta_description
              meta_keywords
              meta_robot_noindex
              meta_title
            }
          }
        }
      }
    }
  `);
  const metaData = data.allPrismicIndexPage.edges[0].node.data;

  return (
    <Helmet>
      <title>{`${title} | ${metaData.meta_title}`}</title>
      <meta name="title" content={metaData.meta_title} />
      <meta name="description" content={metaData.meta_description} />
      <meta name="keywords" content={metaData.meta_keywords} />
      <meta name="robots" content={metaData.meta_robot_noindex} />
    </Helmet>
  );
};
export default Head;
