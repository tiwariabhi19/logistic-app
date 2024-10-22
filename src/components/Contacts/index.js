import React, { useState } from "react";
import Headers from "../Headers";
import Footer from "../Footer";
import "./index.css";

const Contacts = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Live validation for mobile number
    if (name === "mobile") {
      if (value.length > 10) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          mobile: "Mobile number must be exactly 10 digits",
        }));
      } else if (!/^\d+$/.test(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          mobile: "Mobile number must contain only digits",
        }));
      } else if (value.length === 10) {
        setErrors((prevErrors) => {
          const newErrors = { ...prevErrors };
          delete newErrors.mobile; // Remove the error if valid
          return newErrors;
        });
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          mobile: "Mobile number must be exactly 10 digits",
        }));
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate first name
    if (!formData.firstName) {
      newErrors.firstName = "First name is required";
    }

    // Validate last name
    if (!formData.lastName) {
      newErrors.lastName = "Last name is required";
    }

    // Validate mobile (must be exactly 10 digits)
    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be exactly 10 digits";
    }

    // Validate email
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    // Validate message
    if (!formData.message) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // Stop submission if there are errors
    }

    setIsLoading(true); // Set loading state
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      to_name: "Haulnet India Pvt Ltd",
      message: formData.message,
      mobile: formData.mobile,
    };

    try {
      const response = await fetch("http://localhost:4000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(templateParams),
      });

      if (response.ok) {
        alert(
          "Thank you for your message. We will get in touch with you shortly"
        );
        setFormData({
          firstName: "",
          lastName: "",
          mobile: "",
          email: "",
          message: "",
        });
        setErrors({});
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Headers />
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Contact Us</h2>
            <p>
              We’re here to help! Fill in the form and one of our team members
              will reach out to you soon.
            </p>
            <div className="contact-details">
              <p>
                <strong>Email</strong>
              </p>
              <p>info@haulnetindia.com</p>
              <p>
                <strong>Contact Number:</strong> +91-8878207452
              </p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              {errors.firstName && (
                <span className="error">{errors.firstName}</span>
              )}
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              {errors.lastName && (
                <span className="error">{errors.lastName}</span>
              )}
            </div>
            <div className="form-group">
              <input
                type="text"
                name="mobile"
                placeholder="Mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
              {errors.mobile && <span className="error">{errors.mobile}</span>}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            {errors.message && <span className="error">{errors.message}</span>}

            <button
              type="submit"
              className={`btn-submit ${isLoading ? "loading" : ""}`}
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contacts;
