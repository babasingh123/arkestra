import React from 'react';
import '../allCss/ProfileHeader.css';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../allCss/ArkestraHomeCss.css';

const PerformerProfileHeader = ({ performer }) => {
  const getImage = (imageName) => {
    try {
      return require(`../assets/images/${imageName}`);
    } catch (error) {
      console.error('Image not found:', imageName);
    }
  };

   // Inline Styles
   const aboutTextStyle = {
    color: '#333',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    textAlign: 'left',
    marginBottom: '20px',
  };

  const headingStyle = {
    color: '#2c3e50',
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '15px',
    textTransform: 'capitalize',
  };

  const paragraphStyle = {
    fontSize: '1rem',
    color: '#555',
    textAlign: 'justify',
  };

  return (
    <div>
      <section className="section about-section arkestra-header" id="about">
        <div className="container">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-6">
              <div className="about-text" style={aboutTextStyle}>
                <h2 style={headingStyle}>About {performer.name}</h2>
                <p style={paragraphStyle}>{performer.description}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <Card border="danger" style={{ height: '50', width: '30rem' }}>
                <Card.Img
                  variant="top"
                  src={getImage(performer.profilePicture)}
                  alt={performer.name}
                  className="category-image"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Fancy Social Media Section */}
      <section className="social-media-section">
        <div className="container">
          <h3 className="text-center fancy-heading">Connect with {performer.name}</h3>
          <div className="row justify-content-center">
            {performer.socialLinks.facebook && (
              <div className="col-md-3">
                <Card className="social-card fancy-card">
                  <Card.Body className="text-center">
                    <a
                      href={performer.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fancy-link"
                    >
                      <FontAwesomeIcon icon={faFacebook} size="3x" />
                      <p className="social-title">Facebook</p>
                    </a>
                  </Card.Body>
                </Card>
              </div>
            )}
            {performer.socialLinks.instagram && (
              <div className="col-md-3">
                <Card className="social-card fancy-card">
                  <Card.Body className="text-center">
                    <a
                      href={performer.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fancy-link"
                    >
                      <FontAwesomeIcon icon={faInstagram} size="3x" />
                      <p className="social-title">Instagram</p>
                    </a>
                  </Card.Body>
                </Card>
              </div>
            )}
            {performer.socialLinks.youtube && (
              <div className="col-md-3">
                <Card className="social-card fancy-card">
                  <Card.Body className="text-center">
                    <a
                      href={performer.socialLinks.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fancy-link"
                    >
                      <FontAwesomeIcon icon={faYoutube} size="3x" />
                      <p className="social-title">YouTube</p>
                    </a>
                  </Card.Body>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PerformerProfileHeader;
