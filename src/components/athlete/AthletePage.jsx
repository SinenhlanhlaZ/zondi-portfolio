import React from 'react'

import AthleteHeader from './header/Header'
import Training from './training/Training'
import AthleteFooter from './footer/Footer'

const Athlete = () => {
  return (
    <div>
      <AthleteHeader/>
      <Training/>
      <AthleteFooter/>
    </div>
  )
}

export default Athlete