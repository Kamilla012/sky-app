import React from 'react';
import starsImg from '../images/backgrounds/starsBackground.png';
import styles from '../style';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMoon, faHeart, faCircleDown } from '@fortawesome/free-regular-svg-icons';
import { faPhone, faLocationDot} from '@fortawesome/free-solid-svg-icons';
import Technologies from './Technologies';
import { Link } from 'react-router-dom';

const FooterIndex = () => {
  return (
    <div className="">
        <div className='border border-white  h-[1px] mt-5'></div>
    <div
      className="bg-cover bg-center w-full h-[300px] text-white flex flex-col items-center justify-center "
      style={{ backgroundImage: `url(${starsImg})` }}
      
    >
      <div className="flex justify-between mb-4">



        <div className="mx-10">
          <h2 className={`${styles.h5}`}>Contact</h2>
          <div className='flex items-center'>
            <FontAwesomeIcon icon={faPhone}
            className='p-2 text-[30px]'/>
             <p>+48 123 456 789</p>
          </div>
          

          <div className='flex items-center'>
            <FontAwesomeIcon icon={faEnvelope}
            className='p-2 text-[30px]'/>
                <p>Email: kontakt@example.com</p>
          </div>

          <div className='flex items-center'>
            <FontAwesomeIcon icon={faLocationDot}
            className='p-2 text-[30px]'/>
            <p>Adres: ul. Przykładowa 123, 00-000 Miasto</p>
          </div>

         
       
    
        </div>

        <div className='mx-10'>
          <h5 className={`${styles.h5}`}>Technologies</h5>
          <Technologies />
        </div>
       

      <div className="mx-10">
      <h5 className={`${styles.h5}`}>Sign up</h5>
        <div className='flex flex-col'>
            <p>Log in/ Create an account</p>
         
                <Link to="./login" className='bg-[green] w-[300px] h-[50px] rounded-md text-[20px] text-center my-3 p-2'>Login</Link>
     
            
            <Link to="./register" className=" w-[300px] h-[50px] rounded-md text-[20px] p-2 border border-green  text-center text-white">Register</Link>
        </div> 
      </div>


    </div>
    </div>
</div>
  );
};

export default FooterIndex;
