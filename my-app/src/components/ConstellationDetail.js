// ConstellationDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';
import constellationsData from '../data/constellationsData';
import styles from '../style';

const ConstellationDetail = () => {

  const { name } = useParams();
  const constellation = constellationsData.find(c => c.name === name);

  if (!constellation) {
    return <div>{`Constellation "${name}" not found`}</div>;
  }

  return (
    <div className='text-white'>
    
      <div className='flex'> 
        <img src={constellation.image} alt={constellation.name} className='w-[500px] h-[500px]' />
        <div className='flex flex-col items-center'>
        <h2 className={`${styles.h2}`}>{` ${constellation.name}`}</h2>
            {/* <p className='mb-5'>{constellation.description}</p> */}
            <p className=' w-3/4'>{constellation.text}</p>
            <div className='  m-10 border border-white rounded-md shadow-md shadow-white'><img src={constellation.imageSymbolic} alt={name + 'symbolic'} 
            className='w-[300px] p-5 m-10 '/></div>
            
        </div>
        
      </div>
      
    
     <p>{constellation.description}</p>
    </div>
  );
};

export default ConstellationDetail;
