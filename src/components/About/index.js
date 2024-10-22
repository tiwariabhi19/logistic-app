import React from "react";
import Headers from "../Headers";
import Footer from "../Footer";
import "./index.css";

const About = () => {
  return (
    <>
      <Headers />
      <section className="about-section">
        <h3>About Us</h3>
        <div className="about-container">
          <div className="about-card">
            <h4>Who We Are</h4>
            <p>
              HaulNet India Pvt Ltd is a trusted & preferred
              temperature-controlled logistics company, dedicated to serving
              businesses across India with unmatched reliability and efficiency.
              We specialize in managing the intricate supply chains of
              perishable and temperature sensitive goods, ensuring that each
              product maintains its optimal quality throughout the entire
              journey. Our mission is to facilitate seamless, safe and timely
              distribution of your products, safeguarding their integrity from
              origin to destination. With our advanced infrastructure and
              state-of-the-art technology, we provide comprehensive solutions
              tailored to meet the diverse needs of our clients, empowering them
              to focus on their core business while we handle their logistical
              challenges with precision.
            </p>
          </div>
          <div className="about-card">
            <h4>Our Reach</h4>
            <p>
              We are Strategically located in key cities across India, including
              Delhi, Guwahati, Mumbai, and Bangalore, we provide seamless
              logistics services across states such as Uttar Pradesh, Delhi NCR,
              Maharashtra, and beyond. Our extensive network is designed to
              enhance operational efficiency, enabling us to deliver solutions
              that are both timely and reliable. By leveraging our
              well-positioned facilities and a dedicated workforce, we ensure
              that our clients receive personalized support and quick access to
              critical resources. This geographic advantage not only facilitates
              faster turnaround times but also allows us to adapt our services
              to meet the unique requirements of various industries, ensuring
              that each client’s needs are met with precision and care.
            </p>
          </div>
          <div className="about-card">
            <h4>Services Offered</h4>
            <p>
              We specialize in Pan India distribution and warehousing services
              for temperature controlled and ambient products, providing
              comprehensive logistics solutions that guarantee your goods are
              handled with the utmost care and efficiency. Our end-to-end
              services encompass everything from inventory management to order
              fulfilment, ensuring that each steps of the process are
              meticulously planned and executed. We also offer state-of-the-art
              warehousing facilities equipped with advanced technology, we
              maintain optimal storage conditions that protect your products and
              enhance their shelf life. Our dedicated team of professionals is
              committed to delivering exceptional service, enabling us to adapt
              to the dynamic needs of various industries. Whether you require
              temperature-sensitive or ambient storage or specialized handling,
              we ensure your products are handled & delivered safely,
              efficiently, and in optimal condition every time, giving you peace
              of mind and the freedom to focus on growing your core business
              activity.
            </p>
          </div>
        </div>
      </section>

      <section class="about-mission">
        <div class="mission-content">
          <h2>Mission Statement</h2>
          <p>
            We are committed to maintaining the highest standards of quality and
            compliance, leveraging advanced technology and best practices to
            enhance supply chain visibility and efficiency by continually
            enhancing our processes and adopting cutting-edge technologies. Our
            mission is to provide reliable, efficient solutions to support our
            clients in delivering their products with integrity, fostering
            sustainability that ensure a seamless experience for all of our
            customers which ultimately contributing to the health and well-being
            of our own communities.
          </p>
        </div>
        <div class="mission-image">
          <img src="/images/vision.png" alt="Mission" />
        </div>
      </section>
      <section class="about-mission">
        <div class="mission-content">
          <h2>Vision Statement</h2>
          <p>
            To revolutionize the ambient and cold-chain logistics and supply
            chain landscape by integrating cutting-edge technology, sustainable
            practices to enhance supply chain integrity, reduce waste, and
            foster trust among our partners and customers. We prioritizing
            reliability, transparency, and customer satisfaction by exceptional
            customer service, fostering seamless distributions of frozen,
            chilled & ambient products industries that empower these businesses
            to thrive in a dynamic global marketplace. we aspire to set new
            industry standards and contribute to a healthier, more connected
            world.
          </p>
        </div>
        <div class="mission-image">
          <img src="/images/vision.png" alt="Vision" />
        </div>
      </section>

      <section className="why-choose-us">
        <h3>Why Choose Us?</h3>
        <div className="reasons-container">
          <div className="reason-card">
            <i className="fas fa-shield-alt"></i>
            <h4>Reliability</h4>
            <p>
              Over 20 years of industry exposures and track record bring trusts
              among many customers which speaks itself. We always deliver, what
              we have committed.
            </p>
          </div>
          <div className="reason-card">
            <i className="fas fa-rocket"></i>
            <h4>Efficiency</h4>
            <p>
              Our team utilizes cutting-edge technology and an advanced fleet
              management system to provide seamless and efficient services,
              ensuring a hassle-free experience for our clients.
            </p>
          </div>
          <div className="reason-card">
            <i className="fas fa-users"></i>
            <h4>Customer First</h4>
            <p>
              We emphasize customer satisfaction above all else, as your success
              is our success.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="testimonials-section">
        <h3>What Our Clients Say</h3>
        <div className="testimonial-wrapper">
          <div className="testimonial-card">
            <p className="testimonial-quote">
              "HaulNet India Pvt Ltd has streamlined our logistics operations
              seamlessly. Their professionalism and punctuality are
              exceptional!"
            </p>
            <h4 className="testimonial-author">Rajesh Kumar</h4>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-quote">
              "We've never experienced such efficiency in transportation
              services. HaulNet India is always reliable and goes above and
              beyond to meet our needs."
            </p>
            <h4 className="testimonial-author">Anjali Patel</h4>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-quote">
              "Their attention to detail and excellent customer service set them
              apart from the rest. We trust HaulNet India for all our logistics
              needs."
            </p>
            <h4 className="testimonial-author">Rohit Mehta</h4>
          </div>
        </div>
      </section> */}

      <Footer />
    </>
  );
};

export default About;
