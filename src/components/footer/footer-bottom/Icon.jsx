import React from "react";

const Icon = (props) => {
  let item = props.menuData;

  return (
    <li>
      <a href={item.social_link.url} target="_blank" rel="noopener noreferrer">
        <i className={`fab fa-1x ${item.social_icon}`}></i>
      </a>
    </li>
  );
};
export default Icon;
