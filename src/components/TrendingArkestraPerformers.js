        import TopPerformersApi from '../services/topPerformersApi';
        import React, { useState, useEffect } from 'react';
        import Container from 'react-bootstrap/Container';
        import Card from 'react-bootstrap/Card';
        import Row from 'react-bootstrap/Row';
        import Col from 'react-bootstrap/Col';
        import Button from 'react-bootstrap/Button';
        import { Link } from 'react-router-dom'; // For navigation if needed
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
                    //   return require('../assets/images/default.png'); // Fallback image
                    }
                  };

                return (
                    <Container>
                    <h2 className="mb-4" style={{ margin: '35px 0px', marginTop: '90px' }}>Top Trending Performers</h2> 
                    {/* Ad banner at the top */}
                    
                    {loading && <div className="text-center">Loading top performers...</div>}
                    {error && <div style={{ color: 'red' }} className="mb-4 text-center">{error}</div>}

                    <Row className="category-cards">
                    {topPerformers.map(topPerformer => (
                        <Col key={topPerformer.id} xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex">
                        <Card border="dark" className="h-100 w-100 d-flex flex-column">
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
                  state={{ performer: topPerformer }} // Passing performer data via state
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
