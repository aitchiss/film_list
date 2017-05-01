import React from 'react'
import Film from './Film'
import MoreInfoFooter from './MoreInfoFooter'

const WeeklyOpeningsList = (props) => {
  const filmNodes = props.data.map( (film) => {
    return (
      <Film filmInfoLink={film.filmInfoLink} key={film.id} filmTitle={film.filmTitle} showTimesLink={film.showTimesLink}/>
    )
  } )

  return(
    <div className="weekly-openings-list">
    <h4>UK Opening This Week</h4>
      {filmNodes}
      <MoreInfoFooter/>
    </div>
  )
}


export default WeeklyOpeningsList