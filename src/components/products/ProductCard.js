import React from "react";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const isAffiliate = product.source === "affiliate";
  const link = isAffiliate ? product.affiliateUrl : product.url;

  return (
    <div className="product-card">
      {product.image && (
        <img src={product.image} alt={product.title} className="product-img" />
      )}
      <div className="product-info">
        <h3>{product.title}</h3>
        <p className="price">{product.price}</p>
        <p className="desc">{product.description}</p>
        <a
          className="visit-link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {isAffiliate ? "View on seller site" : "View details"}
        </a>
      </div>
    </div>
  );
}
