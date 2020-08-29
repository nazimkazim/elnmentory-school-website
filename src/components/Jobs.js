import React from "react";
import Title from "./Title";
import { FaAngleDoubleRight, FaCalendarAlt, FaBookOpen } from "react-icons/fa";
import { useStaticQuery, graphql } from "gatsby";
import ButtonDetailed from '../components/Button-detailed';

const query = graphql`
  {
    allStrapiJobs(sort: {fields: id, order: DESC}) {
      nodes {
        strapiId
        city
        company
        date
        position
        id
        desc {
          id
          name
        }
      }
    }
  }
`;

const Jobs = () => {
  const data = useStaticQuery(query);
  const { allStrapiJobs: { nodes: jobs } } = data;
  const [value, setValue] = React.useState(0);
  const { position, date, city, desc } = jobs[value];
  //console.log(company, position, date, city, desc);
  return (
    <section className="section jobs">
      <Title title="Самые популярные курсы" />
      <div className="jobs-center">
        <div className="btn-container">
          { jobs.map((item, index) => {
            return <button key={ item.strapiId }
              className={ `job-btn ${index === value && 'active-btn'}` }
              onClick={ () => setValue(index) }
            >{ item.company }</button>;
          }) }
        </div>
        <article className="job-info">
          <h3>{ position }</h3>
          <h4><FaBookOpen />{ " " }{ city }</h4>
          <p className="job-date"><FaCalendarAlt />{ " " }{ date }</p>
          <h3>Навыки</h3>
          { desc.map(item => {
            return (
              <div key={ item.id } className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{ item.name }</p>
              </div>
            );
          }) }
        </article>
        <div>
        </div>
      </div>
      <ButtonDetailed to="about" name="все курсы" />
    </section>
  );
};

export default Jobs;
