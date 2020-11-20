import React from "react";
import contentItemStyles from "./contentItem.module.scss";
import { Link } from "gatsby";
import Dotdotdot from "react-dotdotdot";
const ContentItem = (props) => {
  let item = props.cardData;

  return (
    <>
      <figure className={contentItemStyles.iconItem__card}>
        <i className={`fas fa-3x ${item.font_awesome}`}></i>
        <h3>{item.content_item_link.document.data.content_title.text}</h3>
        <Dotdotdot clamp={3}>
          <p>{item.content_item_link.document.data.short_description.text}</p>
        </Dotdotdot>
        <Link
          className={contentItemStyles.section__link}
          to={`/${item.link_to_detail_page.uid}`}
        >
          {item.link_caption}
        </Link>
      </figure>
    </>
  );
};
export default ContentItem;
