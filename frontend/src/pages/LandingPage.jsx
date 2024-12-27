import React from "react";
import Navbar from '../components/Navbar';
import 'bootstrap-icons/font/bootstrap-icons.css';
function LandingPage() {
  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <div
        className="hero-section text-center text-dark d-flex flex-column align-items-center justify-content-center"
        style={{
          height: "100vh",
          backgroundImage: "url('bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        
        <div className="hero-content mt-5">
          <h2 className="display-4 fw-bold">
            YOUR EDUCATION, <span className="text-primary">reimagined</span>
          </h2>
          <p className="mt-3">
            Say Goodbye To Sensory Overload And Hello To Intuitive, Personalized
            Learning Experiences.
          </p>
          <button className="btn btn-primary btn-lg mt-4">TRY NOW</button>
          <div className="text-muted mt-3">
            <span>Start Learning From Here</span>
          </div>
        </div>
        <div className="tags d-flex justify-content-center flex-wrap mt-5">
          <div
            className="tag bg-white shadow-sm d-flex align-items-center mx-2 p-2"
            style={{ borderRadius: "20px" }}
          >
            <i className="bi bi-bookmark-check text-primary me-2"></i>
            Bionic Reading
          </div>
          <div
            className="tag bg-white shadow-sm d-flex align-items-center mx-2 p-2"
            style={{ borderRadius: "20px" }}
          >
            <i className="bi bi-people text-primary me-2"></i>
            Community
          </div>
          <div
            className="tag bg-white shadow-sm d-flex align-items-center mx-2 p-2"
            style={{ borderRadius: "20px" }}
          >
            <i className="bi bi-person-circle text-primary me-2"></i>
            Personalized Learning
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mission-section container d-flex flex-wrap align-items-center py-5">
        <div className="content col-md-6">
          <h2 className="text-primary fw-bold mb-4">Our Mission</h2>
          <p>
            We believe that every <span className="fw-bold">learner</span> deserves a platform designed to accommodate their unique strengths, challenges, and potential.
          </p>
          <div className="mission-items mt-4">
            <div className="mission-item d-flex align-items-center mb-4">
              <div className="icon me-3">
                <i className="bi bi-lightbulb text-warning fs-1"></i>
              </div>
              <div>
                <h4 className="mb-1">10,000+ learners</h4>
                <p className="mb-0">Across the globe, neurodivergent students are thriving with our app.</p>
              </div>
            </div>
            <div className="mission-item d-flex align-items-center mb-4">
              <div className="icon me-3">
                <i className="bi bi-boxes text-danger fs-1"></i>
              </div>
              <div>
                <h4 className="mb-1">50+ adaptive tools</h4>
                <p className="mb-0">
                  From bionic reading to visual aids, we tailor the learning experience to individual needs.
                </p>
              </div>
            </div>
            <div className="mission-item d-flex align-items-center mb-4">
              <div className="icon me-3">
                <i className="bi bi-globe text-success fs-1"></i>
              </div>
              <div>
                <h4 className="mb-1">Inclusive community</h4>
                <p className="mb-0">
                  A vibrant space where learners connect, collaborate, and grow together.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="image col-md-6 text-center">
          <img
            src="image.jpg"
            alt="Mission Illustration"
            className="img-fluid"
            style={{ maxWidth: "80%", borderRadius: "10px" }}
          />
        </div>
      </div>

      {/* "What Awaits You" Section */}
      <div className="what-awaits-you container text-center py-5">
        <h2 className="fw-bold mb-4">What awaits <span className="text-primary">you</span>?</h2>
        <div className="row justify-content-center">
          <div className="col-md-3 p-3">
            <div className="card border-0 shadow-sm h-100" style={{ backgroundColor: "#f8f9fa" }}>
              <div className="card-body">
                <h5 className="card-title fw-bold">Personalized Learning Tools</h5>
                <div className="icon mb-3">
                  <i className="bi bi-tools text-warning fs-1"></i>
                </div>
                <p className="card-text">
                  Unlock your potential with adaptive tools like bionic reading, text-to-speech, and visual aids, designed to enhance focus and retention.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 p-3">
            <div className="card border-0 shadow-sm h-100" style={{ backgroundColor: "#f8f9fa" }}>
              <div className="card-body">
                <h5 className="card-title fw-bold">Tailored to Your Needs</h5>
                <div className="icon mb-3">
                  <i className="bi bi-person-check text-primary fs-1"></i>
                </div>
                <p className="card-text">
                  Our platform is crafted with neurodivergent learners in mind, offering intuitive interfaces and support for ADHD, dyslexia, and more.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 p-3">
            <div className="card border-0 shadow-sm h-100" style={{ backgroundColor: "#f8f9fa" }}>
              <div className="card-body">
                <h5 className="card-title fw-bold">Your Journey to Growth</h5>
                <div className="icon mb-3">
                  <i className="bi bi-graph-up text-success fs-1"></i>
                </div>
                <p className="card-text">
                  Join a supportive community, track your progress, and experience a transformative way of learning that’s designed for success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*PACKAES*/}
      <div
  className="pricing-section py-5"
  style={{
    backgroundImage: "url('bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    color: "#fff",
  }}
>
  <div className="text-center mb-5">
    <h2 className="display-4 fw-bold" style={{ color: "#000" }}>
      Tools Tailored For <span className="text-primary">You</span>
    </h2>
  </div>
  <div className="container d-flex justify-content-center flex-wrap">
    {/* Pricing Cards */}
    {["Starter", "Advanced", "Professional"].map((plan, index) => {
      const prices = ["FREE", "$100", "$200"];
      const descriptions = [
        "Starter Pack",
        "Everything in Starter, plus",
        "Starter Pack",
      ];
      return (
        <div
          className="card text-center mx-3 mb-4 d-flex flex-column justify-content-between"
          style={{
            maxWidth: "300px",
            border: "none",
            borderRadius: "15px",
            background: "rgba(255, 255, 255, 0.85)",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            height: "400px",
          }}
          key={index}
        >
          <div className="card-body">
            <h5 className="card-title fw-bold">{plan}</h5>
            <p className="text-muted">{descriptions[index]}</p>
            <h3 className="fw-bold">{prices[index]}</h3>
            <ul className="list-unstyled mt-3 mb-4 text-start">
              <li className="mb-2 d-flex align-items-center">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Access to Bionic Reading tools
              </li>
              <li className="mb-2 d-flex align-items-center">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Basic Text-to-Speech support
              </li>
              <li className="mb-2 d-flex align-items-center">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Visual aids for better comprehension
              </li>
              <li className="d-flex align-items-center">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                Limited Progress Tracking features
              </li>
            </ul>
          </div>
          <div className="card-footer me-10 border-0 bg-transparent">
            <button className="btn btn-success btn-lg">
              {plan === "Starter"
                ? "Try For Free"
                : `Upgrade to ${plan}`}
            </button>
          </div>
        </div>
      );
    })}
  </div>
</div>



    </div>
  );
}

export default LandingPage;
