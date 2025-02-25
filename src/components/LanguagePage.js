import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../allCss/LanguagePage.css';

const LanguagePage = () => {
  const navigate = useNavigate();
  const languages = ['Bhojpuri', 'Bengali', 'Haryanavi', 'Hindi'];

  const handleCardClick = (language) => {
    navigate(`/languages/${language}`);
  };

  return (
    <Container>
      <h2 className="mb-4" style={{ margin: '35px 0px', marginTop: '10px' }}>Watch in your Language</h2> 
      <Row>
        {languages.map((language) => (
          <Col key={language} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card
              style={{
                width: '300px',
                height: '200px',
                background: 'linear-gradient(135deg,  #ffafbd 0%, #ffc3a0 100%)',
                color: 'white',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 'auto',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Added transition for hover effect
              }}
              onClick={() => handleCardClick(language)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: '100%',
                }}
              >
                <span
                  style={{
                    fontWeight: 'bold',
                    fontSize: '1.5rem',
                    textShadow: '1px 1px 4px rgba(0, 0, 0, 0.5)',
                    textAlign: 'center',
                  }}
                >
                  {language}
                </span>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LanguagePage;
