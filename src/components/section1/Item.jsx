import React from "react";

import itemStyles from "./item.module.scss";
import Img from "gatsby-image";
import Button from "../button/Button";

const Item = (props) => {
  let item = props.cardData;
  console.log(item);
  return (
    <>
      <figure className={itemStyles.card__item}>
        <Img
          className={itemStyles.img}
          fluid={item.top_image.localFile.childImageSharp.fluid}
          alt={item.top_image.alt}
        />
        <div className={itemStyles.item__body}>
          <p>Website development and integration with CRM and analytics.</p>
          <h4>hands-on consulting</h4>
          <Button link={item.cta_link.url}>{item.cta_button_caption}</Button>
        </div>
      </figure>
    </>
  );
};
export default Item;
