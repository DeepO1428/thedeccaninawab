// src/components/Contact.js
import React, { useState } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import bgBreadcrumb from '../images/bg-breadcrumb.png';
import '../../src/styles.css';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
    const [reservationInfo, setReservationInfo] = useState({
        name: '',
        email: '',
        contact: '',
        date: '',
        time: '',
        guests: '',
        specialRequests: ''
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleReservationChange = (e) => {
        const { name, value } = e.target;
        
        // Special handling for time to convert to 12-hour format
        if (name === 'time') {
            const timeValue = value;
            const [hours, minutes] = timeValue.split(':');
            const hour = parseInt(hours);
            const ampm = hour >= 12 ? 'PM' : 'AM';
            const hour12 = hour % 12 || 12;
            const time12 = `${hour12}:${minutes} ${ampm}`;
            
            setReservationInfo(prev => ({
                ...prev,
                [name]: value,
                time12Format: time12 // Store both 24h and 12h format
            }));
        } else {
            setReservationInfo(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleReservationSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const templateParams = {
                from_name: reservationInfo.name,
                from_email: reservationInfo.email,
                contact_number: reservationInfo.contact,
                reservation_date: reservationInfo.date,
                reservation_time: reservationInfo.time12Format || reservationInfo.time, // Use 12-hour format
                guests: reservationInfo.guests,
                special_requests: reservationInfo.specialRequests,
            };

            await emailjs.send(
                'service_vmkrl4s',
                'template_t90yva6',
                templateParams,
                'Q8P5A9SIw3sdQysb7'
            );

            await Swal.fire({
                title: 'Success!',
                text: 'Thank you for your reservation! We will contact you shortly.',
                icon: 'success',
                confirmButtonColor: '#f4b420',
                confirmButtonText: 'OK'
            });

            setReservationInfo({
                name: '',
                email: '',
                contact: '',
                date: '',
                time: '',
                guests: '',
                specialRequests: ''
            });
        } catch (err) {
            setError('Failed to send reservation. Please try again later.');
            console.error('EmailJS Error:', err);
            
            await Swal.fire({
                title: 'Error!',
                text: 'Failed to send reservation. Please try again later.',
                icon: 'error',
                confirmButtonColor: '#f4b420',
                confirmButtonText: 'OK'
            });
        } finally {
            setLoading(false);
        }
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
                            {error && <div className="error-message">{error}</div>}
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
                            <button type="submit" disabled={loading}>
                                {loading ? 'Sending...' : 'Make Reservation'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Contact;