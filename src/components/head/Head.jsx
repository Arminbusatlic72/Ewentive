import React from "react";
import Helmet from "react-helmet";

const Head = (props) => {
  let metaData = props.metaData;

  return (
    <Helmet>
      <title>{`${metaData.page_name ? metaData.page_name.text : ""} | ${
        metaData.meta_title
      }`}</title>
      <meta name="title" content={metaData.meta_title} />
      <meta name="description" content={metaData.meta_description} />
      <meta name="keywords" content={metaData.meta_keywords} />
      <meta name="robots" content={metaData.meta_robot_noindex} />
    </Helmet>
  );
};
export default Head;
