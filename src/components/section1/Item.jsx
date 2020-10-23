import React from "react";
import {graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image"
import Button from "../button/Button";
import itemStyles from "./item.module.scss";
const Item = () => {
   
  const data = useStaticQuery(graphql`
  query{
    allPrismicIndexPage {
    edges {
      node {
        data {
          body {
            ... on PrismicIndexPageBodySection11 {
              id
              items {
                cta_button_caption
                cta_link {
                  url
                }
                top_image {
                  localFile {
                    childImageSharp {
                  fluid(quality: 90, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
                  }
                }
                content_item {
                  id
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
    
// console.log(data); 
    return (
        <>
        {data.allPrismicIndexPage.edges[0].node.data.body[1].items.map(item => (
        
         
            <figure className={itemStyles.card__item} >
              <Img className={itemStyles.img} key={item.content_item.id} fluid={item.top_image.localFile.childImageSharp.fluid} alt={item.top_image.alt} />
              <div className={itemStyles.item__body}>
              <p>Website development and integration with CRM and analytics.
										</p>
                    <h4>hands-on consulting</h4>
               <Button link={item.cta_link.url} >{item.cta_button_caption}</Button>
               </div>

            </figure>

          
       




      )

      )}
        
        </>
    )
}
export default Item