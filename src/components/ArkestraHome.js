  // src/components/HomePage.js
  import React, {  } from 'react';
 import TrendingArkestraPerformers from './TrendingArkestraPerformers';
 import TopTrendingYoutubeVideo from './TopTrendingYoutubeVideo';
 import ArkestraTopHeader from './ArkestraTopHeader.js';
import AdBannerHorizontal from './AdBannerHorizontal.js';

  const ArkestraHome = () => {
    return (
        <div>
            <ArkestraTopHeader />
            <AdBannerHorizontal style={{ width: '100%', height: '250px', marginTop: '10px' }} />

  <TrendingArkestraPerformers />
  <hr
    style={{
      color: 'black', // Corrected to use a valid color value
      backgroundColor: 'black', // Matches the color property
      height: 3 // Height of the horizontal line
    }}
  />
  <AdBannerHorizontal style={{ width: '100%', height: '250px', marginTop: '10px' }} />

  <TopTrendingYoutubeVideo />
</div>

    );
  };

  export default ArkestraHome;
