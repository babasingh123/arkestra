import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import VideoModal from './VideoModal';
import PropTypes from 'prop-types';
import '../allCss/VideoCard.css';

const VideoCard = ({ video }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Card border="dark" className="h-100 w-100 d-flex flex-column">
        <div>
          {video.embedLink && (
            <iframe
              title={video.title}
              src={video.embedLink}
              width="100%"
              height="200px"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title>{video.title}</Card.Title>
          <div className="d-flex justify-content-between mt-auto">
            <a
              href={video.directLink}
              target="_blank"
              rel="noopener noreferrer"
              className="youtube-icon-link"
              title="Watch on YouTube"
            >
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <button
              className="btn btn-outline-success"
              onClick={handleShowModal}
            >
              Watch Here
            </button>
          </div>
        </Card.Body>
      </Card>

      {/* Video Modal */}
      <VideoModal show={showModal} onHide={handleCloseModal} video={video} />
    </>
  );
};

VideoCard.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    embedLink: PropTypes.string,
    directLink: PropTypes.string,
    copyrightInfo: PropTypes.shape({
      owner: PropTypes.string,
    }),
  }).isRequired,
};

export default VideoCard;
