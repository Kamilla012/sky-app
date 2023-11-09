import React from 'react'
// import RocketAnimation from '../animations/RocketAnimation'
import SatelliteAnimation from '../animations/SatelliteAnimation'
import styles from '../style'
import { Link } from 'react-router-dom'

const SateliteInfo = () => {
  return (
    <div className='md:flex my-10 gap-10 justify-center align-middle bg-secondary p-4'>
      <div className='flex justify-center'>
      <SatelliteAnimation />
      </div>
       
     
      <div className='md:w-[45%] mx-5 md:flex md:flex-col md:justify-center'>
        <h2 className={`text-2xl font-bold text-green-500 mb-5 text-[35px] text-green text-center`}>Find Satellite</h2>
        <p className='text-[white] mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eros nulla, ullamcorper non quam sed, euismod efficitur velit. Nam volutpat mattis metus. Aenean eu gravida quam, non condimentum dui. Ut ac facilisis eros, vel vulputate dui. Maecenas non arcu faucibus, egestas libero quis, pulvinar nisi. Cras ut quam ligula.</p>
        <Link to={'/satellites'} className={`${styles.buttonForm} md:flex-none flex justify-center`}>
          Check it
        </Link>
      </div>
    
    </div>
  )
}

export default SateliteInfo