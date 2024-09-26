import React from 'react';
import './services.css';

const Services = () => {
    const services = [
        {
            name: 'Art Direction',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat asperiores distinctio libero unde harum repudiandae!"
        },
        {
            name: "UI/UX Design",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat asperiores distinctio libero unde harum repudiandae!"
        },
        {
            name: "Visual Design",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat asperiores distinctio libero unde harum repudiandae!"
        },
        {
            name: 'Product Design',
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat asperiores distinctio libero unde harum repudiandae!"
        },
    ];

    return (
        <div className="services">
            <h1 className="services-title">My Services</h1>
            <div className="service-container">
                {services.map((item, index) => (
                    <div className="service-item" key={index}>
                        <h3>{item.name}</h3>
                        <p>{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
