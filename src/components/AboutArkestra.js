import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import '../allCss/AboutArkestra.css';

const AboutArkestra = () => {
  return (
    <Container className="my-5 about-arkestra-container">
      <h1 className="text-center mb-5 fancy-title">About Arkestra.In</h1>

      {/* Description Section */}
      {/* <Row className="mb-5">
        <Col>
          <Card className="fancy-card">
            <Card.Body>
              <Card.Title className="fancy-card-title">What is Arkestra?</Card.Title>
              <Card.Text className="fancy-card-text">
                Arkestra is a vibrant and colorful performance art form that has deep roots in North India, particularly in the Bhojpuri-speaking regions of Bihar, Uttar Pradesh, Jharkhand, and beyond. This site is dedicated to celebrating the rich culture of Bhojpuri Arkestra by showcasing its most talented performers, mesmerizing dance routines, and the latest trending videos.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}

      {/* Mission Statement */}
      <Row className="mb-5">
        <Col>
          <Card className="fancy-card">
            <Card.Body>
              <Card.Title className="fancy-card-title">Our Mission</Card.Title>
              <Card.Text className="fancy-card-text">
                Our mission is to bring the vibrant Bhojpuri Arkestra culture closer to its fans and provide a platform where performers can shine. We aim to highlight their talent and create a community that appreciates the artistry and creativity of this unique cultural phenomenon.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Disclaimer Section */}
      <Row className="mb-5">
        <Col>
          <Card className="fancy-card">
            <Card.Body>
              <Card.Title className="fancy-card-title">Disclaimer</Card.Title>
              <Card.Text className="fancy-card-text">
                All videos and content displayed on this website are sourced from publicly available platforms like YouTube, Instagram, and Facebook. We do not claim ownership of any of the videos or content displayed here. Copyright belongs to the respective owners, and we respect their rights. If you believe your content has been used without proper authorization, please contact us, and we will take appropriate action.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Contact Information */}
      <Row className="mb-5">
        <Col>
          <Card className="fancy-card">
            <Card.Body>
              <Card.Title className="fancy-card-title">Contact Us</Card.Title>
              <Card.Text className="fancy-card-text">
                If you have any queries, suggestions, or concerns, feel free to reach out to us at:
                <br />
                <strong>Email:</strong> firexavinash1@gmail.com
                <br />
                <strong>Phone:</strong> 9502426844
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutArkestra;
