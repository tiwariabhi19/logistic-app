import React from "react";
import { useNavigate } from "react-router-dom";
import Headers from "../Headers";
import Footer from "../Footer";

import "./index.css";

const Home = () => {
  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    navigate("/about");
  };

  const handlePrivacyClick = () => {
    navigate("/contact");
  };
  return (
    <>
      <Headers />
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to HaulNet India</h1>
          <h4>
            Your Trusted Partner in Ambient and Temperature Controlled Logistics
            & Supply Chain
          </h4>

          <p>
            At HaulNet India, we excel in providing reliable and efficient
            temperature-controlled logistics and distribution solutions across
            India. With our state-of-the-art fleet and dedicated team, we ensure
            your goods are delivered in optimal condition, every time,
            safeguarding their quality and integrity.
          </p>
          <div className="buttons">
            <button className="btn" onClick={handleReadMoreClick}>
              Read More
            </button>
            <button className="trans-btn" onClick={handlePrivacyClick}>
              Contact US
            </button>
          </div>
        </div>
      </section>
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service">
              <div className="service-image-wrapper">
                <img
                  src="https://ramcides.com/wp-content/uploads/2023/02/indian-presence-1.jpg"
                  alt="Freight Services"
                  className="service-image"
                />
              </div>
              <h4>Pan India Distribution</h4>
              <p>
                Comprehensive logistics solutions delivering to every corner of
                India.
              </p>
            </div>
            <div className="service">
              <div className="service-image-wrapper">
                <img
                  src="https://blog.egestor.com.br/wp-content/uploads/pexels-tiger-lily-4483610-scaled.jpg"
                  alt="Warehousing"
                  className="service-image"
                />
              </div>
              <h4>Warehousing Solutions</h4>
              <p>
                Secure and efficient storage options tailored to your needs.
              </p>
            </div>
            <div className="service">
              <div className="service-image-wrapper">
                <img
                  src="https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/eadeb234-89d9-45a5-a6f6-44d9815b7b24.png?auto=format&q=50"
                  alt="Logistics Consulting"
                  className="service-image"
                />
              </div>
              <h4>Live Tracking</h4>
              <p>Stay informed with real-time updates on your shipments.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <div className="container">
          <h2>Why Choose Us</h2>
          <div className="choose-grid">
            <div className="choose-item">
              <img
                src="https://blog.radware.com/wp-content/uploads/2016/04/transportation-threats-2.png"
                alt="On-time Delivery"
              />
              <h3>Comprehensive Pan India Distribution</h3>
              <p>
                At HaulNet India Pvt Ltd, we offer extensive distribution
                services that reach every corner of India. Our vast network
                ensures that your products are delivered efficiently and
                reliably, no matter the location.
              </p>
            </div>
            <div className="choose-item">
              <img
                src="https://bernardmarr.com/wp-content/uploads/2023/09/3-Ways-To-Reinvent-Your-Products-And-Services-For-The-Future.jpg"
                alt="24/7 Support"
              />
              <h3>State-of-the-Art Warehousing Solutions</h3>
              <p>
                Our strategically located warehouses are equipped with advanced
                technology to maintain optimal conditions for your goods. We
                prioritize the safety and integrity of your products, providing
                a secure environment that meets all storage requirements.
              </p>
            </div>
            <div className="choose-item">
              <img
                src="https://www.encocam.com/wp-content/uploads/2017/11/quality.jpg"
                alt="Safety First"
              />
              <h3>Commitment to Quality</h3>
              <p>
                We understand that the quality of your goods is paramount. Our
                temperature-controlled logistics ensure that your perishable
                items remain fresh and intact throughout their journey. With
                rigorous quality checks at every stage, we guarantee the highest
                standards for your products.
              </p>
            </div>
            <div className="choose-item">
              <img
                src="https://www.apptunix.com/blog/wp-content/uploads/sites/3/2020/10/logistics-tracking-app.png"
                alt="Safety First"
              />
              <h3>Timely Delivery</h3>
              <p>
                In the fast-paced world of logistics, timely delivery is
                crucial. Our dedicated team and efficient processes work
                together to ensure that your goods arrive on schedule,
                minimizing delays and maximizing your operational efficiency.
              </p>
            </div>
            <div className="choose-item">
              <img
                src="https://melodylogistics.com/uploads/2019/melodylogistics_com_ctc_t1572249367_oexB.jpg"
                alt="Safety First"
              />
              <h3>Advanced Technology Integration</h3>
              <p>
                We leverage cutting-edge technology to enhance our logistics and
                distribution services. Our real-time tracking systems allow you
                to monitor your shipments at every step, providing transparency
                and peace of mind.
              </p>
            </div>
            <div className="choose-item">
              <img
                src="https://hospitalityinsights.ehl.edu/hubfs/Customer%20centricity-1.jpeg"
                alt="Safety First"
              />
              <h3>Customer-Centric Approach</h3>
              <p>
                At HaulNet India Pvt Ltd, our clients are at the heart of
                everything we do. We offer tailored solutions to meet your
                unique needs, ensuring a seamless experience from start to
                finish.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="testimonials-section">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial">
              <p>
                HaulNet India has transformed our logistics operations. Their
                Pan India distribution network is exceptional, ensuring our
                products reach every corner of the country on time and in
                perfect condition.
              </p>
              <h4>- John Doe, ABC Corp</h4>
            </div>
            <div className="testimonial">
              <p>
                We trust HaulNet for our temperature-sensitive goods. Their
                state-of-the-art warehousing and commitment to quality have
                given us peace of mind, knowing our products are always safe.
              </p>
              <h4>- Jane Smith, XYZ Ltd</h4>
            </div>
          </div>
        </div>
      </section> */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>
            Contact us today to find out how we can streamline your logistics
            operations.
          </p>
          {/* Contact Us Button */}
          <button className="btn" onClick={handlePrivacyClick}>
            Click Here
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
