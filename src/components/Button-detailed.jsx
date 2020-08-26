import React from "react"
import { Link } from "gatsby";

export default function ButtonDetailed(props) {
  const {to, name} = props;
  return (
    <>
      <Link to={`/${to}`} className="btn center-btn">
        {name}
      </Link>
    </>
  )
}
