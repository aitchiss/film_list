import React from 'react'
import Film from './Film'

const WeeklyOpeningsList = (props) => {
  const filmNodes = props.data.map( (film) => {
    return (
      <Film filmInfoLink={film.filmInfoLink} key={film.id} filmTitle={film.filmTitle}/>
    )
  } )

  return(
    <div className="weekly-openings-list">
      {filmNodes}
    </div>
  )
}


export default WeeklyOpeningsList