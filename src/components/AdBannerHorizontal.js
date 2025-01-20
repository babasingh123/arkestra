import React, { useEffect } from 'react';

const AdBannerHorizontal = ({ adSlot = "1153384314", style }) => {
  useEffect(() => {
    // Ensure adsbygoogle is initialized and re-initialize the ad only if necessary
    try {
      const adElement = document.querySelector(`ins[data-ad-slot="${adSlot}"]`);
      if (adElement) {
        adElement.removeAttribute('data-adsbygoogle-status'); // Reset status for re-render
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error('AdSense error:', e.message);
    }
  }, [adSlot]);

  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <ins
        className="adsbygoogle"
        style={style || { display: 'block' }}
        data-ad-client="ca-pub-1096170326240957" // Ensure client matches your AdSense account
        data-ad-slot={adSlot} // Default adSlot set to horizontal ad slot ID
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdBannerHorizontal;
