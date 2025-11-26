import React from 'react'
import './navbar.css';
//import Profile from "../../assets/images/Profile-image.jpg";




const Navbar = () => {
  return (
    < div className='navbar'>
        {/* <img src={Profile} alt='profile'/> */}
        <ul className="nav-menu">
          <li>Home</li>
          <li>About me</li>
          <li>Services</li>
          <li>portfolio</li>
          <li>Contact</li>
          </ul>
          <div className="nav-connect">connect with me</div>    
    </div>
  )
}

export default Navbar
