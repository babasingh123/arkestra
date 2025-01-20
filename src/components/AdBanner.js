import React, { useEffect } from 'react';

const AdBanner = ({ adSlot, style }) => {
  useEffect(() => {
    // Ensure adsbygoogle is available and only push if the ad is not already loaded
    try {
      if (window.adsbygoogle && document.querySelectorAll(`ins[data-ad-slot="${adSlot}"]`).length === 1) {
        window.adsbygoogle.push({});
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
        data-ad-client="ca-pub-1096170326240957"
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdBanner;
