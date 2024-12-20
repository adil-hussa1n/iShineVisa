import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./components/About/About"
import Contact from "./components/ContactUs/ContactUs"
import VisaTypes from "./components/VisaTypes/VisaTypes"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/about' element={<About />} />
          <Route path='/visaTypes' element={<VisaTypes />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
