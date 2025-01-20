import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ArkestraTopHeader = () => {
  return (
    <div
      style={{
        backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url("")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        textAlign: 'center',
        padding: '50px 15px',
      }}
    >
      <Container>
        <Row>
          <Col>
            <h1 style={{ fontSize: '2.5rem', margin: '20px 0', fontWeight: 'bold' }}>
              आर्केस्ट्रा में आपका स्वागत है
            </h1>
            <p style={{ fontSize: '1.25rem', lineHeight: '1.8', marginTop: '15px' }}>
              आर्केस्ट्रा में आपका स्वागत है! यह मंच विशेष रूप से बिहार, उत्तर प्रदेश, झारखंड और 
              आस-पास के क्षेत्रों में प्रसिद्ध भोजपुरी आर्केस्ट्रा संस्कृति को समर्पित है। यहां 
              आपको प्रसिद्ध परफॉर्मर्स, उनके बेहतरीन वीडियो, और आर्केस्ट्रा के जादुई प्रदर्शन 
              देखने को मिलेंगे। हम इस कला और संस्कृति के हर पहलू को संजोकर आपके सामने प्रस्तुत 
              करते हैं।
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ArkestraTopHeader;
