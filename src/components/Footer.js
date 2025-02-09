import React from 'react';
import '../../src/styles.css';
import { FaFacebook, FaInstagram, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import logo from '../../src/images/images.jpg'; // Update the path to your image file

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="container">
                <div className="row">
                    <div className="logo-footer">
                        <img className="img-fluid" src={logo} alt="The Deccani Nawab Logo" />
                    </div>
                    <div className="footer-contact">
                        <p><FaPhoneAlt /> +1 905-618-1717</p>
                        <p><FaEnvelope /> thedeccaninawab@gmail.com</p>
                        <p><FaMapMarkerAlt />  1133 Dundas St. East,Mississauga</p>
                    </div>
                    <div className="footer-social">
                        <h4>Follow Us</h4>
                        <a href="https://www.facebook.com/thedeccaninawab/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="https://www.instagram.com/thedeccaninawab/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                       
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>
                    Copyright © {new Date().getFullYear()}. All Rights Reserved By <i>The Deccani Nawab.</i>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
