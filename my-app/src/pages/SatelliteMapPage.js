import React from 'react'
import SatelliteMap from '../components/SatelliteMap'
import styles from '../style'

export const SatelliteMapPage = () => {
  return (
    <div className='flex w-full'>
        <SatelliteMap/>
        <div className="w-2/4 m-10">
            <h2 className={`${styles.h2}`}>Find the satellite in its current position!</h2>
            <p className={`${styles.p}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed risus pulvinar, eleifend nunc faucibus, placerat quam. Mauris dui velit, placerat eget neque nec, lacinia elementum arcu. Nullam accumsan justo tortor, at cursus libero ullamcorper in. Nunc ut leo tortor. Morbi id cursus diam. Duis at metus lectus. Praesent tincidunt malesuada dui, a gravida erat imperdiet eget. Aenean non auctor mi, dictum hendrerit sapien. Nullam volutpat ut nisl eget sollicitudin.</p>
        </div>

    </div>
    
  )
}
