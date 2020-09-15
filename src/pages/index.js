import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Jobs from "../components/Jobs";
import Blogs from "../components/Blogs";

export default ({ data }) => {
  const {
    allStrapiBlogs: { nodes: blogs }
  } = data;
  return <Layout>
    <Hero />
    <Services />
    <Jobs />
    <Blogs blogs = {blogs} title="новости" showLink />
  </Layout>;
};


export const query = graphql`
{
  allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 3) {
    nodes {
      slug
      tilte
      category
      content
      id
      date(formatString: "MMMM Do, YYYY ")
      desc
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`;
