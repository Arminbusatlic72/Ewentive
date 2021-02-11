import React from "react";
import { Link } from "gatsby";
import Menu from "../menu/Menu";
import headerStyles from "./header.module.scss";
import Logo from "../../assets/EwentiveLogo3.svg";

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.mobile__header}>
        <Link className={headerStyles.logo} to="/">
          <div className={headerStyles.header_logo_wrapper}>
            <Logo className={headerStyles.logo} />
          </div>
        </Link>
      </div>
      <Menu />
    </header>
  );
};

export default Header;
