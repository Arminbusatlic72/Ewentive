import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
// import MenuItem from "./MenuItem";
import Icon from "./Icon";
import footerBottomStyles from "./footerBottom.module.scss";
const FooterBottom = () => {
  const data = useStaticQuery(graphql`
    query {
      allPrismicHeaderMenu {
        edges {
          node {
            data {
              body {
                items {
                  footer_link_capture
                  footer_link {
                    uid
                    id
                  }
                  social_icon
                  social_link {
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
  console.log(data);

  return (
    <div className={footerBottomStyles.footer__bottom}>
      <ul className={footerBottomStyles.footer_menu}>
        {data.allPrismicHeaderMenu.edges[0].node.data.body[0].items.map(
          (item) => (
            <li
              className={footerBottomStyles.footer_nav_item}
              key={item.social_name}
            >
              {item.footer_link.uid === null ? (
                <span className={footerBottomStyles.footer_nav_link}>
                  {item.footer_link_capture}
                </span>
              ) : (
                <Link
                  className={footerBottomStyles.footer_nav_link}
                  to={`/${item.footer_link.uid}`}
                >
                  <span>{item.footer_link_capture}</span>
                </Link>
              )}
            </li>
          )
        )}
      </ul>

      <ul className={footerBottomStyles.social_media_menu}>
        {data.allPrismicHeaderMenu.edges[0].node.data.body[1].items.map(
          (item) => (
            <Icon menuData={item} key={item.social_name} />
          )
        )}
      </ul>
    </div>
  );
};
export default FooterBottom;
