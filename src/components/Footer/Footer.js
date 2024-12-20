import React from "react"
import "./Footer.css"

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row py-5'>
          <div className='col-lg-4 col-md-6 mb-4'>
            <h5 className='footer-title'>About Us</h5>
            <p className='footer-text'>
              We are a trusted consultancy providing expert guidance for visa
              applications, IELTS preparation, and travel assistance. Your
              dreams are our mission.
            </p>
          </div>

          <div className='col-lg-2 col-md-6 mb-4'>
            <h5 className='footer-title'>Quick Links</h5>
            <ul className='footer-links'>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
                <a href='/about'>About Us</a>
              </li>
              <li>
                <a href='/'>Visa Types</a>
              </li>
              <li>
                <a href='/'>IELTS Tips</a>
              </li>
              <li>
                <a href='/contact'>Contact Us</a>
              </li>
            </ul>
          </div>

          <div className='col-lg-3 col-md-6 mb-4'>
            <h5 className='footer-title'>Contact Us</h5>
            <ul className='footer-contact'>
              <li>
                <strong>Email:</strong> ishinevisa@gmail.com
              </li>
              <li>
                <strong>Phone:</strong> +8801820946080
              </li>
              <li>
                <strong>Address:</strong> Beanibazar, Sylhet, Bangladesh.
              </li>
            </ul>
          </div>

          <div className='col-lg-3 col-md-6 mb-4'>
            <h5 className='footer-title'>Follow Us</h5>
            <ul className='footer-social'>
              <li>
                <a
                  href='https://www.facebook.com/iShineVisa/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fab fa-facebook'></i> Facebook
                </a>
              </li>
              <li>
                <a
                  href='https://twitter.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fab fa-twitter'></i> Twitter
                </a>
              </li>
              <li>
                <a
                  href='https://instagram.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fab fa-instagram'></i> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='footer-bottom text-center py-3'>
        <p className='mb-0'>
          &copy; {new Date().getFullYear()} Graffix Innovation. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer