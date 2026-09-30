import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import products from "../../data/products";
import ImageModal from "../common/ImageModal";

function Home() {
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Auto-scroll slider
  useEffect(() => {
    const slider = sliderRef.current;
    const scrollStep = 1;
    const delay = 30; // ms

    const step = () => {
      if (slider && !isPaused && !selectedProduct) {
        slider.scrollLeft += scrollStep;
        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
          slider.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(step, delay);
    return () => clearInterval(interval);
  }, [isPaused, selectedProduct]);

  const featuredProducts = products.filter((p) => p.featured);

  return (
    <div className="Home">
      <div className="Hero">
        <h2>Welcome to Bharwaliya</h2>
        <p>
          Your one-stop destination for premium home, kitchen, and electronic
          products. Discover top-rated items curated just for you.
        </p>
      </div>

      <div className="Slider-container">
        <h3>Featured Products</h3>
        <div
          className="Slider"
          ref={sliderRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {featuredProducts.map((product) => (
            <div className="Slide-item" key={product.id}>
              <div style={{ position: "relative", cursor: "pointer" }} onClick={() => setSelectedProduct(product)}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="Slide-image"
                  title="Click to view all photos"
                />
                {product.images && product.images.length > 1 && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: 8,
                      right: 8,
                      background: "rgba(0,0,0,0.7)",
                      color: "#fff",
                      fontSize: "11px",
                      padding: "3px 7px",
                      borderRadius: "4px",
                      fontWeight: 600,
                    }}
                  >
                    📷 {product.images.length} photos
                  </span>
                )}
              </div>
              <div className="Slide-content">
                <h4 onClick={() => setSelectedProduct(product)} style={{ cursor: "pointer" }}>{product.title}</h4>
                <p>{product.description}</p>
                <div className="Slide-price">{product.price}</div>
                {product.affiliateUrl ? (
                  <a
                    href={product.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="Buy-button"
                  >
                    Buy on{" "}
                    {product.affiliateUrl.includes("amazon") || product.affiliateUrl.includes("amzn")
                      ? "Amazon"
                      : "Flipkart"}
                  </a>
                ) : (
                  <a href={product.url} className="Buy-button">
                    View Details
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ImageModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

export default Home;
