import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../allCss/ArkestraTopHeader.css';

const ArkestraTopHeader = () => {
  return (
    <div>
      <header className="language-header">
    <div className="language-hero-overlay">
      <h1 className="language-hero-title">आर्केस्ट्रा में आपका स्वागत है</h1>
      <p className="language-hero-subtitle">
      आर्केस्ट्रा में आपका स्वागत है! यह मंच विशेष रूप से बिहार, उत्तर प्रदेश, झारखंड और 
              आस-पास के क्षेत्रों में प्रसिद्ध भोजपुरी आर्केस्ट्रा संस्कृति को समर्पित है। यहां 
              आपको प्रसिद्ध परफॉर्मर्स, उनके बेहतरीन वीडियो, और आर्केस्ट्रा के जादुई प्रदर्शन 
              देखने को मिलेंगे। हम इस कला और संस्कृति के हर पहलू को संजोकर आपके सामने प्रस्तुत 
              करते हैं।
      </p>
    </div>
  </header>
    </div>
  );
};

export default ArkestraTopHeader;
