import React from 'react';
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-light text-muted py-5 border-top mt-5">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* Logo and social section */}
          <div className="col-md-3 mb-4">
            <img src="CompanyLogo.png" alt="Zerodha Logo" height="30" className="mb-3" />
            <p className="mb-2">© 2010 - 2025, fincrux Broking Ltd.<br />All rights reserved.</p>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a href="#"><FaTwitter className="text-dark" /></a>
              <a href="#"><FaFacebookF className="text-dark" /></a>
              <a href="#"><FaInstagram className="text-dark" /></a>
              <a href="#"><FaLinkedinIn className="text-dark" /></a>
              <a href="#"><FaTelegramPlane className="text-dark" /></a>
            </div>
          </div>

          {/* Company */}
          <div className="col-md-3 mb-4">
            <h6 className="text-dark fw-bold">Company</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted text-decoration-none">About</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Products</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Pricing</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Referral programme</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-3 mb-4">
            <h6 className="text-dark fw-bold">Support</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted text-decoration-none">Contact</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Support portal</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Z-Connect blog</a></li>
              <li><a href="#" className="text-muted text-decoration-none">List of charges</a></li>
            </ul>
          </div>

          {/* Account */}
          <div className="col-md-3 mb-4">
            <h6 className="text-dark fw-bold">Account</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted text-decoration-none">Open an account</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Fund transfer</a></li>
              <li><a href="#" className="text-muted text-decoration-none">60 day challenge</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
