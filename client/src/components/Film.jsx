import React from 'react'

const Film = (props) => {

  return(
    <a href={props.filmInfoLink}>{props.filmTitle}</a>
  )
}

export default Film