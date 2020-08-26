import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "/",
    url: "/",
  },
  {
    id: 2,
    text: "о нас",
    url: "/about/",
  },
  {
    id: 3,
    text: "интерактивная школа",
    url: "/projects/",
  },
  {
    id: 4,
    text: "Новости",
    url: "/blog/",
  },
  {
    id: 5,
    text: "Контакты",
    url: "/contact/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
