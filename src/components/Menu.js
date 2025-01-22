// src/components/Menu.js
import React, { useState, useCallback } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../src/styles.css';
import '../../src/responsive.css';
import banner1 from '../images/banner1.png';
import banner2 from '../images/banner4.png';
import banner3 from '../images/banner3.png';
import menuFront from '../images/menufront.jpg';
import menuBack from '../images/menuback.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './Services';

const Menu = () => {
    const [isZoomed, setIsZoomed] = useState(false);

    // Optimized zoom effect handlers using useCallback
    const handleMouseMove = useCallback((e) => {
        if (!isZoomed) return;
        const img = e.target;
        const rect = img.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        img.style.transformOrigin = `${x}% ${y}%`;
        img.style.transform = "scale(2)";
    }, [isZoomed]);

    const handleMouseEnter = useCallback((e) => {
        setIsZoomed(true);
        const img = e.target;
        img.style.transform = "scale(2)";
    }, []);

    const handleMouseLeave = useCallback((e) => {
        setIsZoomed(false);
        const img = e.target;
        img.style.transformOrigin = "center center";
        img.style.transform = "scale(1)";
    }, []);

    // Carousel settings
    const carouselSettings = {
        interval: 5000,
        fade: true,
        controls: true,
        indicators: true,
        pause: 'hover'
    };

    return (
        <div className="menu-page">
            <div className="carousel-wrapper banner-crousel">
                <Carousel {...carouselSettings}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner1}
                            alt="Welcome to Deccani Nawab"
                            loading="eager"
                        />
                        <Carousel.Caption className="carousel-content">
                            <h3 className="slide-title">Welcome to the Deccani Nawab</h3>
                            <p className="slide-description">Explore our delicious offerings!</p>
                            <Link to="/main" className="view-menu-btn">View Menu</Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner2}
                            alt="Fresh Ingredients"
                            loading="lazy"
                        />
                        <Carousel.Caption className="carousel-content">
                            <h3 className="slide-title">Fresh Ingredients</h3>
                            <p className="slide-description">We use only the freshest ingredients in our dishes.</p>
                            <Link to="/main" className="view-menu-btn">View Menu</Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner3}
                            alt="Place your order"
                            loading="lazy"
                        />
                        <Carousel.Caption className="carousel-content">
                            <Link to="/contact" className="order-link">
                                <h3 className="slide-title">Place An Order Here!</h3>
                            </Link>
                            <p className="slide-description">Don't miss out on our special offers!</p>
                            <Link to="/main" className="view-menu-btn">View Menu</Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="menu-section">
                <h2 className="section-title">Our Menu</h2>
                
                <div className="container pb-5">
                    <div className="menu-images row">
                        <div className="menu-image col-lg-6">
                            <div className="image-container">
                                <img 
                                    src={menuFront}
                                    alt="Menu Front Page"
                                    className="zoomable-image"
                                    onMouseMove={handleMouseMove}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    loading="lazy"
                                />
                                <div className="image-overlay">
                                    <span>Front Page</span>
                                </div>
                            </div>
                        </div>
                        <div className="menu-image col-lg-6">
                            <div className="image-container">
                                <img 
                                    src={menuBack}
                                    alt="Menu Back Page"
                                    className="zoomable-image"
                                    onMouseMove={handleMouseMove}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    loading="lazy"
                                />
                                <div className="image-overlay">
                                    <span>Back Page</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Services />
        </div>
    );
};

export default Menu;