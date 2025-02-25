import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; // Import Link from React Router
import logo from '../assets/images/logo.png';
import '../allCss/ArkestraNavbar.css';

const ArkestraNavbar = () => {
  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Arkestra Logo"
            style={{ height: '40px', marginRight: '10px' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', gap: '30px' }} // Added gap property
            navbarScroll
          >
            <Nav.Link as={Link} to="/" className="navbar-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/allVideos" className="navbar-link">Videos</Nav.Link>
            <Nav.Link as={Link} to="/allNews" className="navbar-link">News</Nav.Link>
            <Nav.Link as={Link} to="/arkestra" className="navbar-link">What is Arkestra</Nav.Link>
            <Nav.Link as={Link} to="/about" className="navbar-link">About</Nav.Link>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ArkestraNavbar;
