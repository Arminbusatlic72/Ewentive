import React from "react"
import Layout from "../components/layout/Layout"
import Section1 from "../components/listPageSection1/section1/Section1"
import Section2 from "../components/listPageSection2/Section2"
const List = () => {
    return(
        <>
        <Layout>
            <main>
                <Section1/>
                <Section2 />

            </main>
        </Layout>
        </>
    )
}
export default List