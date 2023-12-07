

const constellationsData = [
    {
      name: 'Aries',
      image: require('../images/aries.png'),
      imageSymbolic: require('../images/constellations/AriesSymbolic.png'),
      description: 'Aries is the first astrological sign in the zodiac.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in libero a velit sollicitudin venenatis eget at orci. Suspendisse id eros dui. Nunc quis pulvinar felis. Phasellus in egestas tortor, quis suscipit eros. In sollicitudin maximus mi, blandit semper tortor ultrices sed. Morbi varius risus ac ornare interdum. Praesent sit amet cursus ligula. Suspendisse felis justo, hendrerit sed elementum et, pretium quis diam. Etiam vitae sapien vel felis dapibus commodo. Quisque et erat non arcu dignissim malesuada. Ut fermentum tincidunt posuere. Quisque in tortor ut nibh elementum congue at a neque. In eu aliquet ante, sed facilisis velit. Ut lacinia turpis nibh, faucibus bibendum arcu finibus non. Praesent convallis semper quam, ut maximus velit iaculis sed.'
    },
    {
      name: 'Cancer',
      image: require('../images/cancer.png'),
      imageSymbolic: require('../images/constellations/CancerSymbolic.png'),
      description: 'Cancer is the fourth astrological sign in the zodiac.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in libero a velit sollicitudin venenatis eget at orci. Suspendisse id eros dui. Nunc quis pulvinar felis. Phasellus in egestas tortor, quis suscipit eros. In sollicitudin maximus mi, blandit semper tortor ultrices sed. Morbi varius risus ac ornare interdum. Praesent sit amet cursus ligula. Suspendisse felis justo, hendrerit sed elementum et, pretium quis diam. Etiam vitae sapien vel felis dapibus commodo. Quisque et erat non arcu dignissim malesuada. Ut fermentum tincidunt posuere. Quisque in tortor ut nibh elementum congue at a neque. In eu aliquet ante, sed facilisis velit. Ut lacinia turpis nibh, faucibus bibendum arcu finibus non. Praesent convallis semper quam, ut maximus velit iaculis sed.'
    },
    {
      name: 'Capricorn',
      image: require('../images/capricorn.png'),
      imageSymbolic:require('../images/constellations/CapricornSymbolic.png'),
      description: 'Capricorn is the tenth astrological sign in the zodiac.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in libero a velit sollicitudin venenatis eget at orci. Suspendisse id eros dui. Nunc quis pulvinar felis. Phasellus in egestas tortor, quis suscipit eros. In sollicitudin maximus mi, blandit semper tortor ultrices sed. Morbi varius risus ac ornare interdum. Praesent sit amet cursus ligula. Suspendisse felis justo, hendrerit sed elementum et, pretium quis diam. Etiam vitae sapien vel felis dapibus commodo. Quisque et erat non arcu dignissim malesuada. Ut fermentum tincidunt posuere. Quisque in tortor ut nibh elementum congue at a neque. In eu aliquet ante, sed facilisis velit. Ut lacinia turpis nibh, faucibus bibendum arcu finibus non. Praesent convallis semper quam, ut maximus velit iaculis sed.'
    },
    {
      name: 'Gemini',
      image: require('../images/gemini.png'),
      imageSymbolic:require('../images/constellations/GeminiSymbolic.png'),
      description: 'Gemini is the third astrological sign in the zodiac.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in libero a velit sollicitudin venenatis eget at orci. Suspendisse id eros dui. Nunc quis pulvinar felis. Phasellus in egestas tortor, quis suscipit eros. In sollicitudin maximus mi, blandit semper tortor ultrices sed. Morbi varius risus ac ornare interdum. Praesent sit amet cursus ligula. Suspendisse felis justo, hendrerit sed elementum et, pretium quis diam. Etiam vitae sapien vel felis dapibus commodo. Quisque et erat non arcu dignissim malesuada. Ut fermentum tincidunt posuere. Quisque in tortor ut nibh elementum congue at a neque. In eu aliquet ante, sed facilisis velit. Ut lacinia turpis nibh, faucibus bibendum arcu finibus non. Praesent convallis semper quam, ut maximus velit iaculis sed.'
    },
    {
      name: 'Leo',
      image: require('../images/leo.png'),
      imageSymbolic:require('../images/constellations/LeoSymbolic.png'),
      description: 'Leo is the fifth astrological sign in the zodiac.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in libero a velit sollicitudin venenatis eget at orci. Suspendisse id eros dui. Nunc quis pulvinar felis. Phasellus in egestas tortor, quis suscipit eros. In sollicitudin maximus mi, blandit semper tortor ultrices sed. Morbi varius risus ac ornare interdum. Praesent sit amet cursus ligula. Suspendisse felis justo, hendrerit sed elementum et, pretium quis diam. Etiam vitae sapien vel felis dapibus commodo. Quisque et erat non arcu dignissim malesuada. Ut fermentum tincidunt posuere. Quisque in tortor ut nibh elementum congue at a neque. In eu aliquet ante, sed facilisis velit. Ut lacinia turpis nibh, faucibus bibendum arcu finibus non. Praesent convallis semper quam, ut maximus velit iaculis sed.'
      
    },
    {
      name: 'Libra',
      image: require('../images/libra.png'),
      imageSymbolic:require('../images/constellations/LibraSymbolic.png'),
      description: 'Libra is the seventh astrological sign in the zodiac.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in libero a velit sollicitudin venenatis eget at orci. Suspendisse id eros dui. Nunc quis pulvinar felis. Phasellus in egestas tortor, quis suscipit eros. In sollicitudin maximus mi, blandit semper tortor ultrices sed. Morbi varius risus ac ornare interdum. Praesent sit amet cursus ligula. Suspendisse felis justo, hendrerit sed elementum et, pretium quis diam. Etiam vitae sapien vel felis dapibus commodo. Quisque et erat non arcu dignissim malesuada. Ut fermentum tincidunt posuere. Quisque in tortor ut nibh elementum congue at a neque. In eu aliquet ante, sed facilisis velit. Ut lacinia turpis nibh, faucibus bibendum arcu finibus non. Praesent convallis semper quam, ut maximus velit iaculis sed.'
    },
    {
      name: 'Sagittarius',
      image: require('../images/sagittarius.png'),
      imageSymbolic:require('../images/constellations/SagitariusSymbolic.png'),
      description: 'Sagittarius is the ninth astrological sign in the zodiac.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in libero a velit sollicitudin venenatis eget at orci. Suspendisse id eros dui. Nunc quis pulvinar felis. Phasellus in egestas tortor, quis suscipit eros. In sollicitudin maximus mi, blandit semper tortor ultrices sed. Morbi varius risus ac ornare interdum. Praesent sit amet cursus ligula. Suspendisse felis justo, hendrerit sed elementum et, pretium quis diam. Etiam vitae sapien vel felis dapibus commodo. Quisque et erat non arcu dignissim malesuada. Ut fermentum tincidunt posuere. Quisque in tortor ut nibh elementum congue at a neque. In eu aliquet ante, sed facilisis velit. Ut lacinia turpis nibh, faucibus bibendum arcu finibus non. Praesent convallis semper quam, ut maximus velit iaculis sed.'
    },
    {
      name: 'Scorpio',
      image: require('../images/scorpio.png'),
      imageSymbolic:require('../images/constellations/ScorpioSymbolic.png'),
      description: 'Scorpio is the eighth astrological sign in the zodiac.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam in libero a velit sollicitudin venenatis eget at orci. Suspendisse id eros dui. Nunc quis pulvinar felis. Phasellus in egestas tortor, quis suscipit eros. In sollicitudin maximus mi, blandit semper tortor ultrices sed. Morbi varius risus ac ornare interdum. Praesent sit amet cursus ligula. Suspendisse felis justo, hendrerit sed elementum et, pretium quis diam. Etiam vitae sapien vel felis dapibus commodo. Quisque et erat non arcu dignissim malesuada. Ut fermentum tincidunt posuere. Quisque in tortor ut nibh elementum congue at a neque. In eu aliquet ante, sed facilisis velit. Ut lacinia turpis nibh, faucibus bibendum arcu finibus non. Praesent convallis semper quam, ut maximus velit iaculis sed.'
    },
  ];
  
  export default constellationsData;
  