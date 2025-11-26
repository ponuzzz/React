import React from 'react';
import './hero.css';
import Profile from "../../assets/images/Profile-image.jpg";

const Hero = () => {
    return (
        <div className='hero'>
            <img src={Profile} alt="Profile" />

            <h1>Hello, I'm <span className="highlight">Athulya A A</span></h1>
            <h2>
                MERN Stack Developer | Currently interning at Techolas Technologies
            </h2>

            <p>
                BCA graduate currently pursuing a MERN Stack internship at Techolas
                Technologies. Passionate about creating responsive, user-friendly
                web applications with modern technologies. Let's build something
                amazing together.
            </p>

            <div className='hero-actions'>
                <div className='hero-connect'>Connect with me</div>
                <div className='hero-resume'>My Resume</div>
            </div>
        </div>
    )
}

export default Hero;
