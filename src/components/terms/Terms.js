import React from "react";
import "./Terms.css";
import { Link } from "react-router-dom";

function Terms() {
  return (
    <div className="Terms">
      <div className="Terms-header">
        <h1>Terms of Service</h1>
        <p className="Terms-date">Last updated: August 15, 2026</p>
        <p className="Terms-intro">
          Please read these Terms of Service carefully before using{" "}
          <strong>bharwaliya.com</strong>. By accessing or using the site, you
          agree to be bound by these terms.
        </p>
      </div>

      <section className="Terms-section">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By visiting, browsing, or using Bharwaliya ("the site"), you agree to
          comply with and be bound by these Terms of Service. If you do not
          agree with any part of these terms, please do not use the site.
        </p>
      </section>

      <section className="Terms-section">
        <h2>2. Use of the Site</h2>
        <p>You agree to use the site only for lawful purposes. You must not:</p>
        <ul>
          <li>
            Use the site in any way that violates applicable local, national, or
            international laws or regulations
          </li>
          <li>
            Attempt to gain unauthorised access to any part of the site or its
            related systems
          </li>
          <li>
            Transmit any unsolicited or unauthorised advertising or promotional
            material
          </li>
          <li>
            Reproduce, duplicate, copy, or re-sell any part of the site in
            violation of these terms
          </li>
          <li>
            Engage in any conduct that restricts or inhibits anyone's use or
            enjoyment of the site
          </li>
        </ul>
      </section>

      <section className="Terms-section">
        <h2>3. Affiliate Disclaimer</h2>
        <p>
          Bharwaliya participates in affiliate advertising programmes, including
          the Amazon Associates Programme and the Flipkart Affiliate Programme.
          When you click on product links on this site and make a purchase, we
          may earn an affiliate commission at no additional cost to you.
        </p>
        <p>
          Product prices, availability, and descriptions are provided for
          informational purposes only and are subject to change without notice.
          Always verify the final price and product details on the retailer's
          website before purchasing.
        </p>
      </section>

      <section className="Terms-section">
        <h2>4. Intellectual Property</h2>
        <p>
          The content on this site — including text, graphics, logos, and
          images — is the property of Bharwaliya or its content suppliers and is
          protected by applicable intellectual property laws. You may not
          reproduce, distribute, or create derivative works without prior
          written permission from Bharwaliya.
        </p>
      </section>

      <section className="Terms-section">
        <h2>5. Disclaimer of Warranties</h2>
        <p>
          This site and its content are provided on an "as is" and "as
          available" basis without any warranties of any kind, either express or
          implied. Bharwaliya does not warrant that the site will be
          uninterrupted, error-free, or free of viruses or other harmful
          components.
        </p>
        <p>
          Product information, pricing, and availability are sourced from
          affiliate networks and may not always be up to date. We make no
          warranty regarding the accuracy or completeness of any product
          information displayed.
        </p>
      </section>

      <section className="Terms-section">
        <h2>6. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Bharwaliya shall not be liable
          for any indirect, incidental, special, consequential, or punitive
          damages arising from your use of the site or any products purchased
          through affiliate links. Your sole remedy for dissatisfaction with the
          site is to stop using it.
        </p>
      </section>

      <section className="Terms-section">
        <h2>7. Third-Party Links</h2>
        <p>
          The site contains links to third-party websites such as Amazon India
          and Flipkart. These links are provided for your convenience. We have
          no control over the content of those sites and accept no responsibility
          for them or for any loss or damage that may arise from your use of
          them.
        </p>
      </section>

      <section className="Terms-section">
        <h2>8. Advertising</h2>
        <p>
          The site displays advertisements served by Google AdSense. These ads
          are selected by Google based on your browsing activity and interests.
          We do not control the content of these advertisements. For more
          information, see our{" "}
          <Link to="/privacy-policy">Privacy Policy</Link>.
        </p>
      </section>

      <section className="Terms-section">
        <h2>9. Changes to Terms</h2>
        <p>
          We reserve the right to update these Terms of Service at any time.
          Changes will be posted on this page with an updated "Last updated"
          date. Continued use of the site after changes are posted constitutes
          your acceptance of the revised terms.
        </p>
      </section>

      <section className="Terms-section">
        <h2>10. Governing Law</h2>
        <p>
          These terms shall be governed by and construed in accordance with the
          laws of India. Any disputes relating to these terms shall be subject
          to the exclusive jurisdiction of the courts of India.
        </p>
      </section>

      <section className="Terms-section">
        <h2>11. Contact Us</h2>
        <p>
          If you have any questions about these Terms of Service, please contact
          us at:{" "}
          <a href="mailto:admin@bharwaliya.com">admin@bharwaliya.com</a>
        </p>
      </section>
    </div>
  );
}

export default Terms;
