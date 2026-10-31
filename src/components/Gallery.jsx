import { useCallback, useEffect, useState } from 'react';
import { Row, Col, Modal } from 'react-bootstrap';
import Icon from './Icon.jsx';

// Image gallery with an accessible lightbox (Esc closes, arrow keys navigate, focus is trapped by Modal).
export default function Gallery({ images, title }) {
  const [index, setIndex] = useState(null);
  const open = index !== null;
  const go = useCallback((dir) => setIndex((i) => (i + dir + images.length) % images.length), [images.length]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, go]);

  return (
    <>
      <Row className="g-3">
        {images.map((img, i) => (
          <Col sm={6} lg={4} key={i}>
            <button type="button" className="gallery-btn" onClick={() => setIndex(i)} aria-label={`Open image ${i + 1} of ${images.length}: ${img.alt}`}>
              <img src={img.src} alt="" loading="lazy" decoding="async" width="1200" height="800" />
            </button>
          </Col>
        ))}
      </Row>
      <Modal show={open} onHide={() => setIndex(null)} centered size="xl" className="lightbox" aria-label={`${title} image gallery`}>
        {open && (
          <Modal.Body>
            <button type="button" className="lightbox-close" onClick={() => setIndex(null)} aria-label="Close gallery">
              <Icon name="close" />
            </button>
            <img src={images[index].src} alt={images[index].alt} width="1200" height="800" />
            {images.length > 1 && (
              <>
                <button type="button" className="lightbox-ctrl prev" onClick={() => go(-1)} aria-label="Previous image"><Icon name="prev" /></button>
                <button type="button" className="lightbox-ctrl next" onClick={() => go(1)} aria-label="Next image"><Icon name="next" /></button>
              </>
            )}
            <p className="lightbox-caption" aria-live="polite">{images[index].alt} ({index + 1} of {images.length})</p>
          </Modal.Body>
        )}
      </Modal>
    </>
  );
}
