import React from "react";
import Title from "./Title";
import services from "../constants/services";
import ButtonDetailed from '../components/Button-detailed';
const Services = () => {
  return (
    <section className="section bg-grey">
      <Title title="обучение" />
      <div className="section-center services-center">
        { services.map((service) => {
          const { id, icon, title, text,link } = service;
          return (
            <article key={ id } className="service">
              { icon }
              <h4>{ title }</h4>
              <div className="underline"></div>
              <p>{ text }</p>
              <ButtonDetailed to={link} name="подробнее"/>
            </article>
          );
        }) }
      </div>
    </section>
  );
};

export default Services;
