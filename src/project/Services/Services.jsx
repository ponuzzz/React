import React from "react";
import "./services.css";

const Services = () => {
    const serviceData = [
        {
            id: "01",
            title: "Full Stack web Development",
            desc: "Complete web application development from frontend to backend,creating seamless user experiences with modern technologies",
        },
        {
            id: "02",
            title: "Front-end Development",
            desc: "Crafting responsive,accessible,and user-friendly interfaces using modern front-end technologies like React.js...",
        },
        {
            id: "03",
            title: "Social media",
            desc: "Web development is the process of building, programming...",
        },
        {
            id: "04",
            title: "App design",
            desc: "Web development is the process of building, programming...",
        },
        {
            id: "05",
            title: "Digital marketing",
            desc: "Web development is the process of building, programming...",
        },
        {
            id: "06",
            title: "Content writing",
            desc: "Web development is the process of building, programming...",
        },
    ];

    // Split into two sections
    const firstRow = serviceData.slice(0, 3);
    const secondRow = serviceData.slice(3, 6);

    return (
        <div className="services-section">
            <h1 className="services-title">
                My <span>Services</span>
            </h1>

            {/* First 3 boxes */}
            <div className="services-container">
                {firstRow.map((service) => (
                    <div key={service.id} className="service-card">
                        <span className="service-number">{service.id}</span>
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-desc">{service.desc}</p>

                        <a href="#" className="service-link">
                            Read More →
                        </a>
                    </div>
                ))}
            </div>

            {/* Second 3 boxes */}
            <div className="services-container second-row">
                {secondRow.map((service) => (
                    <div key={service.id} className="service-card">
                        <span className="service-number">{service.id}</span>
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-desc">{service.desc}</p>

                        <a href="#" className="service-link">
                            Read More →
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
