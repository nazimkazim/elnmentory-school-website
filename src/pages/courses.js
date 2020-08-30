import React from "react"
import Title from "../components/Title"
import { useStaticQuery, graphql } from "gatsby";
import Image from 'gatsby-image'

const query = graphql`
  {
    allStrapiProjects {
      nodes {
        github
        id
        description
        title
        stack_item {
          title
        }
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`


export default function Course() {
  const data = useStaticQuery(query);
  const { allStrapiProjects: { nodes: projects } } = data;
  console.log(projects)
  return (
    <section className="section projects">
      <Title title="Все курсы"/>
      <div className="section-center projects-center">
        {projects.map((project, index) => (
          <article className="project" key={project.id}>
            <Image fluid={project.image.childImageSharp.fluid} className="project-img" />
            <div className="project-info">
              <span className="project-number">0{index + 1}</span>
              <h3>{project.title}</h3>
              <p className="project-desc">
                {project.description}
              </p>
              <div className="project-stack">
                {project.stack_item.map((item) => (
                  <span key={item.id}>{item.title}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
