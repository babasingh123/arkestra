import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ArkestraLanguageApi from '../services/arkestraLanguageApi.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VideoCard from './VideoCard';
import '../allCss/ArkestraHomeCss.css';
import AdBanner from './AdBanner';

const LanguageWise = () => {
  const { language } = useParams();
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      try {
        const data = await ArkestraLanguageApi.getVideosByLanguage(language);
        setVideos(data);
      } catch (error) {
        setError('Failed to load videos for this language');
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [language]);

  return (
    <div className="language-wise-container">
      {/* Header Section */}
      <header className="language-header">
        <div className="language-hero-overlay">
          <h1 className="language-hero-title">{language} Arkestra</h1>
          <p className="language-hero-subtitle">
            Discover the top trending videos and unique performances in {language}.
          </p>
        </div>
      </header>

      {/* Video Section */}
      <Container>
        <h2 className="mb-4" style={{ margin: '35px 0px', marginTop: '20px' }}>
          Top Videos in {language}
        </h2>

        {loading && <div className="text-center">Loading videos...</div>}
        {error && <div style={{ color: 'red' }} className="mb-4 text-center">{error}</div>}

        <Row className="category-cards">
          {videos.map((video) => (
            <Col key={video.id} xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex">
              <VideoCard video={video} />
            </Col>
          ))}
        </Row>
        <AdBanner
          adSlot="3661764630"
          style={{ display: 'block', width: '100%', height: '250px' }}
        />
      </Container>
    </div>
  );
};

export default LanguageWise;
