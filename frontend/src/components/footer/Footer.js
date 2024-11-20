import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-item">
          <strong>Phone:</strong> +91 6363529271
        </p>
        <p className="footer-item">
          <strong>Address:</strong> Chandrika Graments House
        </p>
        <p className="footer-item">
          <strong>Location:</strong> Venkateshwar Lodge,Ambedkar Circle,Bidar ,Karnataka
        </p>
        <p className="footer-item">
          <strong>Email:</strong> <a href="mailto:example@client.com">rajeshnaik@gmail.com</a>
        </p>
      </div>
      <div className="footer-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3796.3656890245916!2d77.51717457494762!3d17.915089783064907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcec7262532ea9d%3A0x5430cebf16bc2cec!2sChandrika%20Garments%20House!5e0!3m2!1sen!2sin!4v1732096766374!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </footer>
  );
};

export default Footer;
