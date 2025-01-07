// src/components/Services.js
import React from 'react';
import '../../src/styles.css';
import serviceIcon1 from '../../src/images/cake.png';
import serviceIcon2 from '../../src/images/meeting.png';
import serviceIcon3 from '../../src/images/party.png';


const Services = () => {
    return (
        <div class="services-section">
           

            <div className="container">
                {/* Page Header */}
                <div className="headings">
                    <h2 style={{ textAlign: 'center' }}>Our Services</h2>
                </div>

                {/* Services Grid */}
                <div className="services-grid row">
                    <div className="col-12 col-md-4">
                        <div className="service-item">
                            <div className="service-icon">
                                <img className="img-fluid" src={serviceIcon1} alt="Birthday Party Icon" />
                            </div>
                            <h3 className="service-title">Birthday Party</h3>
                            <p className="service-description">
                                Celebrate your special day with us! We offer customized menus and vibrant setups to make your birthday unforgettable.
                            </p>
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div className="service-item">
                            <div className="service-icon">
                                <img className="img-fluid" src={serviceIcon2} alt="Business Meetings Icon" />
                            </div>
                            <h3 className="service-title">Business Meetings</h3>
                            <p className="service-description">
                                Host professional meetings with our seamless catering and elegant atmosphere tailored for business needs.
                            </p>
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div className="service-item">
                            <div className="service-icon">
                                <img className="img-fluid" src={serviceIcon3} alt="Wedding Party Icon" />
                            </div>
                            <h3 className="service-title">Wedding Party</h3>
                            <p className="service-description">
                                Make your big day memorable with our premium catering services, offering exquisite dishes for your wedding party.
                            </p>
                        </div>
                    </div>

                  
                </div>
            </div>
        </div>
    );
};

export default Services;
