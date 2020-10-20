import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby'

import menuStyles from './menu.module.scss'
const Menu =()=> {
    const data = useStaticQuery(graphql`
query  {
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
                id
                url
              }
            }
          }
        }
      }
    }
  }
  }
  
`)
// console.log(data);

    return (
        <>
        <nav>
        
        <ul className={menuStyles.nav_list}>
          {data.allPrismicHeaderMenu.edges[0].node.data.body[0].items.map((item)=> {
            return(
              <li className={menuStyles.nav_item} key={item.link_name.id}>
              <Link className={menuStyles.nav_link} to={item.path.url} key={item.link_name.id}>
              
                {item.link_name[0].text}
               
                </Link>
                </li>
            )
          })}
       
                   
                </ul>
            </nav>
            </>
    )
}
export default Menu
