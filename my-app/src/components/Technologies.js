import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNode, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const Technologies = () => {

  const iconNames = [faReact, faNode, faDatabase, faGithub];

  return (
    <div className='flex justify-center w'>

      {iconNames.map((icon, index) => (
        <FontAwesomeIcon key={index} icon={icon} className='text-white  p-10 m-5 text-[70px]' />
      ))}
    </div>
  );
};

export default Technologies;
