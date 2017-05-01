import React from 'react'

const Film = (props) => {

  return(
    <div className="film">
      <a href={props.filmInfoLink}>{props.filmTitle}</a>
      <a href={props.showTimesLink}>Showtimes</a>
    </div>
  )
}

export default Film