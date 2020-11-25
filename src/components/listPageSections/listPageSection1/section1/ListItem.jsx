import React from "react";
import listItemStyles from "./listItem.module.scss";
import Imgix from "react-imgix";
import ExternalButton from "../../../button/ExternalButton";

const ListItem = (props) => {
  let item = props.cardData;
  const imageData = item.top_image ? item.top_image.url : null;
  return (
    <>
      <figure className={listItemStyles.card__item}>
        {imageData !== null && (
          <Imgix
            className={listItemStyles.img}
            src={imageData}
            imgixParams={{ w: 400, h: 400 }}
            sizes="calc(10% - 10px)"
            fit="clip"
            alt={item.top_image.alt}
          />
        )}
        <div className={listItemStyles.item__body}>
          <p>{item.content_item.document.data.date_of_event}</p>
          <p>{item.content_item.document.data.place.text}</p>
          <h4>{item.content_item.document.data.content_title.text}</h4>
          <p>{item.content_item.document.data.activity_type1}</p>
          <ExternalButton link={item.subscribe_button.url}>
            {item.cta_subscribe_button_caption}
          </ExternalButton>
        </div>
      </figure>
    </>
  );
};
export default ListItem;
