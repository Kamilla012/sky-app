import React from 'react'
import SateliteInfo from '../components/SateliteInfo'
import { StarsInfo } from '../components/StarsInfo'
import Technologies from '../components/Technologies'
import IndexPage from './IndexPage'
import PlanetCanvas from '../components/TwoSpheres'
import SolarSystem from './SolarSystem'

const Home = () => {
  return (
    <div className='bg-primary'>
    <div><SateliteInfo /></div>
    <Technologies />

      <StarsInfo/>
      <SolarSystem />
    </div>

  )
}

export default Home