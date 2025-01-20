import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ProfileApi from '../services/profileApi';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PerformerProfileHeader from './PerformerProfileHeader';
import VideoCard from './VideoCard';
import AdBannerHorizontal from './AdBannerHorizontal';

const PerformerProfile = () => {
  const { tag } = useParams();
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const performer = location.state?.performer;

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      try {
        const data = await ProfileApi.getVideosByTag(tag);
        setVideos(data);
      } catch (error) {
        setError('Failed to load videos');
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [tag]);

  if (!performer) {
    return <div>Performer not found</div>;
  }

  return (
    <div>
    <AdBannerHorizontal style={{ width: '100%', height: '250px', marginTop: '10px' }} />
      <PerformerProfileHeader performer={performer} />
      <Container>
        <h2 className="mb-4" style={{ margin: '35px 0px', marginTop: '30px' }}>
          Top Trending YouTube Videos of {performer.name}
        </h2>

        {loading && <div className="text-center">Loading videos...</div>}
        {error && <div style={{ color: 'red' }} className="text-center">{error}</div>}

        <Row className="category-cards">
          {videos.map((video) => (
            <Col key={video.id} xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex">
              <VideoCard video={video} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default PerformerProfile;
