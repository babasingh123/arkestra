import React from "react";
import { Container, Row, Col, Stack, Image, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from React Router
import logo from "../assets/images/logo.png";

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
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/allVideos">Videos</Nav.Link>
              <Nav.Link as={Link} to="/arkestra">What is Arkestra</Nav.Link>
            </Nav>
          </Col>
          <Col>
          <Nav className="flex-column fs-5">
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/about">Contact</Nav.Link>
              <Nav.Link as={Link} to="/about">Disclaimer</Nav.Link>
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
