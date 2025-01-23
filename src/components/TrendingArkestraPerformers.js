import TopPerformersApi from '../services/topPerformersApi';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import '../allCss/ArkestraHomeCss.css';
import '../allCss/MovingText.css';
import AdBanner from './AdBanner';

const TrendingArkestraPerformers = () => {
  const [topPerformers, setTopPerformers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTopPerformers = async () => {
      setLoading(true);
      try {
        const data = await TopPerformersApi.getTopPerformers();
        setTopPerformers(data);
      } catch (error) {
        setError('Failed to load top performers');
      } finally {
        setLoading(false);
      }
    };

    fetchTopPerformers();
  }, []);

  const getImage = (imageName) => {
    try {
      return require(`../assets/images/${imageName}`);
    } catch (error) {
      console.error('Image not found:', imageName);
      // return require('../assets/images/default.png'); // Fallback image if needed
    }
  };

  return (
    <Container>
      <h2 className="mb-4" style={{ margin: '35px 0px', marginTop: '90px' }}>Top Trending Performers</h2> 
      
      {loading && <div className="text-center">Loading top performers...</div>}
      {error && <div style={{ color: 'red' }} className="mb-4 text-center">{error}</div>}

      <Row className="category-cards">
        {topPerformers.map((topPerformer) => (
          <Col key={topPerformer.id} xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex">
            <Card
              border="dark"
              className="h-100 w-100 d-flex flex-column"
              style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
              }}
            >
              {topPerformer.profilePicture && (
                <Card.Img
                  variant="top"
                  src={getImage(topPerformer.profilePicture)}
                  alt={topPerformer.name}
                  className="category-image"
                />
              )}
              <Card.Body className="d-flex flex-column">
                <Card.Title className="fancy-font">{topPerformer.name}</Card.Title>
                <Link
                  to={`/performer/${topPerformer.tag}`}
                  state={{ performer: topPerformer }}
                >
                  <Button variant="outline-danger">View All Videos</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TrendingArkestraPerformers;
