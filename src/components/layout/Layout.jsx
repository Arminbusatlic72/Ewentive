import React from "react"
import Header from "../header/Header"
import Footer from "../footer/Footer"
import layoutStyles from './layout.module.scss'
import "../../styles/index.scss"
import BackgroundSection from '../BackgroundSection/BackgroundSection'
const Layout = props => {
  return (
    <div className={layoutStyles.wrapper}>
      <BackgroundSection/>
      
    <div className={layoutStyles.container}>

      
        <Header />
        <div className={layoutStyles.content}>
        {props.children}
        </div>
        </div>
      <Footer />
      
      
    </div>
    
  )
}
export default Layout