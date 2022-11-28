import React from 'react'
import './training.css'

const Training = () => {
  return (
    <div id="training">
      <h1> Training </h1>
      <div className="training__container">
        <div className="frame__container">
          <div className="frame__one">
            <iframe 
              height='454' 
              width='300' 
              frameborder='0' 
              allowtransparency='true' 
              scrolling='no' 
              src='https://www.strava.com/athletes/12702557/latest-rides/d1c1a2d4fd383df6141ea9aea9ffdbf59133f6a2'></iframe>
          </div>

          <div className="frame__two">
            <iframe 
              height='160' 
              width='300' 
              frameborder='0' 
              allowtransparency='true' 
              scrolling='no' 
              src='https://www.strava.com/athletes/12702557/activity-summary/d1c1a2d4fd383df6141ea9aea9ffdbf59133f6a2'></iframe>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Training