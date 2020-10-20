import React from "react"
import footerStyles from "./footer.module.scss"
import FooterBottom from "./footer-bottom/Footer-bottom"
import FooterTop from "./footer-top/Footer-top"
const Footer = () => {
  return (
    <footer className={footerStyles.main__footer}>
      <FooterTop/>
      <FooterBottom/>
      
     
    </footer>
  )
}
export default Footer