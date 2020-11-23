import React from "react";
import Dotdotdot from "react-dotdotdot";
import itemStyles from "./item.module.scss";
import Imgix from "react-imgix";
import Button from "../../button/Button";

const Item = (props) => {
  let item = props.cardData;
  const imageData = item.top_image ? item.top_image.url : null;
  return (
    <>
      <figure className={itemStyles.card__item}>
        {imageData !== null && (
          <Imgix
            className={itemStyles.img}
            src={imageData}
            alt={item.top_image.alt}
          />
        )}
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
          <Button link={item.link_to_page.uid}>
            {item.cta_button_caption}
          </Button>
        </div>
      </figure>
    </>
  );
};
export default Item;
