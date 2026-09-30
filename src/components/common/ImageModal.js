import React, { useState, useEffect, useCallback } from "react";
import "./ImageModal.css";

function ImageModal({ product, initialIndex = 0, onClose }) {
  const images = product?.images && product.images.length > 0
    ? product.images
    : product?.image
    ? [product.image]
    : [];

  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, handlePrev, handleNext]);

  if (!product || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="ImageModal-backdrop" onClick={onClose}>
      <div className="ImageModal-content" onClick={(e) => e.stopPropagation()}>
        <button className="ImageModal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className="ImageModal-header">
          <h3>{product.title}</h3>
          <span className="ImageModal-counter">
            {currentIndex + 1} / {images.length}
          </span>
        </div>

        <div className="ImageModal-viewer">
          {images.length > 1 && (
            <button className="ImageModal-nav prev" onClick={handlePrev} aria-label="Previous image">
              ‹
            </button>
          )}

          <div className="ImageModal-stage">
            <img src={currentImage} alt={`${product.title} slide ${currentIndex + 1}`} />
          </div>

          {images.length > 1 && (
            <button className="ImageModal-nav next" onClick={handleNext} aria-label="Next image">
              ›
            </button>
          )}
        </div>

        {images.length > 1 && (
          <div className="ImageModal-thumbnails">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className={`ImageModal-thumb ${idx === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
        )}

        <div className="ImageModal-footer">
          <div className="ImageModal-info">
            <span className="ImageModal-price">{product.price}</span>
            <p className="ImageModal-desc">{product.description}</p>
          </div>
          {product.affiliateUrl && (
            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ImageModal-buy-btn"
            >
              Buy on{" "}
              {product.affiliateUrl.includes("amazon") || product.affiliateUrl.includes("amzn")
                ? "Amazon"
                : "Seller Site"}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ImageModal;
