import React from "react";
import iconItemStyles from "./listPageIconItem.module.scss";
const ListPageIconItem = (props) => {
  let item = props.cardData;

  return (
    <>
      <figure className={iconItemStyles.iconItem__card}>
        <i className={`fas fa-3x ${item.icon_font_awesome}`}></i>
        <h3>{item.content_item.slug}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          quibusdam voluptates eaque nostrum voluptate modi repellat quas
          asperiores non sapiente illum impedit voluptatum vero dolor
          exercitationem ipsam harum, porro cumque?
        </p>
        <a
          className={iconItemStyles.section__link}
          href={`/${item.link_to_recording_or_past_event.url}`}
        >
          Read more...
        </a>
      </figure>
    </>
  );
};
export default ListPageIconItem;
