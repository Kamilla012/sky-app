import React from 'react'
import SateliteInfo from '../components/SateliteInfo'
import { StarsInfo } from '../components/StarsInfo'
import Technologies from '../components/Technologies'

const Home = () => {
  return (
    <div className='bg-primary'>
    <div><SateliteInfo /></div>
    <Technologies />
    <div><StarsInfo/></div>
    </div>
  )
}

export default Home