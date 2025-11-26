import React from "react";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    
      <div>
        <p>© 2025 My Website. All rights reserved.</p>
        <a href="#"> <FaWhatsappSquare />Facebook</a>
          <a href="#"> <FaTwitterSquare />Twitter</a>
          <a href="#"> <FaSquareInstagram />Instagram</a>
        </div>
    
  );
};

export default Footer;
