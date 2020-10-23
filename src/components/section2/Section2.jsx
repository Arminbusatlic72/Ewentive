import React from "react";
import section2Styles from './section2.module.scss'
import IconItem from "./IconItem"
const Section1 = () => {
    return (
        <div>
        <section className={section2Styles.section2}>
            <div className={section2Styles.item__wrapp}>
        <IconItem/>
        </div>

        </section>
        </div>
    )
}
export default Section1