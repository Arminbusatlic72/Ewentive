import React, { useState } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import menuStyles from "./menu.module.scss";
const Menu = () => {
  const data = useStaticQuery(graphql`
    query {
      allPrismicHeaderMenu {
        edges {
          node {
            data {
              body {
                items {
                  link_name {
                    text
                  }
                  path {
                    uid
                    id
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const [open, setOpen] = useState(false);
  return (
    <>
      <nav>
        <div className={menuStyles.nav_Wrapp}>
          <div
            className={menuStyles.btn}
            onClick={() => setOpen(!open)}
            onKeyDown={() => setOpen(!open)}
            role="button"
            tabIndex="0"
          >
            <div className={menuStyles.line}></div>
            <div className={menuStyles.line}></div>
            <div className={menuStyles.line}></div>
          </div>

          <ul
            className={
              open === true
                ? menuStyles.navNarrow
                : `${menuStyles.navNarrow} ${menuStyles.isClosed}`
            }
          >
            <div
              className={menuStyles.btn1}
              onClick={() => setOpen(!open)}
              onKeyDown={() => setOpen(!open)}
              role="button"
              tabIndex="0"
            >
              <div className={menuStyles.line}></div>
              <div className={menuStyles.line}></div>
            </div>

            {data.allPrismicHeaderMenu.edges[1].node.data.body[0].items.map(
              (item) => {
                return (
                  <li className={menuStyles.nav_item} key={item.path.id}>
                    <Link
                      className={menuStyles.nav_link}
                      to={`/${
                        item.path.uid !== "index-page" ? item.path.uid : ""
                      }`}
                    >
                      {item.link_name[0].text}
                    </Link>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Menu;
