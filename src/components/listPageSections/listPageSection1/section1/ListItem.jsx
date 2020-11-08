import React from "react";

import listItemStyles from "./listItem.module.scss";
import Img from "gatsby-image";
import Button from "../../../button/Button";

const ListItem = (props) => {
  let item = props.cardData;
  const imageData = item.top_image.localFile
    ? item.top_image.localFile.childImageSharp.fluid
    : null;
  return (
    <>
      <figure className={listItemStyles.card__item}>
        {imageData !== null && (
          <Img
            className={listItemStyles.img}
            fluid={imageData}
            alt={item.top_image.alt}
          />
        )}
        <div className={listItemStyles.item__body}>
          <p>Website development and integration with CRM and analytics.</p>
          <h4>hands-on consulting</h4>
          <Button link={item.subscribe_button.slug}>
            {item.cta_subscribe_button_caption}
          </Button>
        </div>
      </figure>
    </>
  );
};
export default ListItem;
