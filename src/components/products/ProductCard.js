import React, { useState } from 'react';
import './ProductCard.css';
import ProductVariantSelector from './ProductVariantSelector';

export default function ProductCard({ product }) {
  const [selectedVariantId, setSelectedVariantId] = useState(product.variants?.[0]?.id);
  const selectedVariant =
    product.variants?.find((variant) => variant.id === selectedVariantId) || product.variants?.[0];
  const displayProduct = selectedVariant ? { ...product, ...selectedVariant } : product;
  const isAffiliate = product.source === 'affiliate';
  const link = isAffiliate ? product.affiliateUrl : product.url;

  return (
    <div className="product-card">
      {displayProduct.image && (
        <img
          src={displayProduct.image}
          alt={`${product.title}${selectedVariant ? ` - ${selectedVariant.name}` : ''}`}
          className="product-img"
        />
      )}
      <div className="product-info">
        <h3>{product.title}</h3>
        <p className="price">{product.price}</p>
        <p className="desc">{product.description}</p>
        <ProductVariantSelector
          product={product}
          selectedVariantId={selectedVariant?.id}
          onVariantChange={setSelectedVariantId}
        />
        <a className="visit-link" href={link} target="_blank" rel="noopener noreferrer">
          {isAffiliate
            ? link.includes('amazon') || link.includes('amzn')
              ? 'Buy on Amazon'
              : 'View on seller site'
            : 'View details'}
        </a>
      </div>
    </div>
  );
}
