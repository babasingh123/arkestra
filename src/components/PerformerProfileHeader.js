import React from 'react';
import '../allCss/ProfileHeader.css';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const PerformerProfileHeader = ({ performer }) => {
  return (
    <div>
      <section className="section about-section gray-bg" id="about">
        <div className="container">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-6">
              <div className="about-text go-to">
                <h2 className="dark-color">About {performer.name}</h2>
                <p>{performer.description}</p>
                <div className="social-links mt-4">
                  {performer.socialLinks.facebook && (
                    <a
                      href={performer.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                  )}
                  {performer.socialLinks.instagram && (
                    <a
                      href={performer.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="instagram-icon-link"
                    >
                      <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                  )}
                  {performer.socialLinks.youtube && (
                    <a
                      href={performer.socialLinks.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="youtube-icon-link"
                    >
                      <FontAwesomeIcon icon={faYoutube} size="2x" />
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <Card border="danger" style={{ height:'30' , width: '30rem' }}>
                <Card.Img
                  variant="top"
                  src={performer.profilePicture}
                  alt={performer.name}
                  className="category-image"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PerformerProfileHeader;
