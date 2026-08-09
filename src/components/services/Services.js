import React from "react";
import "./Services.css";
import AdsensePlaceholder from "../Adsense/AdsensePlaceholder";

function Services() {
  const services = [
    {
      id: 1,
      title: "E-Commerce Retail",
      description:
        "We offer a wide selection of premium quality products across categories like Home & Kitchen and Electronics. Our priority is delivering excellence straight to your doorstep.",
    },
    // More services can be added here in the future
  ];

  return (
    <div className="Services">
      <div className="Services-header">
        <h2>Our Services</h2>
        <p>Discover what Bharwaliya has to offer.</p>
      </div>

      <AdsensePlaceholder position="services-top" />

      <div className="Services-grid">
        {services.map((service) => (
          <div className="Service-card" key={service.id}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
