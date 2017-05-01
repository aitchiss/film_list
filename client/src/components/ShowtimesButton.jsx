import React from 'react'

class ShowtimesButton extends React.Component{


  render(){
    return(
      <button onClick={this.showtimesButtonClick.bind(this)}>Get Showtimes</button>
    )
  }

  showtimesButtonClick(){
    console.log('button clicked!')
  }
  

}

export default ShowtimesButton