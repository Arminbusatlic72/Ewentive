import React from "react"
import Layout from "../components/layout/Layout"
import ButtonMd from "../components/button/ButtonMd"
import Styles from './404.module.scss'
const NotFound = () => {
  return (
    <Layout>
     
      <main>
        <div className={Styles.container}>
          <div className={Styles.text__wrapp}>
            <h1 className={Styles.heading}>404</h1>
            <p className={Styles.paragraph}>Page not found</p>
            <ButtonMd link={`/`}>Go home</ButtonMd>

          </div>
        </div>
      </main>
    </Layout>
  )
}
export default NotFound
