import React from "react";
import iconItemStyles from "./listPageIconItem.module.scss";
import { Link } from "gatsby";
import Dotdotdot from "react-dotdotdot";
const ListPageIconItem = (props) => {
  let item = props.cardData;

  return (
    <figure className={iconItemStyles.iconItem__card}>
      <i className={`fas fa-3x ${item.icon_font_awesome}`}></i>

      <h3>{item.content_item.document.data.content_title.text}</h3>
      <Dotdotdot clamp={3}>
        <p>{item.content_item.document.data.short_description.text}</p>
      </Dotdotdot>
      <Link
        className={iconItemStyles.section__link}
        to={`/${item.content_item.uid}`}
      >
        {item.link_caption}
      </Link>
      <a href="{item.link_to_recording_or_past_event.url}">See more</a>
    </figure>
  );
};
export default ListPageIconItem;
