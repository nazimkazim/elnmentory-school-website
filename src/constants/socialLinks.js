import React from "react";
import { FaLinkedin, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";

const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/nazim-turdiyev-3b1b0718b/",
  },
  {
    id: 1,
    icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
    url: "https://www.instagram.com/nzmai777/",
  },
  {
    id: 1,
    icon: <FaYoutubeSquare className="social-icon"></FaYoutubeSquare>,
    url: "https://www.instagram.com/nzmai777/",
  }

];
const links = data.map(link => {
  return (
    <li key={ link.id }>
      <a href={ link.url } className="social-link">
        { link.icon }
      </a>
    </li>
  );
});

export default ({ styleClass }) => {
  return (
    <ul className={ `social-links ${styleClass ? styleClass : ""}` }>{ links }</ul>
  );
};
