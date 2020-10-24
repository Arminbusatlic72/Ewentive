import React from "react";
import footerTopStyles from "./footerTop.module.scss";
import ContactForm from "../footer-bottom/ContactForm";
const FooterTop = () => {
  return (
    <div className={footerTopStyles.footer__top}>
      <div className={footerTopStyles.container}>
        <header className={footerTopStyles.footer__header}>
          <h2>Contact us</h2>
          <span>share business information</span>
        </header>
        <ContactForm />
      </div>
    </div>
  );
};
export default FooterTop;
