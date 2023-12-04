import React from 'react'
import SateliteInfo from '../components/SateliteInfo'
import { StarsInfo } from '../components/StarsInfo'
import SolarSystem from './SolarSystem'
import Tiles from '../components/Tiles'
import Slider from '../components/Slider'
import Loading from '../components/Loading'


const Home = () => {
  return (
    <div className='bg-primary'>
    <div>
      <Loading />
      
    <SateliteInfo />

    
    </div>
    {/* <Technologies /> */}
    <Tiles />
  
    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> */}
    <StarsInfo/>
    {/* <IndexPage showAllPosts={false} />
    </div> */}

  
      <SolarSystem />
      <Slider />
    </div>

  )
}

export default Home