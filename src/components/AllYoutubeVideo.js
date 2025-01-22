import React, { useState, useEffect } from 'react';
import TopTrendingYoutubeVideosApi from '../services/topTrendingYoutubeVideosApi';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import VideoCard from './VideoCard';
import '../allCss/ArkestraHomeCss.css';
import AdBanner from './AdBanner';

const AllYoutubeVideo = () => {
  const [topVideos, setTopVideos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTopVideos = async () => {
      setLoading(true);
      try {
        const data = await TopTrendingYoutubeVideosApi.getTopVideos();
        setTopVideos(data);
      } catch (error) {
        setError('Failed to load top trending YouTube videos');
      } finally {
        setLoading(false);
      }
    };

    fetchTopVideos();
  }, []);

  return (
    <Container>
      <h2 className="mb-4" style={{ margin: '35px 0px', marginTop: '90px' }}>
        All YouTube Videos
      </h2>

      {loading && <div className="text-center">Loading videos...</div>}
      {error && <div style={{ color: 'red' }} className="mb-4 text-center">{error}</div>}

      <Row className="category-cards">
        {topVideos.map((video) => (
          <Col key={video.id} xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex">
            <VideoCard video={video} />
          </Col>
        ))}
      </Row>
      {/* <AdBanner
  adSlot="3661764630"
  style={{ display: 'block', width: '100%', height: '250px' }}
/> */}
    </Container>
  );
};

export default AllYoutubeVideo;
