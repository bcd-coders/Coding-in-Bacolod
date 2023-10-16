import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact">Visit Us <div>at</div> bcd coders.</div>
        <div className="contact">
          <i className="fas fa-envelope" />
        </div>
        <div className="center-image">
          <img src="src\assets\logo.png" alt="Center Image" />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
