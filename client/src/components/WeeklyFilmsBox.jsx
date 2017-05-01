import React from 'react'


class WeeklyFilmsBox extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      data: [{id: 1, filmTitle: "A Dog's Purpose", filmInfoLink: 'http://link.com', showTimesLink: 'http://anotherlink.com'}, 
      {id: 2, filmTitle: "Sleepless", filmInfoLink: 'http://link.com', showTimesLink: 'http://anotherlink.com'}, 
      {id: 3, filmTitle: "Mindhorn", filmInfoLink: 'http://link.com', showTimesLink: 'http://anotherlink.com'}, 
      {id: 4, filmTitle: "Unlocked", filmInfoLink: 'http://link.com', showTimesLink: 'http://anotherlink.com'}, 
      {id: 5, filmTitle: "The Journey", filmInfoLink: 'http://link.com', showTimesLink: 'http://anotherlink.com'} ]
    }
  }

  render() {
    return(
      <div className='weekly-film-box'>
        WeeklyFilmBox
      </div>
    )
  }
}

export default WeeklyFilmsBox