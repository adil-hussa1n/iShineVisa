import React from "react"
import "./about.css"
import AboutImg from "../../assects/About.jpg"
function About() {
  return (
    <div>
      {/* About Us Section */}
      <section className='about-us-section py-5'>
        <div className='container text-center text-md-start'>
          <div className='row align-items-center'>
            <div className='col-md-6'>
              <h2 className='section-title'>About Us</h2>
              <p className='section-description'>
                At Visa Help Consultancy, we are dedicated to making your dream
                of studying, traveling, or migrating abroad a reality. With
                years of experience, a proven track record, and a customer-first
                approach, we ensure a seamless and stress-free process for our
                clients.
              </p>
              <p className='section-description'>
                Our team of experts specializes in student visas, tourist visas,
                and immigration solutions, providing tailored advice and
                end-to-end support to help you achieve your goals.
              </p>
            </div>
            <div className='col-md-6 text-center'>
              <img
                src={AboutImg}
                alt='About Us'
                className='img-fluid rounded shadow'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className='why-choose-us-section py-5 bg-light'>
        <div className='container'>
          <h2 className='section-title text-center mb-4'>Why Choose Us?</h2>
          <div className='row'>
            <div className='col-md-4 text-center mb-4'>
              <div className='icon-container mb-3'>
                <i className='fas fa-user-check fa-3x text-primary'></i>
              </div>
              <h4 className='feature-title'>Trusted Expertise</h4>
              <p className='feature-description'>
                Our team of experienced consultants provides accurate, reliable,
                and up-to-date visa information.
              </p>
            </div>
            <div className='col-md-4 text-center mb-4'>
              <div className='icon-container mb-3'>
                <i className='fas fa-handshake fa-3x text-primary'></i>
              </div>
              <h4 className='feature-title'>Personalized Support</h4>
              <p className='feature-description'>
                We tailor our services to your unique needs, ensuring a
                stress-free experience from start to finish.
              </p>
            </div>
            <div className='col-md-4 text-center mb-4'>
              <div className='icon-container mb-3'>
                <i className='fas fa-globe fa-3x text-primary'></i>
              </div>
              <h4 className='feature-title'>Global Network</h4>
              <p className='feature-description'>
                With connections worldwide, we help you explore opportunities in
                the country of your choice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
