import React from 'react'
import SateliteInfo from '../components/SateliteInfo'
import { StarsInfo } from '../components/StarsInfo'

const Home = () => {
  return (
    <div className='bg-primary'>
    <div><SateliteInfo /></div>
    <div><StarsInfo/></div>
    </div>
  )
}

export default Home