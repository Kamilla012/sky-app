import React from 'react';
import Base from '../images/elements/Base.png';
import Scientist from '../images/elements/Scientist.png';
import Workplace from '../images/elements/Workplace.png';
import styles from '../style';

const Tiles = () => {
  const TileImg = [
    { name: 'Base', path: Base },
    { name: 'Scientist', path: Scientist },
    { name: 'Workplace', path: Workplace },
  ];

  return (
    <div className='text-white flex flex-col mx-10'>
      <div className='flex items-center my-10'>
        <h3 className={`${styles.h3}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
        <p>
          Ut pretium mi eu finibus egestas. Suspendisse elementum est sem, a
          rhoncus ligula convallis eu. Duis finibus purus eget nisl tincidunt
          accumsan. Quisque nunc diam, imperdiet ac egestas non
        </p>
      </div>
    <div className='flex'>
      {TileImg.map((tile, index) => (
        <div className="tile flex flex-col justify-center items-center"  key={index}
        >
          <img className=' w-[30%] h-[100px]' src={tile.path} alt={tile.name} />

          <div className='flex my-10'>
          <span className='text-[50px] px-5'>{index + 1}</span>
          <p className=''>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante
            enim, dapibus sed dui eu, tempus rutrum lectus. Nunc sed finibus
            magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
         
        </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Tiles;
