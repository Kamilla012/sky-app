import React from 'react'
// import RocketAnimation from '../animations/RocketAnimation'
import SatelliteAnimation from '../animations/SatelliteAnimation'
import styles from '../style'

const SateliteInfo = () => {
  return (
    <div className='flex my-5 gap-10 justify-center align-middle p-2 bg-secondary'>
      <div className=''>
      <SatelliteAnimation />
      </div>
       
        <div className='w-[60%]'>
        <h2 className={`text-2xl font-bold text-green-500 mb-5 text-[35px] text-green`}>Find Satellite</h2>
        <p className='text-[white]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eros nulla, ullamcorper non quam sed, euismod efficitur velit. Nam volutpat mattis metus. Aenean eu gravida quam, non condimentum dui. Ut ac facilisis eros, vel vulputate dui. Maecenas non arcu faucibus, egestas libero quis, pulvinar nisi. Cras ut quam ligula.</p>
        <button className={`${styles.buttonForm} mt-5`}>Chcek it</button>
        </div>
    </div>
  )
}

export default SateliteInfo