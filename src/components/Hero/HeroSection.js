import React from "react"
import "./Hero.css"
import Hero from "../../assects/travel2.jpg"

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='container text-center text-lg-start d-flex align-items-center justify-content-between'>
        <div className='hero-content'>
          <h1 className='hero-title'>
            Your Trusted Partner for Visa & Immigration Assistance
          </h1>
          <p className='hero-description'>
            Get expert guidance and personalized support for student visas,
            tourist visas, and more. Let us help you achieve your dreams with
            hassle-free processing.
          </p>
          <a href='#contact-us' className='btn btn-primary hero-button'>
            Get Started Now
          </a>
        </div>
        <div className='hero-image d-none d-lg-block'>
          <img
            src={Hero} // Replace with your own image URL
            alt='Visa Assistance'
            className='img-fluid'
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
