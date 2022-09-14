import React from "react";

function Article(props) {
  if(!props.date) {
    return (
      <article>
        <h3>{props.title}</h3>
        <small>January 1, 1970</small>
        <p>{props.preview}</p>
      </article>
    )
  }
  else {
    return (
      <article>
        <h3>{props.title}</h3>
        <small>{props.date}</small>
        <p>{props.preview}</p>
      </article>
    )
  }
}

export default Article