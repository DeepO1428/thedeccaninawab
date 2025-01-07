// src/components/Menu.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../src/styles.css';
import '../../src/responsive.css';
import banner1 from '../images/banner1.png';
import banner2 from '../images/banner2.png';
import banner3 from '../images/banner3.png';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Services from './Services'; // Import Services component

const Menu = () => {
    const menuItems = [
        { name: "Mango Shake", image: "https://via.placeholder.com/150?text=Mango+Shake" },
        { name: "Oreo Shake", image: "https://via.placeholder.com/150?text=Oreo+Shake" },
        { name: "Fudge", image: "https://via.placeholder.com/150?text=Fudge" },
        { name: "Ferrerro", image: "https://via.placeholder.com/150?text=Ferrerro" },
        { name: "Haleem: Chicken(16OZ)", image: "https://via.placeholder.com/150?text=Haleem" },
        { name: "Hyderabadi Mutton Marag(24 OZ)", image: "https://via.placeholder.com/150?text=Mutton+Marag" },
        { name: "Aloo Tikki Burger", image: "https://via.placeholder.com/150?text=Aloo+Tikki+Burger" },
        { name: "Shami Egg Burger", image: "https://via.placeholder.com/150?text=Shami+Egg+Burger" },
        { name: "Noodle Burger", image: "https://via.placeholder.com/150?text=Noodle+Burger" },
        { name: "Crispy Zinger Burger", image: "https://via.placeholder.com/150?text=Crispy+Zinger+Burger" },
        { name: "Noodle Roll", image: "https://via.placeholder.com/150?text=Noodle+Roll" }
    ];

    const handleBuyNow = () => {
        window.location.href = 'https://www.foodbooking.com/api/fb/p_g_w3_d';
    };

    return (
        <div>
            <div className="carousel-wrapper banner-crousel">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Welcome to the Deccani Nawab</h3>
                            <p>Explore our delicious offerings!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Fresh Ingredients</h3>
                            <p>We use only the freshest ingredients in our dishes.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <Link to="/contact">
                                <h3>Place An order Here!</h3>
                            </Link>
                            <p>Don't miss out on our special offers!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="headings">
                <h2 style={{ textAlign: 'center' }}>Our Menu</h2>
            </div>
            
            <div className="container pb-5">
                <div className="menu-grid">
                    {menuItems.map((item, index) => (
                        <div className="menu-item" key={index}>
                            <img src={item.image} alt={item.name} style={{ width: '100%', borderRadius: '8px' }} />
                            <span>{item.name}</span>
                            <button className="btn btn-primary" onClick={handleBuyNow}>Order Now</button>
                        </div>
                    ))}
                </div>
            </div>

            <Services />
        </div>
    );
};

export default Menu;