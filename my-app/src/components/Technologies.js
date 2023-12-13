import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNode, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const Technologies = () => {

  const iconNames = [faReact, faNode, faDatabase, faGithub];

  return (
    <div className='flex justify-center '>


    <div className='grid grid-cols-4 md:grid-cols-4'>

      {iconNames.map((icon, index) => (
        <FontAwesomeIcon key={index} icon={icon} className='text-green rounded-md text-[30px] w-[30px] h-[30px] m-1 bg-white p-5 ' />
      ))}
    </div>
    </div>
  );
};

export default Technologies;
