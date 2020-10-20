import React from "react";
import section1Styles from './section1.module.scss'
import Item from "./Item"
const Section1 = () => {
    return (
        <div>
        <section className={section1Styles.section1}>
            <div className={section1Styles.item__wrapp}>
        <Item/>
        </div>

        </section>
        </div>
    )
}
export default Section1