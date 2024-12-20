import React from "react"

import HeroSection from "./../components/Hero/HeroSection"
import About from "./../components/About/About"
import VisaTypes from "./../components/VisaTypes/VisaTypes"

import ContactUs from "./../components/ContactUs/ContactUs"

import VisaFormsPage from "./../components/ClientForm/VisaFormsPage"

const Home = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <VisaTypes />
      <VisaFormsPage />

      <ContactUs />
    </div>
  )
}

export default Home
