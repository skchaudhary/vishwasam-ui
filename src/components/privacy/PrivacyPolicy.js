import React from "react";
import "./PrivacyPolicy.css";

function PrivacyPolicy() {
  return (
    <div className="Policy">
      <div className="Policy-header">
        <h1>Privacy Policy</h1>
        <p className="Policy-date">Last updated: August 15, 2026</p>
        <p className="Policy-intro">
          At Bharwaliya, we are committed to protecting your privacy. This
          Privacy Policy explains how we collect, use, and safeguard your
          information when you visit <strong>bharwaliya.com</strong>.
        </p>
      </div>

      <section className="Policy-section">
        <h2>1. Information We Collect</h2>
        <h3>Automatically Collected Data</h3>
        <p>
          When you visit our site, we may automatically collect standard web
          server log data such as your IP address, browser type, operating
          system, referring URLs, and pages visited. This data is used solely
          for security monitoring and aggregate analytics.
        </p>
        <h3>Cookies</h3>
        <p>
          We use cookies — small text files stored in your browser — to improve
          your browsing experience. These include:
        </p>
        <ul>
          <li>
            <strong>Functional cookies:</strong> Required for the site to work
            correctly.
          </li>
          <li>
            <strong>Analytics cookies:</strong> Used by Google Analytics to
            understand how visitors interact with our site.
          </li>
          <li>
            <strong>Advertising cookies:</strong> Used by Google AdSense to
            serve relevant advertisements.
          </li>
        </ul>
        <p>
          You can disable cookies in your browser settings at any time, though
          some features of the site may not function properly as a result.
        </p>
        <h3>Contact Form Data</h3>
        <p>
          If you submit our contact form, we collect the name, email address,
          phone number, and message you provide. This information is used only
          to respond to your inquiry.
        </p>
      </section>

      <section className="Policy-section">
        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To operate and improve the website</li>
          <li>To respond to contact form submissions</li>
          <li>To serve relevant advertisements via Google AdSense</li>
          <li>To understand user behaviour using aggregate analytics</li>
          <li>To detect and prevent fraudulent or malicious activity</li>
        </ul>
        <p>
          We do <strong>not</strong> sell, rent, or trade your personal
          information to third parties.
        </p>
      </section>

      <section className="Policy-section">
        <h2>3. Advertising — Google AdSense</h2>
        <p>
          We use Google AdSense to display advertisements on this site. Google
          AdSense uses cookies and web beacons to serve ads based on your prior
          visits to this and other websites. Google's use of advertising cookies
          enables it and its partners to serve ads based on your visit to our
          site and other sites on the Internet.
        </p>
        <p>
          You may opt out of personalised advertising by visiting{" "}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Ads Settings
          </a>{" "}
          or by visiting{" "}
          <a
            href="https://www.aboutads.info/choices/"
            target="_blank"
            rel="noopener noreferrer"
          >
            aboutads.info
          </a>
          .
        </p>
      </section>

      <section className="Policy-section">
        <h2>4. Affiliate Disclosure</h2>
        <p>
          Bharwaliya participates in affiliate advertising programmes including
          the <strong>Amazon Associates Programme</strong> and the{" "}
          <strong>Flipkart Affiliate Programme</strong>. This means we may earn
          a commission when you click on product links and make a purchase on
          Amazon India (amazon.in) or Flipkart — at no extra cost to you.
        </p>
        <p>
          All product recommendations are based on genuine assessment of
          quality, value, and relevance. Our editorial opinions are independent
          and are not influenced by affiliate relationships.
        </p>
      </section>

      <section className="Policy-section">
        <h2>5. Third-Party Services</h2>
        <p>
          Our site may use the following third-party services, each governed by
          their own privacy policies:
        </p>
        <ul>
          <li>
            <strong>Google Analytics</strong> — website traffic analysis (
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Privacy Policy
            </a>
            )
          </li>
          <li>
            <strong>Google AdSense</strong> — advertisement delivery (
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Privacy Policy
            </a>
            )
          </li>
          <li>
            <strong>Formspree</strong> — contact form processing (
            <a
              href="https://formspree.io/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Formspree Privacy Policy
            </a>
            )
          </li>
          <li>
            <strong>Amazon.in / Flipkart</strong> — affiliate product links
            (governed by their respective privacy policies)
          </li>
        </ul>
      </section>

      <section className="Policy-section">
        <h2>6. Children's Privacy</h2>
        <p>
          This site is not directed at children under the age of 13. We do not
          knowingly collect personal information from children. If you believe a
          child has provided us with personal information, please contact us and
          we will delete it promptly.
        </p>
      </section>

      <section className="Policy-section">
        <h2>7. Data Security</h2>
        <p>
          We take reasonable technical and organisational measures to protect
          the information you provide. However, no method of transmission over
          the Internet is 100% secure, and we cannot guarantee absolute
          security.
        </p>
      </section>

      <section className="Policy-section">
        <h2>8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with an updated "Last updated" date. We encourage
          you to review this page periodically.
        </p>
      </section>

      <section className="Policy-section">
        <h2>9. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at:{" "}
          <a href="mailto:admin@bharwaliya.com">admin@bharwaliya.com</a>
        </p>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
