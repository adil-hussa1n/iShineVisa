import React, { useState } from "react"
import "./VisaTypes.css"

function VisaTypes() {
  const [selectedVisa, setSelectedVisa] = useState("")

  const visaRequirements = {
    student: {
      USA: [
        "Undergraduate / Master’s (MS) / Ph.D.:",
        "Completed DS-160 form",
        "SEVIS Fee payment receipt",
        "Admission letter from a SEVP-approved institution",
        "Proof of financial support",
        "Valid passport",
        "High school / Bachelor's degree / Master’s degree transcripts and certificates",
        "Standardized test scores (e.g., SAT, ACT, TOEFL, or IELTS)",
        "Statement of Purpose (SOP) or research proposal",
        "Letters of Recommendation (LOR)",
        "Updated resume/CV",
        "Evidence of previous research or publications (if applicable)",
        "Evidence of ties to the home country",
      ],
      UK: [
        "Undergraduate / Master’s (MS) / Ph.D.:",
        "Completed UK student visa application (Tier 4/Student Visa)",
        "Confirmation of Acceptance for Studies (CAS)",
        "Proof of financial support (bank statements or sponsor letter)",
        "Valid passport",
        "Tuberculosis (TB) test results (if applicable)",
        "High school / Bachelor's degree / Master’s degree transcripts and certificates",
        "English language proficiency test results (e.g., IELTS, PTE, or TOEFL)",
        "Statement of Purpose (SOP) or research proposal",
        "Letters of Recommendation (LOR)",
        "Updated resume/CV",
        "Evidence of previous research or publications (if applicable)",
        "Proof of parental consent (if under 18)",
      ],
      Canada: [
        "Undergraduate / Master’s (MS) / Ph.D.:",
        "Completed Study Permit application form (IMM 1294)",
        "Letter of Acceptance (LOA) from a Designated Learning Institution (DLI)",
        "Proof of financial support (bank statements, GIC, or sponsor letter)",
        "Valid passport",
        "Tuberculosis (TB) test results (if applicable)",
        "High school / Bachelor's degree / Master’s degree transcripts and certificates",
        "English language proficiency test results (e.g., IELTS, PTE, or TOEFL)",
        "Statement of Purpose (SOP) or study plan",
        "Letters of Recommendation (LOR)",
        "Updated resume/CV",
        "Evidence of previous research or publications (if applicable)",
        "Proof of parental consent (if under 18)",
        "Biometrics (fingerprints and photo)",
        "Police clearance certificate",
        "Evidence of ties to the home country",
      ],
      Australia: [
        "Undergraduate / Master’s (MS) / Ph.D.:",
        "Completed Australian student visa application (Subclass 500)",
        "Confirmation of Enrollment (CoE) from a CRICOS-registered institution",
        "Proof of financial support (bank statements, scholarship letters, or sponsor letter)",
        "Valid passport",
        "Overseas Student Health Cover (OSHC) proof",
        "Tuberculosis (TB) test results (if applicable)",
        "High school / Bachelor's degree / Master’s degree transcripts and certificates",
        "English language proficiency test results (e.g., IELTS, TOEFL, or PTE)",
        "Statement of Purpose (SOP) or research proposal",
        "Updated resume/CV",
        "Evidence of previous research or publications (if applicable)",
        "Biometrics (fingerprints and photo)",
        "Police clearance certificate",
        "Evidence of ties to the home country",
      ],
      Schengen: [
        "Application Form: Completed and signed student visa application form",
        "Passport: Valid for at least 3 months beyond your planned departure date, with at least 2 blank page",
        "Photos: Two recent passport-sized photos (35x45mm) with a white background, meeting Schengen visa photo requirements",
        "Admission Letter: Proof of acceptance from a recognized educational institution in a Schengen country.",
        "Proof of Financial Means: Bank statements for the last 3–6 months, sponsorship letter, or financial guarantee showing that you can support yourself during your studies",
        "Travel Insurance: Health insurance covering medical emergencies with a minimum of €30,000, valid for the entire duration of your stay in the Schengen Area",
        "Proof of Accommodation: Confirmation of housing arrangements, such as a lease agreement or university-provided accommodation.  ",
        "Proof of Language Proficiency: Test results showing proficiency in the language of instruction (e.g., IELTS, TOEFL, or equivalent).",
        "Academic Qualifications: Copies of previous academic certificates, diplomas, and transcripts.  ",
        "Proof of Accommodation: Evidence of your stay, such as dormitory details or private rental agreement.  ",
        "Financial Proof: Documents such as bank statements, scholarship letters or sponsorship letters showing you can support yourself financially during your stay",
        "Purpose of Visit: Cover letter detailing your study plan, program details, and how your studies relate to your future goals",
        "Home Ties: Documents showing ties to your home country (e.g., family, property, or employment commitments) that ensure your return after studie",
        "Visa Fee: The visa application fee (typically €60–€80 depending on the embassy or consulate).",
        "Biometric Data: Fingerprints and photo (if not already provided within the last 59 months)",
        "Processing Time: Typically 15–30 days, but can vary by country or embassy",
      ],
    },
    tourist: {
      USA: [
        "Completed DS-160 Form: The nonimmigrant visa application form submitted online with your details.",
        "Proof of Financial Means: Bank statements, pay slips, or other financial documents showing you can afford your trip and return.",
        "Valid Passport: Must be valid for at least six months beyond your planned stay in the USA.",
        "Travel Itinerary and Accommodation Details: Documents showing your travel plans, including flight tickets (if booked) and hotel reservations.",
        "Invitation Letter (if applicable): If visiting someone in the USA, an invitation letter from the host detailing their relationship with you and their contact information.",
      ],
      UK: [
        "Completed Visitor Visa Application Form: Filled out online at the official UK visa website.",
        "Valid Passport: Must be valid for the duration of your stay and have at least one blank page for the visa.",
        "Proof of Funds for the Duration of the Stay: Bank statements or income proof showing you can support yourself financially during the visit.",
        "Accommodation Details: Hotel bookings or confirmation of where you will be staying. If staying with someone, include an invitation letter and proof of their accommodation.",
        "Travel Itinerary: Details about your planned activities, including places you’ll visit and travel dates.",
      ],
      Canada: [
        "Valid Passport: Must be valid for the entire duration of your visit and contain at least one blank page for the visa stamp.",
        "Proof of Funds: Recent bank statements, pay slips, or proof of sponsorship showing you have sufficient funds to cover your stay.",
        "Travel Itinerary: Include flight reservations and any planned activities or places to visit during your trip.",
        "Invitation Letter (if applicable): If visiting someone, include a letter from your host in Canada with their contact details and proof of status (e.g., citizenship or residency).",
        "Medical Exam (if required): For stays longer than six months or if coming from certain countries, a medical examination might be required.",
      ],
      Australia: [
        "Valid Passport: Must be valid for at least six months after the intended stay and have sufficient blank pages for visa processing",
        "Proof of Funds: Bank statements, proof of savings, or evidence of employment showing you can afford your trip",
        "Travel Itinerary: Flight bookings (if available), planned activities, and any hotel reservations",
        "Medical Exam (if required): Depending on your country of residence, a health examination may be needed  ",
        "Health and Character Requirements: You may need to submit a police clearance certificate and health documentation to prove your fitness and good conduct",
      ],
      Schengen: [
        "Application Form: Completed and signed",
        "Passport: Valid for 3+ months after departure, with 2 blank pages",
        "Photos: Two recent passport-sized photos (35x45mm, white background)",
        "Travel Itinerary: Flight reservation, accommodation proof, or invitation letter.",
        "Financial Proof: Recent 3-6 months' bank statements or sponsorship letter",
        "Travel Insurance: €30,000 coverage for medical emergencies, valid in Schengen",
        "Employment/Study Proof: Leave letter, pay slips, business registration, or enrollment certificate",
        "Purpose of Visit: Invitation letter, host's ID, or detailed trip itinerary",
        "Home Ties: Evidence of strong ties (job, property, or family commitments)",
        "Visa Fee: €80 for adults (varies for others)",
        "Biometric Data: Fingerprints and photo (if not recent)",
        "Cover Letter: Explain purpose, activities, and intent to return",
        "Processing time: 15–30 days",
      ],
    },
  }

  const toggleVisaDetails = (visaType, country) => {
    const key = `${visaType}-${country}`
    setSelectedVisa(selectedVisa === key ? "" : key)
  }

  return (
    <section className='visa-types-section py-5'>
      <div className='container'>
        <h2 className='section-title text-center mb-4'>Visa Types</h2>
        <div className='row'>
          {/* Student Visa Section */}
          <div className='col-md-6 mb-4'>
            <div className='visa-card'>
              <h3 className='visa-title'>Student Visa</h3>
              <p className='visa-description'>
                Embark on your academic journey with a student visa for your
                dream destination.
              </p>
              {["USA", "UK", "Canada", "Australia", "Schengen"].map(
                (country) => (
                  <div key={country} className='visa-requirement'>
                    <button
                      className='visa-button'
                      onClick={() => toggleVisaDetails("student", country)}
                    >
                      {country}{" "}
                      {selectedVisa === `student-${country}` ? "▲" : "▼"}
                    </button>
                    {selectedVisa === `student-${country}` && (
                      <ul className='requirement-list'>
                        {visaRequirements.student[country].map(
                          (item, index) => (
                            <li key={index}>{item}</li>
                          )
                        )}
                      </ul>
                    )}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Tourist Visa Section */}
          <div className='col-md-6 mb-4'>
            <div className='visa-card'>
              <h3 className='visa-title'>Tourist Visa</h3>
              <p className='visa-description'>
                Explore the world with ease by obtaining a tourist visa for your
                favorite destination.
              </p>
              {["USA", "UK", "Canada", "Australia", "Schengen"].map(
                (country) => (
                  <div key={country} className='visa-requirement'>
                    <button
                      className='visa-button'
                      onClick={() => toggleVisaDetails("tourist", country)}
                    >
                      {country}{" "}
                      {selectedVisa === `tourist-${country}` ? "▲" : "▼"}
                    </button>
                    {selectedVisa === `tourist-${country}` && (
                      <ul className='requirement-list'>
                        {visaRequirements.tourist[country].map(
                          (item, index) => (
                            <li key={index}>{item}</li>
                          )
                        )}
                      </ul>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisaTypes
