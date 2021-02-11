import React from "react";
import { Link } from "gatsby";
import Menu from "../menu/Menu";
import headerStyles from "./header.module.scss";
// import Logo from "../../assets/EWENTIVE-logo-new.svg";
import Logo from "../../images/EWENTIVE-logo-new.png";
const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.mobile__header}>
        <Link className={headerStyles.logo} to="/">
          <div className={headerStyles.header_logo_wrapper}>
            <img className={headerStyles.logo} src={Logo} alt="logo" />
          </div>
        </Link>
      </div>
      <Menu />
    </header>
  );
};

export default Header;
