import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TrendingArkestraPerformers from './TrendingArkestraPerformers';
import ArkestraTopHeader from './ArkestraTopHeader.js';
import AdBannerHorizontal from './AdBannerHorizontal.js';
import LanguagePage from './LanguagePage.js';
import VideoCard from './VideoCard';
import TopTrendingYoutubeVideosApi from '../services/topTrendingYoutubeVideosApi';
import NewsApi from '../services/newsApi'; // Import the News API
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../allCss/ArkestraHome.css';
import NewsDefault from '../assets/images/NewsDefault.png';

const ArkestraHome = () => {
  const [topVideos, setTopVideos] = useState([]);
  const [news, setNews] = useState([]);
  const [videoError, setVideoError] = useState(null);
  const [newsError, setNewsError] = useState(null);
  const [loadingVideos, setLoadingVideos] = useState(false);
  const [loadingNews, setLoadingNews] = useState(false);

  useEffect(() => {
    
    const fetchTopVideos = async () => {
      setLoadingVideos(true);
      try {
        const data = await TopTrendingYoutubeVideosApi.getTopVideos();
        setTopVideos(data.slice(0, 4)); // Fetch only the top 4 videos
      } catch (error) {
        setVideoError('Failed to load top trending YouTube videos');
      } finally {
        setLoadingVideos(false);
      }
    };

    const fetchNews = async () => {
      setLoadingNews(true);
      try {
        const data = await NewsApi.getNews();
        setNews(data.slice(0, 4)); // Fetch only the top 4 news articles
      } catch (error) {
        setNewsError('Failed to load news');
      } finally {
        setLoadingNews(false);
      }
    };

    fetchTopVideos();
    fetchNews();
  }, []);

  return (
    <div>
      {/* Top Header */}
      <ArkestraTopHeader />

      {/* Horizontal Ad Banner */}
      <AdBannerHorizontal style={{ width: '100%', height: '250px', marginTop: '10px' }} />

      {/* Trending Performers */}
      <TrendingArkestraPerformers />

      {/* Fancy Separator */}
      <div className="fancy-separator">
        <hr />
        <span>Explore More</span>
        <hr />
      </div>

      {/* Language Section */}
      <LanguagePage />

      {/* Fancy Separator */}
      <div className="fancy-separator">
        <hr />
        <span>Top Videos</span>
        <hr />
      </div>

      {/* Top 4 YouTube Videos Section */}
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-4" style={{ margin: '35px 0px', marginTop: '20px' }}>
          <h2 className="m-0 d-flex align-items-center">
            Top Videos
            <Link to="/allVideos" style={{ marginLeft: '15px' }}>
              <button className="btn btn-outline-primary">View All</button>
            </Link>
          </h2>
        </div>
        {loadingVideos && <div className="text-center">Loading videos...</div>}
        {videoError && <div style={{ color: 'red' }} className="mb-4 text-center">{videoError}</div>}
        <Row className="category-cards">
          {topVideos.map((video) => (
            <Col key={video.id} xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex">
              <VideoCard video={video} />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Fancy Separator */}
      <div className="fancy-separator">
        <hr />
        <span>Latest News</span>
        <hr />
      </div>

      {/* News Section */}
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-4" style={{ margin: '35px 0px', marginTop: '20px' }}>
          <h2 className="m-0 d-flex align-items-center">
            Arkestra News
            <Link to="/allNews" style={{ marginLeft: '15px' }}>
              <button className="btn btn-outline-primary">View All</button>
            </Link>
          </h2>
        </div>
        {loadingNews && <div className="text-center">Loading news...</div>}
        {newsError && <div style={{ color: 'red' }} className="mb-4 text-center">{newsError}</div>}
        <Row className="category-cards">
          {news.map((article) => (
            <Col key={article.id} xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex">
              <div className="news-card">
  <img src={article.image || NewsDefault} alt={article.title} className="news-image" />
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
    </div>
  );
};

export default ArkestraHome;
