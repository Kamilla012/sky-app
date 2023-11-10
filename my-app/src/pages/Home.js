import React from 'react'
import SateliteInfo from '../components/SateliteInfo'
import { StarsInfo } from '../components/StarsInfo'
import Technologies from '../components/Technologies'
import IndexPage from './IndexPage'

const Home = () => {
  return (
    <div className='bg-primary'>
    <div><SateliteInfo /></div>
    <Technologies />

      <StarsInfo/>
      {/* <IndexPage showAllPosts={false} /> */}
    
    </div>

  )
}

export default Home