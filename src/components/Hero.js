import React from "react";
import Image from "gatsby-image";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import SocialLinks from "../constants/socialLinks";
// ...GatsbyImageSharpFluid
const query = graphql`
{
  file(relativePath: {eq: "main-page-photo.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;

const Hero = () => {
  const data = {
    header:'El-N-Mentory',
    subheader1:'Языковая школа нового поколения',
    subheader2:'Развивай языковые и IT навыки вместе с нами'
  }
  const { file: { childImageSharp: { fluid } } } = useStaticQuery(query);
  return <header className="hero">
    <div className="section-center hero-center">
      <article className="hero-info">
        <div>
          <div className="underline"></div>
            <h1>{data.header}</h1>
            <h4>{data.subheader1}</h4>
            <h4>{data.subheader2}</h4>
            <Link to="contact" className="btn">
              контакты
            </Link>
            <SocialLinks/>
        </div>
      </article>
      <Image fluid={ fluid } className="hero-img" />
    </div>
  </header>;
};

export default Hero;
