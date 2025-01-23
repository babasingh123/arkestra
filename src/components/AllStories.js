import React, { useState, useEffect } from 'react';
import StoriesApi from '../services/storiesApi'; // Import the Stories API
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../allCss/AllStories.css';

const AllStories = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStories = async () => {
      setLoading(true);
      try {
        const data = await StoriesApi.getStories();
        setStories(data); // Fetch all stories
      } catch (error) {
        setError('Failed to load stories');
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  return (
    <div>
      <header className="language-header">
        <div className="language-hero-overlay">
          <h1 className="language-hero-title">Performers Stories and Interviews</h1>
          <p className="language-hero-subtitle">
          Discover the inspiring journeys of Arkestra performers, their challenges, and what motivates them to shine on stage.
          </p>
          <p className="language-hero-subtitle">
          आर्केस्ट्रा कलाकारों की प्रेरणादायक यात्राओं, उनकी चुनौतियों और उन्हें मंच पर चमकने के लिए क्या प्रेरित करता है, इसकी खोज करें।
          </p>
        </div>
      </header>
    <Container>
      {/* Fancy Header
      <div className="stories-header text-center">
        <h1 className="header-title">Performers Stories and Interviews</h1>
        <p className="header-subtitle">
          Discover the inspiring journeys of Arkestra performers, their challenges, and what motivates them to shine on stage.
        </p>
      </div> */}

      {loading && <div className="text-center">Loading stories...</div>}
      {error && <div style={{ color: 'red' }} className="mb-4 text-center">{error}</div>}

      <h2 className="mb-4" style={{ margin: '35px 0px', marginTop: '20px' }}>
          All Performer Stories
        </h2>
      <Row className="category-cards">
        {stories.map((story) => (
          <Col key={story.id} xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex">
            <div className="story-card">
              <iframe
                width="100%"
                height="200"
                src={story.videoLink.replace("watch?v=", "embed/")}
                title={story.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h4>{story.title}</h4>
              <p>{story.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
};

export default AllStories;
