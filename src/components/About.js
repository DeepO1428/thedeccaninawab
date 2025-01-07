// src/components/About.js
import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import bgBreadcrumb from '../images/bg-breadcrumb.png';
import '../../src/styles.css';
import about from '../../src/images/about.jpg';

const About = () => {
    return (
        <div>
            {/* Breadcrumb with Background Image */}
            <div className="breadcrumb-container" style={{ backgroundImage: `url(${bgBreadcrumb})` }}>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>About</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <div className="container">
                 
           
                <div className="about-grid row">
                    <div className="col-12 col-xl-6col-md-6 col-sm-6">
                        
                    <div class="about-image">
                
                        <img className="img-fluid svg-clip-image" src={about} alt="The Deccani Nawab about" />
                    </div>
                    </div>

                    <div className="col-12 col-xl-6col-md-6 col-sm-6">
                        <div className="about-text">
                            {/* Page Header */}
                            <div class="headings">
                                <h2 style={{ textAlign: 'left' }}>About Us</h2>
                            </div> 
                            <p>
                            Welcome to our haven of flavors, where we bring together the best of Hakka Chinese and Thai cuisine! At our restaurant, we take pride in offering a diverse menu tailored to suit all taste preferences. Whether you’re craving tender Chicken, savory Beef, fresh Seafood, or an array of delicious vegetarian options, we have something special for everyone.

<br></br>Quality is at the heart of everything we do. We carefully source the freshest ingredients and meats to ensure every dish bursts with authentic flavor. For our valued guests seeking Halal options, rest assured that all our meats are hand-cut and Halal Certified.

Our cozy, family-friendly atmosphere is perfect for dining with loved ones of all ages. We love seeing kids enjoy our dishes just as much as the grown-ups, and we’re committed to creating a warm, welcoming environment for everyone.

<br></br>Understanding that every palate is unique, we keep our spice levels mild to cater to a broad audience. If you prefer your meal with a fiery kick, let us know, and we’ll gladly spice it up to match your taste!

As a small, passionate establishment, we look forward to delighting you with our culinary creations. Your satisfaction is our top priority, and we are dedicated to meeting your expectations for exceptional quality and service.

<br></br>Thank you for choosing us to embark on this flavorful journey. We can’t wait to serve you and share the joy of good food together!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;