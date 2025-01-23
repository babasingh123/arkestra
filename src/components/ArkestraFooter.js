import React from "react";
import { Container, Row, Col, Stack, Image, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from React Router
import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../allCss/ArkestraFooter.css';
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faVideo,
  faExclamationTriangle,
  faQuestion
} from "@fortawesome/free-solid-svg-icons";

function ArkestraFooter() {
  return (
    <footer>
      <Container fluid>
        <Row className="bg-body-tertiary">
          <Col className="flex-column fs-5">
            <Stack>
              <Image
                src={logo}
                alt="Arkestra"
                rounded
                width={150}
                height={150}
              />
              <p>Everything about arkestra</p>
            </Stack>
          </Col>
          <Col>
            <Nav className="flex-column fs-5">
              {/* <p>Useful Links</p> */}
              <Nav.Link as={Link} to="/" className="footer-link"><FontAwesomeIcon icon={faHome} className="mr-2" />Home</Nav.Link>
              <Nav.Link as={Link} to="/allVideos" className="footer-link"><FontAwesomeIcon icon={faVideo} className="mr-2" />Videos</Nav.Link>
              <Nav.Link as={Link} to="/arkestra" className="footer-link"><FontAwesomeIcon icon={faQuestion} className="mr-2"/>What is Arkestra</Nav.Link>
            </Nav>
          </Col>
          <Col>
          <Nav className="flex-column fs-5">
              <Nav.Link as={Link} to="/about" className="footer-link"><FontAwesomeIcon icon={faBriefcase} className="mr-2" />About</Nav.Link>
              <Nav.Link as={Link} to="/about" className="footer-link"><FontAwesomeIcon icon={faPaperPlane} className="mr-2" />Contact</Nav.Link>
              <Nav.Link as={Link} to="/about" className="footer-link"><FontAwesomeIcon icon={faExclamationTriangle} className="mr-2" />Disclaimer</Nav.Link>
            </Nav>
          </Col>
        </Row>
        {/* Footer Note */}
        <Row className="bg-body-tertiary p-4">
          <Col className="text-center">
            <p className="text-muted">
              © 2025 Arkestra Culture. All rights reserved. Crafted with ❤️ for Bhojpuri culture enthusiasts.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default ArkestraFooter;
