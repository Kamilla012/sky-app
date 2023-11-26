import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNode, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const Technologies = () => {

  const iconNames = [faReact, faNode, faDatabase, faGithub];

  return (
    <div className='flex justify-center '>


    <div className='grid grid-cols-2 md:grid-cols-4 pb-10'>

      {iconNames.map((icon, index) => (
        <FontAwesomeIcon key={index} icon={icon} className='text-white shadow-lg shadow-green rounded-xl p-8 m-5 text-[60px]' />
      ))}
    </div>
    </div>
  );
};

export default Technologies;
