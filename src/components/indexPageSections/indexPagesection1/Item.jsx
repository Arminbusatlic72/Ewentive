import React from "react";
import Dotdotdot from "react-dotdotdot";
import itemStyles from "./item.module.scss";
import Img from "gatsby-image";
import Button from "../../button/Button";

const Item = (props) => {
  let item = props.cardData;

  return (
    <>
      <figure className={itemStyles.card__item}>
        <Img
          className={itemStyles.img}
          fluid={item.top_image.localFile.childImageSharp.fluid}
          alt={item.top_image.alt}
        />
        <div className={itemStyles.item__body}>
          <Dotdotdot clamp={3}>
            <p>{item.content_item.document.data.short_description.text}</p>
          </Dotdotdot>
          <h4>
            {item.content_item.document.data.activity_type1 ? (
              item.content_item.document.data.activity_type1
            ) : (
              <span>&nbsp;</span>
            )}
          </h4>
          <Button link={item.content_item.uid}>
            {item.cta_button_caption}
          </Button>
        </div>
      </figure>
    </>
  );
};
export default Item;
