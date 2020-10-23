import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import iconItemStyles from './iconItem.module.scss';
const IconItem = () => {
    const data = useStaticQuery(graphql`
    query {
        allPrismicIndexPage {
            edges {
              node {
                data {
                  body {
                    ... on PrismicIndexPageBodySection3 {
                      id
                      items {
                        extra_content {
                          uid
                        }
                        link_to_detail {
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
          }
    }
    
    `)
    console.log(data);
    return(
        <>
        {data.allPrismicIndexPage.edges[0].node.data.body[2].items.map(item => (
        
         
            <figure className={iconItemStyles.iconItem__card} >
                <i className="fas fa-3x fa-leaf"></i>
              <h3>{item.extra_content.uid}</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quibusdam voluptates eaque nostrum voluptate modi repellat quas asperiores non sapiente illum impedit voluptatum vero dolor exercitationem ipsam harum, porro cumque?</p>
              <Link className={iconItemStyles.section__link}to={item.link_to_detail.url}>Read more...</Link>

            </figure>

          


      )

      )}
        
        </>
        
    )
}
export default IconItem