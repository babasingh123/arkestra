import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const VideoModal = ({ show, onHide, video }) => {
  return (
    <Modal show={show} onHide={onHide} centered size="xl">
      {/* Modal Header */}
      <Modal.Header closeButton>
        <Modal.Title>{video?.title || 'Video Player'}</Modal.Title>
      </Modal.Header>

      {/* Modal Body */}
      <Modal.Body>
        {video ? (
          <>
            {/* Video Iframe */}
            <iframe
              title={video.title}
              src={video.embedLink}
              width="100%"
              height="400px"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded"
            ></iframe>

            {/* Song Details Section */}
            <div className="song-details mt-4">
              <h5 className="text-primary">🎵 Song Details</h5>
              <p>
                <strong>Title:</strong> {video.song.title || 'N/A'}
              </p>
              <p>
                <strong>Artist:</strong> {video.song.artist || 'N/A'}
              </p>
              <p>
                <strong>License:</strong>{' '}
                <a
                  href={video.copyrightInfo.owner}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  {video.copyrightInfo.license || 'N/A'}
                </a>
              </p>
            </div>

            {/* Tags Section */}
            <div className="tags-section mt-4">
              <h5 className="text-primary">🏷️ Tags</h5>
              <div className="d-flex flex-wrap gap-2">
                {video.tags.length > 0 ? (
                  video.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      bg="info"
                      className="text-light"
                      pill
                      style={{ fontSize: '0.9rem' }}
                    >
                      {tag}
                    </Badge>
                  ))
                ) : (
                  <p>No tags available</p>
                )}
              </div>
            </div>
          </>
        ) : (
          <p>No video selected</p>
        )}
      </Modal.Body>

      {/* Modal Footer */}
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default VideoModal;
