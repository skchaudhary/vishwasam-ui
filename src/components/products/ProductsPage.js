import React, { useState } from 'react';
import './ProductsPage.css';
import products from '../../data/products';
import ImageModal from '../common/ImageModal';
import ProductVariantSelector from './ProductVariantSelector';

function ProductsPage() {
  const [filter, setFilter] = useState('All');
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [selectedVariants, setSelectedVariants] = useState({});

  const categories = ['All', 'Home & Kitchen', 'Electronics'];

  const filteredProducts =
    filter === 'All' ? products : products.filter((p) => p.category === filter);
  const selectedProduct = products.find((product) => product.id === selectedProductId);
  const selectedVariant = selectedProduct?.variants?.find(
    (variant) => variant.id === selectedVariants[selectedProduct.id]
  );
  const modalProduct = selectedProduct ? { ...selectedProduct, ...(selectedVariant || {}) } : null;

  return (
    <div className="ProductsPage">
      <div className="Products-header">
        <h2>Our Products</h2>
        <p>Explore our wide range of premium quality products.</p>
      </div>

      <div className="Category-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`Filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="Products-grid">
        {filteredProducts.map((product) => (
          <ProductGridItem
            key={product.id}
            product={product}
            selectedVariantId={selectedVariants[product.id]}
            onVariantChange={(variantId) =>
              setSelectedVariants((current) => ({
                ...current,
                [product.id]: variantId,
              }))
            }
            onSelect={() => setSelectedProductId(product.id)}
          />
        ))}
      </div>

      {modalProduct && (
        <ImageModal product={modalProduct} onClose={() => setSelectedProductId(null)} />
      )}
    </div>
  );
}

function ProductGridItem({ product, selectedVariantId, onVariantChange, onSelect }) {
  const selectedVariant =
    product.variants?.find((variant) => variant.id === selectedVariantId) || product.variants?.[0];
  const displayProduct = selectedVariant ? { ...product, ...selectedVariant } : product;

  return (
    <div className="Slide-item">
      <div style={{ position: 'relative', cursor: 'pointer' }} onClick={onSelect}>
        <img
          src={displayProduct.image}
          alt={`${product.title}${selectedVariant ? ` - ${selectedVariant.name}` : ''}`}
          className="Slide-image"
          title="Click to view all photos"
        />
        {displayProduct.images && displayProduct.images.length > 1 && (
          <span
            style={{
              position: 'absolute',
              bottom: 8,
              right: 8,
              background: 'rgba(0,0,0,0.7)',
              color: '#fff',
              fontSize: '11px',
              padding: '3px 7px',
              borderRadius: '4px',
              fontWeight: 600,
            }}
          >
            📷 {displayProduct.images.length} photos
          </span>
        )}
      </div>
      <div className="Slide-content">
        <h4 onClick={onSelect} style={{ cursor: 'pointer' }}>
          {product.title}
        </h4>
        <p>{product.description}</p>
        <ProductVariantSelector
          product={product}
          selectedVariantId={selectedVariant?.id}
          onVariantChange={onVariantChange}
        />
        <div className="Slide-price">{product.price}</div>
        {product.affiliateUrl ? (
          <a
            href={product.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="Buy-button"
          >
            Buy on{' '}
            {product.affiliateUrl.includes('amazon') || product.affiliateUrl.includes('amzn')
              ? 'Amazon'
              : 'Flipkart'}
          </a>
        ) : (
          <a href={product.url} className="Buy-button">
            View Details
          </a>
        )}
      </div>
    </div>
  );
}

export default ProductsPage;
