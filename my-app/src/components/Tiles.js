import React from 'react';
import Comet from '../images/elements/Comet.png';
import Moon from '../images/elements/Moon.png';
import Rocket from '../images/elements/Rocket.png';

const Tiles = () => {
  const TileImg = [
    { name: 'Comet', path: Comet },
    { name: 'Moon', path: Moon },
    { name: 'Rocket', path: Rocket },
  ];

  return (
    <div>
      <div>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
        <p>
          Ut pretium mi eu finibus egestas. Suspendisse elementum est sem, a
          rhoncus ligula convallis eu. Duis finibus purus eget nisl tincidunt
          accumsan. Quisque nunc diam, imperdiet ac egestas non
        </p>
      </div>

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
  );
};

export default Tiles;
