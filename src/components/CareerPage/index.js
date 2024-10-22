import React, { useState } from "react";
import "./index.css";

const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    position: "",
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

    // Validate name
    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    // Validate email
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    // Validate mobile (must be exactly 10 digits)
    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be exactly 10 digits";
    }

    // Validate position
    if (!formData.position) {
      newErrors.position = "Position is required";
    }

    // Validate message
    if (!formData.message) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // Stop submission if there are errors
    }

    setIsLoading(true); // Set loading state

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      mobile: formData.mobile,
      position: formData.position,
      message: formData.message,
      to_name: "Haulnet India",
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
        alert("Application submitted successfully!");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          position: "",
          message: "",
        });
        setErrors({});
      } else {
        const errorData = await response.json();
        console.error("Error sending email:", errorData);
        alert("Failed to submit application.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to submit application.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="career-page">
      <div className="career-header">
        <h1>Join Our Team</h1>
        <p>
          At Haulnet India Pvt Ltd, we're always looking for talented
          individuals to grow with us.
        </p>
        <p>
          We believe in fostering a dynamic work environment where each team
          member is valued and empowered to contribute to our success. Whether
          you're experienced in logistics or just starting your career, we offer
          a range of opportunities to match your skills and passion.
        </p>
        <p>
          <strong>Why Work with Us?</strong>
          <ul>
            <li>Opportunities for career growth and development.</li>
            <li>A collaborative and supportive work culture.</li>
            <li>Challenging and rewarding projects that drive innovation.</li>
            <li>
              Work-life balance and employee well-being at the core of our
              values.
            </li>
          </ul>
        </p>
        <p>
          If you're ready to be part of a forward-thinking team in the logistics
          industry, we’d love to hear from you. Submit your application today!
        </p>
      </div>

      <div className="application-form">
        <h2>Submit Your Resume</h2>
        <form onSubmit={sendEmail}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Mobile:</label>
            <input
              type="text"
              name="mobile"
              placeholder="Mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            {errors.mobile && <span className="error">{errors.mobile}</span>}
          </div>

          <div className="form-group">
            <label>Position of Interest:</label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              placeholder="Position you're applying for"
              required
            />
            {errors.position && (
              <span className="error">{errors.position}</span>
            )}
          </div>

          <div className="form-group">
            <label>Send Your Message:</label>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            {errors.message && <span className="error">{errors.message}</span>}
          </div>

          <button
            type="submit"
            className={`submit-btn ${isLoading ? "loading" : ""}`}
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Career;
