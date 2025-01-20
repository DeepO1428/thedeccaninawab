import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../src/styles.css';
import '../../src/responsive.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="sticky-header deccani-head">
            <div className="header-title">
                <h1>The <b>Deccani</b> Nawab</h1>
            </div>

            {/* Burger Menu Icon */}
            <div className="burger-icon" onClick={toggleMenu}>
                <div className={menuOpen ? "line open" : "line"}></div>
                <div className={menuOpen ? "line open" : "line"}></div>
                <div className={menuOpen ? "line open" : "line"}></div>
            </div>

            {/* Navigation */}
            <nav>
                <ul className={menuOpen ? "open" : ""}>
                    <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
                    <li><Link to="/Main" onClick={() => setMenuOpen(false)}>Menu</Link></li>
                    <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Make Reservation</Link></li>
                    <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Photo Gallery</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
