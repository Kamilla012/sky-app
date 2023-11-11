import React from 'react'

const SolarSystem = () => {
    const iconNames = ['Merkury', 'wenus', 'Ziemia', 'Mars'];
  return (
    <div className='flex'>
        {iconNames.map((icon, index) => (
        <div key={index} icon={icon} className='text-white w-[100px] h-[100px] bg-white m-10 rounded-full'></div>
      ))}
    </div>
  )
}

export default SolarSystem