import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/src/assets/SEREM FARM FEEDS.png'; // ✅ Replace with your actual logo path

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
      <div className="container-fluid px-4">
        
        {/* ✅ Logo + Brand (left) */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="Montana Feeds Logo"
            width="40"
            height="40"
            className="me-2"
          />
          <span className="fw-bold text-success fs-5">Montana Feeds</span>
        </Link>

        {/* ✅ Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* ✅ Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">

          {/* Centered Home + Products */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            {/* Products Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="productsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>
              <ul className="dropdown-menu" aria-labelledby="productsDropdown">
                <li><Link className="dropdown-item" to="/products/dairy">Dairy Feeds</Link></li>
                <li><Link className="dropdown-item" to="/products/layers">Layers Mash</Link></li>
                <li><Link className="dropdown-item" to="/products/kienyeji">Kienyeji Mash</Link></li>
                <li><Link className="dropdown-item" to="/products/sheep">Sheep Feeds</Link></li>
              </ul>
            </li>
          </ul>

          {/* Contact Us (right side) */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
