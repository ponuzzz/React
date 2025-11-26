import React, { useState } from 'react'
import './navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);


    return (
        <nav>
            {/* logo */}
            <NavLink to='/' className="logo">
                Diary Mates
            </NavLink>

            {/* hamburger menu icons */}
            <div className='menu-icon' onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            {/* nav links */}
            <ul className={menuOpen ? 'show' : ''}>
                {/* home */}
                <li>
                    <NavLink
                        to='/'
                        end
                        className={({ isActive }) => (isActive ? "active" : "")}
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </NavLink>
                </li>

                {/* about */}
                <li>
                    <NavLink
                        to='/about'
                        end
                        className={({ isActive }) => (isActive ? "active" : "")}
                        onClick={() => setMenuOpen(false)}
                    >
                        About
                    </NavLink>
                </li>

                {/* services */}
                <li>
                    <NavLink
                        to='/contact'
                        end
                        className={({ isActive }) => (isActive ? "active" : "")}
                        onClick={() => setMenuOpen(false)}
                    >
                        Contact
                    </NavLink>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar
