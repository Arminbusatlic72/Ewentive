import React from "react";
import { Link } from "gatsby";
import iconItemStyles from "./iconItem.module.scss";
const IconItem = (props) => {
  let item = props.cardData;
  return (
    <figure
      className={iconItemStyles.iconItem__card}
      key={item.link_to_detail.id}
    >
      <i className={`fas fa-3x ${item.font_awesome_name}`}></i>
      <h3>{item.extra_content.document.data.content_title.text}</h3>
      <p>{item.extra_content.document.data.short_description.text}</p>
      <Link
        className={iconItemStyles.section__link}
        to={`/${item.link_to_detail.uid}`}
      >
        {item.link_caption + `...`}
      </Link>
    </figure>
  );
};
export default IconItem;
