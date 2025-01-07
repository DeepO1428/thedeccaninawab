import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import bgBreadcrumb from '../images/bg-breadcrumb.png';
import galleryImage1 from '../images/gallery1.jpg';
import galleryImage2 from '../images/gallery2.jpg';
import galleryImage3 from '../images/gallery3.jpg';
import galleryImage4 from '../images/gallery4.jpg';
import galleryImage5 from '../images/gallery5.jpg';
import galleryImage6 from '../images/gallery6.jpg';
import galleryImage7 from '../images/gallery7.jpg';
import '../../src/styles.css';

const PhotoGallery = () => {
    const photos = [
        { src: galleryImage1, className: 'large' },
        { src: galleryImage2, className: 'medium' },
        { src: galleryImage3, className: 'medium' },
        { src: galleryImage4, className: 'medium' },
        { src: galleryImage5, className: 'large' },
        { src: galleryImage6, className: 'medium' },
        { src: galleryImage7, className: 'medium' },
    ];

    return (
        <div>
            {/* Breadcrumb with Background Image */}
            <div className="breadcrumb-container" style={{ backgroundImage: `url(${bgBreadcrumb})` }}>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Photo Gallery</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <div className="headings">
                <h2 style={{ textAlign: 'center' }}>Photo Gallery</h2>
                <p style={{ textAlign: 'center' }}>
                    Explore our delicious creations, crafted with love and passion for an unforgettable experience.
                </p>
            </div>

            <div className="container">
                <div className="gallery">
                    {photos.map((photo, index) => (
                        <div key={index} className={`gallery-item ${photo.className}`}>
                            <img src={photo.src} alt={`Gallery item ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PhotoGallery;
