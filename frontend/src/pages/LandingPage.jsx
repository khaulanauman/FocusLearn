import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

function HeroSection() {
  return (
    <div>
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
        <header className="d-flex justify-content-between w-100 px-5 py-3">
          <h1 className="text-primary">FocusLearn</h1>
          <nav>
            <a href="#read" className="text-dark mx-3 text-decoration-none">
              Read
            </a>
            <a
              href="#community"
              className="text-dark mx-3 text-decoration-none"
            >
              Community
            </a>
            <a href="#login" className="text-dark mx-3 text-decoration-none">
              Login
            </a>
          </nav>
        </header>
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
    </div>
  );
}

export default HeroSection;
