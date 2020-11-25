import React from "react";
import buttonStyles from "./button.module.scss";

const ExternalButton = (props) => {
  return (
    <a className={buttonStyles.btn} href={props.link}>
      {props.children}
    </a>
  );
};
export default ExternalButton;
