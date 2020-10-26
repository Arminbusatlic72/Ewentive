import React from "react";
import buttonStyles from "./buttonMd.module.scss";
import { Link } from "gatsby";

const ButtonMd = (props) => {
  return (
    <Link className={buttonStyles.btn_md} to={props.link}>
      {props.children}
    </Link>
  );
};
export default ButtonMd;
