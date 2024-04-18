import React from 'react'
import SatelliteMap from '../components/SatelliteMap'
import styles from '../style'
import stalliteImage from '../images/backgrounds/satellite.svg'
import FooterIndex from '../components/FooterIndex'

export const SatelliteMapPage = () => {
  return (
    <div>

    <div className='flex w-full'>
        <SatelliteMap/>
        <div className="w-2/4 mx-10 flex flex-col  items-center">
            <h2 className={`${styles.h2} w-3/4`}>Find the satellite in its current position!</h2>
            <p className={`${styles.p} `}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed risus pulvinar, eleifend nunc faucibus, placerat quam. Mauris dui velit.</p>
            <img src={stalliteImage} alt='satellite'/>
        </div>
       
    </div>
    <FooterIndex /> 
    </div>
    
  )
 
}
