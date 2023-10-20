
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Explore</h3>
        <ul>
          <li>Home</li>
          <li>Questions</li>
          <li>Articles</li>
          <li>Tutorials</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Support</h3>
        <ul>
          <li>FAQs</li>
          <li>Help</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Stay Connected</h3>
        <div className="social-icons">
          <img src="https://cdn-icons-png.flaticon.com/512/3670/3670151.png" alt="Twitter" />
          <img src="https://image.similarpng.com/very-thumbnail/2020/05/Popular-Logo-Instagram-icon-PNG.png" alt="Instagram" />
          <img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-512.png" alt="Facebook" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
