import React, { useState } from 'react';
import './ProductsPage.css';
import products from '../../data/products';
import AdsensePlaceholder from '../Adsense/AdsensePlaceholder';

function ProductsPage() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Home & Kitchen', 'Electronics'];

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="ProductsPage">
      <div className="Products-header">
        <h2>Our Products</h2>
        <p>Explore our wide range of premium quality products.</p>
      </div>

      <div className="Category-filters">
        {categories.map(cat => (
          <button 
            key={cat} 
            className={`Filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <AdsensePlaceholder position="products-top" />

      <div className="Products-grid">
        {filteredProducts.map(product => (
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

      <AdsensePlaceholder position="products-bottom" />
    </div>
  );
}

export default ProductsPage;
