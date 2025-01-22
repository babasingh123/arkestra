import React, { useState, useEffect } from 'react';
import NewsApi from '../services/newsApi'; // Import the News API
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../allCss/AllNews.css';
import NewsDefault from '../assets/images/NewsDefault.png';

const AllNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const data = await NewsApi.getNews();
        setNews(data); // Fetch all news
      } catch (error) {
        setError('Failed to load news');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <Container className="all-news-container">
       <h2 className="mb-4" style={{ margin: '35px 0px', marginTop: '90px' }}>
        All News
      </h2>
      {loading && <div className="text-center">Loading news...</div>}
      {error && <div style={{ color: 'red' }} className="mb-4 text-center">{error}</div>}
      <Row className="category-cards">
        {news.map((article) => (
          <Col key={article.id} xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex">
            <div className="news-card">
              <img
                src={article.image || NewsDefault}
                alt={article.title}
                className="news-image"
              />
              <h4>{article.title}</h4>
              <p>{article.description}</p>
              <a href={article.externalLink} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllNews;
