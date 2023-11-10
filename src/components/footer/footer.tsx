import './Footer.css';
import {BiCopyright} from 'react-icons/bi'

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="foot-title">
          <p><BiCopyright />2023</p><h2>bcd coders.</h2>
        </div>
        <img src="./assets/logo.png" alt="Center Image" />
        <div className="contact">
          <h2>Our <a href="/">Services</a>.</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
