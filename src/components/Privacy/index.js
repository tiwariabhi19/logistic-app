import React from "react";
import Headers from "../Headers";
import Footer from "../Footer";

import "./index.css";

const Privacy = () => {
  return (
    <>
      <Headers />
      <section className="privacy-section">
        <div className="privacy-container">
          <h2>Privacy Policy</h2>
          <p>
            At Haulnet India Pvt Ltd, we are committed to protecting your
            privacy. This Privacy Policy outlines how we collect, use, disclose,
            and safeguard your information when you visit our website and use
            our services. By using our website and services, you consent to the
            data practices described in this policy.
          </p>
          <h3>1. Information We Collect</h3>
          <p>
            We may collect personal information from you when you request a
            quote or service, contact us via our website, or subscribe to our
            newsletter. The types of information we may collect include:
          </p>
          <ul className="info-list">
            <li>Name</li>
            <li>Contact information (email, phone number, address)</li>
            <li>Company name and details</li>
            <li>Payment information (for processing orders)</li>
            <li>Service preferences</li>
          </ul>
          <h3>2. How We Use Your Information</h3>
          <p>
            We use the information we collect to provide and manage our
            logistics services, communicate with you, process transactions, and
            improve our services.
          </p>
          <h3>3. Information Sharing and Disclosure</h3>
          <p>
            We do not sell or rent your personal information. We may share your
            information with service providers who assist us in providing our
            services and to comply with legal obligations.
          </p>
          <h3>4. Data Security</h3>
          <p>
            We take reasonable measures to protect your personal information
            from unauthorized access, use, or disclosure. However, no method of
            transmission over the internet is 100% secure.
          </p>
          <h3>5. Your Rights</h3>
          <p>
            You have the right to access, correct, or delete your personal
            information. You can also withdraw consent for processing your
            information where applicable.
          </p>
          <h3>6. Cookies and Tracking Technologies</h3>
          <p>
            Our website may use cookies to enhance user experience. You can
            choose to accept or decline cookies in your browser settings.
          </p>
          <h3>7. Changes to This Privacy Policy</h3>
          <p>
            We may update our Privacy Policy from time to time. We encourage you
            to review this policy periodically for any changes.
          </p>
          <h3>8. Contact Us</h3>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please contact us at{" "}
            <a href="mailto:info@haulnetindia.com">info@haulnetindia.com</a>.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Privacy;
