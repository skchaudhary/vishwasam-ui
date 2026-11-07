import React from 'react';
import './ProductVariantSelector.css';

export default function ProductVariantSelector({ product, selectedVariantId, onVariantChange }) {
  if (!product.variants?.length) return null;

  const selectedVariant =
    product.variants.find((variant) => variant.id === selectedVariantId) || product.variants[0];

  return (
    <div className="Product-variant-selector">
      <span className="Product-variant-label">Color: {selectedVariant.name}</span>
      <div className="Product-variant-options" role="group" aria-label="Choose a color">
        {product.variants.map((variant) => (
          <button
            key={variant.id}
            type="button"
            className={`Product-variant-option ${
              variant.id === selectedVariant.id ? 'active' : ''
            }`}
            onClick={() => onVariantChange(variant.id)}
            aria-label={variant.name}
            aria-pressed={variant.id === selectedVariant.id}
          >
            <span
              className={`Product-variant-swatch Product-variant-swatch--${variant.id}`}
              aria-hidden="true"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
