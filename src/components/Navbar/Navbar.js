import React, { useState } from "react"
import "./Navbar.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import Logo from "../../assects/logo.png" // Fixed typo here
import { Link } from "react-router-dom"

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        {/* Logo */}
        <a href='/' className='navbar-logo'>
          <img
            src={Logo} // Ensure the logo path is correct
            alt='Logo'
            className='logo'
          />
        </a>

        {/* Hamburger Menu (For Mobile) */}
        <div
          className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <li className='navbar-item'>
            <Link to='/' className='navbar-link'>
              Home
            </Link>
          </li>
          <li className='navbar-item'>
            <Link to='/about' className='navbar-link'>
              About
            </Link>
          </li>
          <li className='navbar-item'>
            <Link to='/visaTypes' className='navbar-link'>
              Visa Types
            </Link>
          </li>
          <li className='navbar-item'>
            <Link to='/contact' className='navbar-link'>
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Social Icons */}
        <div className='social-icons'>
          <a
            href='https://www.facebook.com/iShineVisa/'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-facebook-f'></i>
          </a>
          {/* Uncomment and update these links if needed
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
