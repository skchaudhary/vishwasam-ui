import React from 'react';
import './About.css';
import AdsensePlaceholder from '../Adsense/AdsensePlaceholder';

function About() {
  return (
    <div className="About">
      <div className="About-header">
        <h2>About Us</h2>
        <p>Bharwaliya is a dedicated e-commerce organization committed to bringing you the best products online.</p>
      </div>

      <AdsensePlaceholder position="about-top" />

      <div className="About-content">
        <div className="About-card">
          <h3>Our Mission</h3>
          <p>
            At Bharwaliya, our mission is to simplify your shopping experience. As an online seller, we meticulously select high-quality products across various categories, including Home & Kitchen and Electronics. 
          </p>
          <p>
            We partner with trusted platforms like Amazon and Flipkart to ensure you receive authentic products with reliable delivery.
          </p>
        </div>

        <div className="About-card">
          <h3>Leadership</h3>
          <p>
            Bharwaliya is driven by a passion for quality and customer satisfaction.
          </p>
          <div className="Profile-section">
            <div className="Profile-avatar">S</div>
            <div className="Profile-info">
              <h4>Seema Devi</h4>
              <p>Founder & CEO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
