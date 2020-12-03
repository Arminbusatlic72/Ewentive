import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Menu from "../menu/Menu";
import headerStyles from "./header.module.scss";
import Logo from "../../assets/EWENTIVE-logo.svg";
const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      allPrismicIndexPage {
        edges {
          node {
            data {
              title {
                text
              }
            }
          }
        }
      }
    }
  `);

  let title = data.allPrismicIndexPage.edges[0].node.data.title.text;
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.mobile__header}>
        <Link className={headerStyles.logo} to="/">
          <div className={headerStyles.header_logo_wrapper}>
            <Logo className={headerStyles.logo_svg} />
            <h1>
              {title} <span>by Ewentive</span>
            </h1>
          </div>
        </Link>
      </div>
      <Menu />
    </header>
  );
};

export default Header;
