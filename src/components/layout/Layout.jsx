import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import layoutStyles from "./layout.module.scss";
import "../../styles/index.scss";
import BackgroundSection from "../BackgroundSection/BackgroundSection";
import CookieConsent from "react-cookie-consent";
import { PopupWidget } from "react-calendly";

const Layout = (props) => {
  return (
    <div className={layoutStyles.wrapper}>
      <div className={layoutStyles.container}>
        <Header />
        <BackgroundSection />
        <div className={layoutStyles.content}>{props.children}</div>
        <PopupWidget
          text="Schedule time for a quick chat (max 30 min)"
          url="https://calendly.com/ewentive/30min"
          textColor="#ffffff"
          color="#4d5055"
        />
      </div>
      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="gatsby-gdpr-google-tagmanager"
      >
        This website uses cookies We use cookies to personalise content and ads,
        to provide social media features and to analyse our traffic. We also
        share information about your use of our site with our social media,
        advertising and analytics partners who may combine it with other
        information that you’ve provided to them or that they’ve collected from
        your use of their services
      </CookieConsent>
    </div>
  );
};
export default Layout;
