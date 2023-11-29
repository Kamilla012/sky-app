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
      <div className='flex'>
        <h3 className={`${styles.h3}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
        <p>
          Ut pretium mi eu finibus egestas. Suspendisse elementum est sem, a
          rhoncus ligula convallis eu. Duis finibus purus eget nisl tincidunt
          accumsan. Quisque nunc diam, imperdiet ac egestas non
        </p>
      </div>
    <div className='flex'>
      {TileImg.map((tile, index) => (
        <div className="tile" key={index}>
          <img src={tile.path} alt={tile.name} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante
            enim, dapibus sed dui eu, tempus rutrum lectus. Nunc sed finibus
            magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <span>{index + 1}</span>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Tiles;
