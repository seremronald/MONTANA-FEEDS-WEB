// src/pages/Contact.jsx
import React from 'react';

export default function Contact() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Contact Us</h2>

      {/* Office Info */}
      <div className="text-center mb-5">
        <h5>Our Office</h5>
        <p>123 Farm Road, Nakuru, Kenya</p>
        <p>📞 +254 700 000000</p>
      </div>

      {/* Contact Form */}
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-control"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter your email"
                required
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
                rows={5}
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-success w-100">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
