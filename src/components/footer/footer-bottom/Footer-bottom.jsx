import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

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

  return (
    <div className={footerBottomStyles.footer__bottom}>
      <p>
        {data.allPrismicHeaderMenu.edges[0].node.data.body[0].items[0]
          .footer_link_capture + ` `}
        <Link
          to={`/${data.allPrismicHeaderMenu.edges[0].node.data.body[0].items[1].footer_link.uid}`}
        >
          <span>
            {
              data.allPrismicHeaderMenu.edges[0].node.data.body[0].items[1]
                .footer_link_capture
            }
          </span>
        </Link>
      </p>
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
