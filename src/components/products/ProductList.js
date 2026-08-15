import React from "react";
import products from "../../data/products";
import ProductCard from "./ProductCard";

export default function ProductList() {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: 20 }}>
      <h1>Home & Kitchen — Featured</h1>
      <p>Curated items and recommended products from partner platforms.</p>

      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}

    </div>
  );
}
