// src/components/MainMenu.js
import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import bgBreadcrumb from '../images/bg-breadcrumb.png';
import menuPdf from '../images/menu-decani.pdf';
import '../../src/styles.css';

const MainMenu = () => {
    const handleOrderNow = () => {
        window.location.href = 'https://www.foodbooking.com/api/fb/p_g_w3_d';
    };

    return (
        <div className="menu-section">
            {/* Breadcrumb with Background Image */}
            <div className="breadcrumb-container" style={{ backgroundImage: `url(${bgBreadcrumb})` }}>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Our Menu</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="container">
                <h2 className="menu-section" style={{ textAlign: 'center' }}>Our Menu</h2>
                <div className="menu-pdf-container">
                    <object
                        data={menuPdf}
                        type="application/pdf"
                        width="100%"
                        height="800px"
                        style={{ minHeight: '80vh' }}
                    >
                    </object>
                    <div className="order-button-container">
                        <button 
                            className="order-now-btn"
                            onClick={handleOrderNow}
                        >
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainMenu;