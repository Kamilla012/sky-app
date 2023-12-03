import React from 'react'
import SateliteInfo from '../components/SateliteInfo'
import { StarsInfo } from '../components/StarsInfo'
import Technologies from '../components/Technologies'
import IndexPage from './IndexPage'
import PlanetCanvas from '../components/TwoSpheres'
import SolarSystem from './SolarSystem'
import Tiles from '../components/Tiles'
import Slider from '../components/Slider'
import Loading from '../components/Loading'


const Home = () => {
  return (
    <div className='bg-primary'>
    <div>
      <Loading />
      <Slider />
    <SateliteInfo />

    
    </div>
    {/* <Technologies /> */}
    <Tiles />
  
    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> */}
    <StarsInfo/>
    {/* <IndexPage showAllPosts={false} />
    </div> */}
  
      <SolarSystem />
    </div>

  )
}

export default Home