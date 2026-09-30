import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products";
import ImageModal from "../common/ImageModal";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!product) return <div style={{ padding: 20 }}>Product not found.</div>;

  const isAffiliate = product.source === "affiliate";
  const link = isAffiliate ? product.affiliateUrl : product.url;
  const images = product.images && product.images.length > 0 ? product.images : [product.image];
  const currentImage = images[selectedImgIndex] || product.image;

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 20 }}>
      <h1>{product.title}</h1>

      <div style={{ position: "relative", display: "inline-block" }}>
        {currentImage && (
          <img
            src={currentImage}
            alt={product.title}
            onClick={() => setIsModalOpen(true)}
            title="Click to view full slideshow"
            style={{
              width: 340,
              height: 340,
              objectFit: "contain",
              borderRadius: 8,
              border: "1px solid #e0e0e0",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          />
        )}
        <button
          onClick={() => setIsModalOpen(true)}
          style={{
            position: "absolute",
            bottom: 12,
            right: 12,
            background: "rgba(0,0,0,0.7)",
            color: "#fff",
            border: "none",
            borderRadius: 4,
            padding: "4px 8px",
            fontSize: "12px",
            cursor: "pointer",
          }}
        >
          🔍 View Slideshow ({images.length})
        </button>
      </div>

      {images.length > 1 && (
        <div style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
          {images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${product.title} view ${idx + 1}`}
              onClick={() => {
                setSelectedImgIndex(idx);
              }}
              onDoubleClick={() => {
                setSelectedImgIndex(idx);
                setIsModalOpen(true);
              }}
              style={{
                width: 64,
                height: 64,
                objectFit: "cover",
                borderRadius: 6,
                cursor: "pointer",
                border: selectedImgIndex === idx ? "2px solid #0a63a9" : "1px solid #ccc",
                opacity: selectedImgIndex === idx ? 1 : 0.7,
              }}
            />
          ))}
        </div>
      )}

      <p style={{ fontWeight: 700, fontSize: "1.3rem", marginTop: 18, color: "#2b7817" }}>
        {product.price}
      </p>
      <p style={{ lineHeight: 1.6, color: "#444" }}>{product.description}</p>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          padding: "12px 22px",
          background: "#ff9900",
          color: "#111",
          borderRadius: 6,
          textDecoration: "none",
          fontWeight: 700,
          marginTop: 12,
          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        }}
      >
        {isAffiliate
          ? link.includes("amazon") || link.includes("amzn")
            ? "Buy on Amazon"
            : "Buy on Seller Site"
          : "View Details"}
      </a>

      {isModalOpen && (
        <ImageModal
          product={product}
          initialIndex={selectedImgIndex}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
