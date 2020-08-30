import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Blogs from "../components/Blogs"
export default () => {
  return <Layout>
    <Hero/>
    <Services/>
    <Jobs/>
  </Layout>
}
// ...GatsbyImageSharpFluid
