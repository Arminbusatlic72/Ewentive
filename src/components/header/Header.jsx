import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Menu from "../menu/Menu";
import Imgix from "react-imgix";
import headerStyles from "./header.module.scss";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      allPrismicHeaderMenu {
        edges {
          node {
            data {
              body {
                primary {
                  logo {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  let logoData = data.allPrismicHeaderMenu.edges[0].node.data.body[0].primary
    .logo
    ? data.allPrismicHeaderMenu.edges[0].node.data.body[0].primary.logo.url
    : null;
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.mobile__header}>
        <Link className={headerStyles.logo} to="/">
          {logoData !== null ? (
            <Imgix
              className={headerStyles.logoImg}
              src={logoData}
              alt="ewentive_logo"
              sizes="calc(10% - 10px)"
            />
          ) : (
            <div>
              {" "}
              <h1>Marketing for small businesses</h1>
              <span>by Ewentive</span>
            </div>
          )}
        </Link>
      </div>
      <Menu />
    </header>
  );
};

export default Header;
