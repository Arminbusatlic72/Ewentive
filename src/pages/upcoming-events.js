import React from "react"
import Layout from "../components/layout/Layout"
import Head from "../components/head/Head"
import Section1 from "../components/listPageSections/listPageSection1/section1/Section1"
import Section2 from "../components/listPageSections/listPageSection2/Section2"
const List = () => {
    return(
        <>
        <Layout>
            <Head title="List-page"/>
            <main>
                <Section1/>
                <Section2 />

            </main>
        </Layout>
        </>
    )
}
export default List