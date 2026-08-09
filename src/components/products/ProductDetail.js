import React from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products";
import AdsensePlaceholder from "../Adsense/AdsensePlaceholder";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) return <div style={{ padding: 20 }}>Product not found.</div>;

  const isAffiliate = product.source === "affiliate";
  const link = isAffiliate ? product.affiliateUrl : product.url;

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 20 }}>
      <h1>{product.title}</h1>
      {product.image && (
        <img
          src={product.image}
          alt={product.title}
          style={{
            width: 300,
            height: 220,
            objectFit: "cover",
            borderRadius: 6,
          }}
        />
      )}
      <p style={{ fontWeight: 700 }}>{product.price}</p>
      <p>{product.description}</p>

      <AdsensePlaceholder position="product-detail" />

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "10px 14px",
          background: "#0a63a9",
          color: "#fff",
          borderRadius: 6,
          textDecoration: "none",
        }}
      >
        Go to seller
      </a>
    </div>
  );
}
