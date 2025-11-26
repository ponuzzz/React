import React, { useState } from 'react'
import'./navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
   
    const [menuOpen ,setMenuOpen] = useState(false);

    const toggleMenu =() => setMenuOpen(!menuOpen);


  return (
    <nav>
      {/* logo */}
      <NavLink to='/'  className="logo">
       my websites
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
        className={({isActive})=>(isActive ? "active" : "")}
        onClick={()=>setMenuOpen(false)}
        >
           Home
        </NavLink>
    </li>

    {/* about */}
    <li>
        <NavLink
        to='/about' 
        end
        className={({isActive})=>(isActive ? "active" : "")}
        onClick={()=>setMenuOpen(false)}
        >
           about
        </NavLink>
    </li>
    
     {/* services */}
    <li>
        <NavLink
        to='/service' 
        end
        className={({isActive})=>(isActive ? "active" : "")}
        onClick={()=>setMenuOpen(false)}
        >
           services
        </NavLink>
    </li>
     
   </ul>
    </nav>
  )
}

export default Navbar
