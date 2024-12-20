import React, { useState } from "react";
import "./ContactUs.css";
import emailjs from "emailjs-com"; // Import emailjs

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // State for button animation

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Start button animation

    // Send email using EmailJS
    emailjs
      .sendForm(
        "service_pv6i9hu",
        "template_gzg95yb",
        e.target,
        "-VUNwlzT_TfE9dSzM"
      )
      .then(
        (result) => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
          setIsSubmitting(false); // Stop button animation

          // Hide status message after 3 seconds
          setTimeout(() => setStatus(""), 3000);
          console.log(result.text);
        },
        (error) => {
          setStatus("Error sending message, please try again.");
          setIsSubmitting(false); // Stop button animation

          // Hide status message after 3 seconds
          setTimeout(() => setStatus(""), 3000);
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact-us-page">
      <div className="container py-5">
        <h2 className="text-center section-title mb-4">Get in Touch</h2>
        <p className="text-center mb-5">
          We're here to assist you with all your inquiries. Reach out to us via
          the form below, or use our contact details to connect directly.
        </p>

        <div className="row">
          {/* Contact Form */}
          <div className="col-lg-6 mb-4">
            <div className="contact-form-wrapper p-4">
              <h4 className="form-title mb-3">Send Us a Message</h4>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                    placeholder="Enter the subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows="5"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={isSubmitting} // Disable button while submitting
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
              {status && <p className="mt-3 status-message">{status}</p>} {/* Show status message */}
            </div>
          </div>

          {/* Contact Information */}
          <div className="col-lg-6 mb-4">
            <div className="contact-info-wrapper p-4">
              <h4 className="info-title mb-3">Contact Information</h4>
              <ul className="contact-info list-unstyled">
                <li>
                  <strong>Email:</strong> ishinevisa@gmail.com
                </li>
                <li>
                  <strong>Phone:</strong> +8801820946080
                </li>
                <li>
                  <strong>Address:</strong> Beanibazar, Sylhet, Bangladesh.
                </li>
                <li>
                  <strong>Business Hours:</strong> Saturday-Fri, 10 AM - 7 PM
                </li>
              </ul>
              <div className="map mt-4">
                <iframe
                  title="Google Map Location"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Beanibazar%2C%20Sylhet%2C%20Bangladesh.&zoom=10&maptype=roadmap"
                  width="100%"
                  height="365"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
