import React from 'react'
import './services.css';
import { Link, Outlet } from 'react-router-dom';

const Services = () => {
    return (
        <div className='services-container'>
            <h2 className='services-title'>Our services</h2>
            <p className='services-subtitle'>choose once</p>
            <div className='services-links'>
                <Link to="web-dev" className='service-link web'> web development</Link>
                <Link to="app-dev" className='service-link app'> app development</Link>
                <Link to="design" className='service-link design'> design development</Link>
            </div>
        <Outlet/>
        </div>
    )
}

export default Services
