import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./VisaFormsPage.css";

function VisaFormsPage() {
  const [activeTab, setActiveTab] = useState("studentVisa");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="visa-forms-section" id="visa">
      <div className="container">
        <h1 className="page-title">Visa Application Forms</h1>
        <div className="tabs">
          <button
            className={`tab ${activeTab === "studentVisa" ? "active" : ""}`}
            onClick={() => handleTabClick("studentVisa")}
          >
            Student Visa
          </button>
          <button
            className={`tab ${activeTab === "touristVisa" ? "active" : ""}`}
            onClick={() => handleTabClick("touristVisa")}
          >
            Tourist Visa
          </button>
        </div>

        <div className="form-content">
          {activeTab === "studentVisa" && <StudentVisaForm />}
          {activeTab === "touristVisa" && <TouristVisaForm />}
        </div>
      </div>
    </section>
  );
}

function StudentVisaForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    education: "",
    ieltsScore: "",
    visaRefusal: "",
    studyLevel: "",
    recommendedUniversity: "",
    preferredCountry: "",
    intake: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!Object.values(formData).every((field) => field.trim() !== "")) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_skmp9i8",
        "template_c0o7zoi",
        e.target,
        "-VUNwlzT_TfE9dSzM"
      )
      .then((result) => {
        alert("Your student visa application has been submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          education: "",
          ieltsScore: "",
          visaRefusal: "",
          studyLevel: "",
          recommendedUniversity: "",
          preferredCountry: "",
          intake: "",
        });
      })
      .catch((error) => {
        alert(
          "There was an error submitting your application. Please try again."
        );
        console.error("Error:", error.text);
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <form className="visa-form" onSubmit={handleSubmit}>
      <h2>Student Visa Application</h2>
      {/* Form Fields */}
      {Object.keys(formData).map((key) => (
        <FormField
          key={key}
          label={key
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase())}
          type="text"
          name={key}
          value={formData[key]}
          onChange={handleChange}
        />
      ))}
      <button
        type="submit"
        className={`btn-submit ${isSubmitting ? "loading" : ""}`}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}

function TouristVisaForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    passportNumber: "",
    travelHistory: "",
    travelPurpose: "",
    preferredCountry: "",
    travelDates: "",
    additionalInfo: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!Object.values(formData).every((field) => field.trim() !== "")) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_skmp9i8",
        "template_c0o7zoi",
        e.target,
        "-VUNwlzT_TfE9dSzM"
      )
      .then((result) => {
        alert("Your tourist visa application has been submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          passportNumber: "",
          travelHistory: "",
          travelPurpose: "",
          preferredCountry: "",
          travelDates: "",
          additionalInfo: "",
        });
      })
      .catch((error) => {
        alert(
          "There was an error submitting your application. Please try again."
        );
        console.error("Error:", error.text);
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <form className="visa-form" onSubmit={handleSubmit}>
      <h2>Tourist Visa Application</h2>
      {/* Form Fields */}
      {Object.keys(formData).map((key) => (
        <FormField
          key={key}
          label={key
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase())}
          type="text"
          name={key}
          value={formData[key]}
          onChange={handleChange}
        />
      ))}
      <button
        type="submit"
        className={`btn-submit ${isSubmitting ? "loading" : ""}`}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}

function FormField({ label, type, name, value, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default VisaFormsPage;
