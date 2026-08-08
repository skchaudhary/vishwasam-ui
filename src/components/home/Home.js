import React, { useEffect, useRef } from 'react';
import './Home.css';
import products from '../../data/products';
import AdsensePlaceholder from '../Adsense/AdsensePlaceholder';

function Home() {
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = React.useState(false);

  // Auto-scroll slider
  useEffect(() => {
    const slider = sliderRef.current;
    const scrollStep = 1;
    const delay = 30; // ms

    const step = () => {
      if (slider && !isPaused) {
        slider.scrollLeft += scrollStep;
        if (slider.scrollLeft >= (slider.scrollWidth - slider.clientWidth)) {
          slider.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(step, delay);
    return () => clearInterval(interval);
  }, [isPaused]);

  const featuredProducts = products.filter(p => p.featured);

  return (
    <div className="Home">
      <div className="Hero">
        <h2>Welcome to Bharwaliya</h2>
        <p>Your one-stop destination for premium home, kitchen, and electronic products. Discover top-rated items curated just for you.</p>
      </div>

      <AdsensePlaceholder position="home-top" />

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
          {featuredProducts.map(product => (
            <div className="Slide-item" key={product.id}>
              <img src={product.image} alt={product.title} className="Slide-image" />
              <div className="Slide-content">
                <h4>{product.title}</h4>
                <p>{product.description}</p>
                <div className="Slide-price">{product.price}</div>
                {product.affiliateUrl ? (
                  <a href={product.affiliateUrl} target="_blank" rel="noopener noreferrer" className="Buy-button">
                    Buy on {product.affiliateUrl.includes('amazon') ? 'Amazon' : 'Flipkart'}
                  </a>
                ) : (
                  <a href={product.url} className="Buy-button">View Details</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <AdsensePlaceholder position="home-bottom" />
    </div>
  );
}

export default Home;
