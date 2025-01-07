// src/components/Contact.js
import React, { useState } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import bgBreadcrumb from '../images/bg-breadcrumb.png';
import '../../src/styles.css';

const Contact = () => {
    const [contactInfo, setContactInfo] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [reservationInfo, setReservationInfo] = useState({
        name: '',
        email: '',
        contact: '',
        date: '',
        time: '',
        guests: '',
        specialRequests: ''
    });

    const handleContactChange = (e) => {
        const { name, value } = e.target;
        setContactInfo({ ...contactInfo, [name]: value });
    };

    const handleReservationChange = (e) => {
        const { name, value } = e.target;
        setReservationInfo({ ...reservationInfo, [name]: value });
    };

    const handleContactSubmit = (e) => {
        e.preventDefault();
        console.log('Contact Info:', contactInfo);
        alert('Thank you for contacting us!');
        setContactInfo({ name: '', email: '', message: '' }); // Reset form
    };

    const handleReservationSubmit = (e) => {
        e.preventDefault();
        console.log('Reservation Info:', reservationInfo);
        alert('Thank you for your reservation!');
        setReservationInfo({ name: '', email: '', contact: '', date: '', time: '', guests: '', specialRequests: '' }); // Reset form
    };

    return (
        <div>
             {/* Breadcrumb with Background Image */}
             <div className="breadcrumb-container" style={{ backgroundImage: `url(${bgBreadcrumb})` }}>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Contact US</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <div class="container">
                
                <div className="row">
                    <div className="col-12 col-xl-6 col-md-6 col-sm-6">
                        <h2  class="head-txt" style={{ textAlign: 'center' }}>Make a <br></br> Reservation</h2>
                    </div>


                    <div className="col-12 col-xl-6 col-md-6 col-sm-6">
                        <form onSubmit={handleReservationSubmit} className="reservation-form">
                            <h3>Reservation Form</h3>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={reservationInfo.name}
                                onChange={handleReservationChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={reservationInfo.email}
                                onChange={handleReservationChange}
                                required
                            />
                            <input
                                type="text"
                                name="contact"
                                placeholder="Your Contact Number"
                                value={reservationInfo.contact}
                                onChange={handleReservationChange}
                                required
                            />
                            <input
                                type="date"
                                name="date"
                                placeholder="Reservation Date"
                                value={reservationInfo.date}
                                onChange={handleReservationChange}
                                required
                            />
                            <input
                                type="time"
                                name="time"
                                placeholder="Reservation Time"
                                value={reservationInfo.time}
                                onChange={handleReservationChange}
                                required
                            />
                            <input
                                type="number"
                                name="guests"
                                placeholder="Number of Guests"
                                value={reservationInfo.guests}
                                onChange={handleReservationChange}
                                required
                            />
                            <textarea
                                name="specialRequests"
                                placeholder="Special Requests"
                                value={reservationInfo.specialRequests}
                                onChange={handleReservationChange}
                            />
                            <button type="submit">Make Reservation</button>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Contact;