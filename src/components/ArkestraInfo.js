import React from 'react';
import '../allCss/ArkestraInfo.css';

const ArkestraInfo = () => {
  return (
    <div className="arkestra-container">
      {/* Hero Section */}
      <header className="arkestra-header">
        <div className="hero-overlay">
          <h1 className="hero-title">Welcome to Arkestra</h1>
          <p className="hero-subtitle">Discover the unique cultural essence of Arkestra performances</p>
        </div>
      </header>

      {/* Content Section */}
      <section className="arkestra-section">
        <div className="content-wrapper">
          <h2 className="section-title">What is Arkestra?</h2>
          <p className="section-description">
            In India, "Arkestra" represents a unique form of live entertainment widely embraced in regions like Bihar, Uttar Pradesh, and Jharkhand. These performances often feature female dancers and singers showcasing their talents at social gatherings such as weddings and festive events. Though the term "arkestra" sounds similar to "orchestra," it carries no direct musical association. Its origin remains uncertain, likely emerging through cultural shifts and globalization. Historically, it evolved from female performers who initially supplemented traditional folk theater, such as "nautanki," gradually transforming into independent acts with the advent of accessible music and cassette culture.
          </p>

          <h3 className="features-title">Key Features of Arkestra:</h3>

          <ul className="features-list">
            <li>
              <strong>Historical Roots:</strong> Female performers in Bihar began as supplementary acts in "nautanki" plays but later transitioned into standalone performances that became staples of social celebrations.
            </li>
            <li>
              <strong>Uncertain Name Origins:</strong> Despite its phonetic resemblance to "orchestra," the name "arkestra" is unique and lacks a clear origin story.
            </li>
            <li>
              <strong>Performance Style:</strong> These acts are known for their expressive and sometimes provocative dance styles, sparking discussions about performer representation and empowerment.
            </li>
            <li>
              <strong>Regional Popularity:</strong> Predominantly seen in Bihar, Uttar Pradesh, and Jharkhand, Arkestra also has a growing presence among migrant communities in metropolitan cities like Delhi and Mumbai.
            </li>
            <li>
              <strong>Technological Influence:</strong> The rise of cassette tapes and music distribution platforms significantly boosted the popularity and reach of Arkestra performances.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ArkestraInfo;
