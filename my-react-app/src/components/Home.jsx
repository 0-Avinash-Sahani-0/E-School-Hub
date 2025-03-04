import React from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaChartLine, FaGamepad } from 'react-icons/fa';
import './css-style/Home.css';
import logo from './images_icons/kindergarten.png';

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <img src={logo} alt="E School Hub Logo" className="hero-logo" width={80}/>
          <h1 className="hero-title">Welcome to <span>E School Hub</span></h1>
          <p className="hero-subtitle">
            Empowering young minds through interactive, fun, and safe online learning.
          </p>
          <div className="hero-buttons">
            <Link to="/register" className="hero-btn">Get Started</Link>
            <Link to="/login" className="hero-btn secondary">Log In</Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="features">
        <h2 className="section-title">What We Offer</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <FaBook className="feature-icon" />
            <h3>Interactive Lessons</h3>
            <p>Engaging, curriculum-based lessons for Junior to 5th Standard students.</p>
          </div>
          <div className="feature-card">
            <FaChartLine className="feature-icon" />
            <h3>Progress Tracking</h3>
            <p>Monitor and improve academic performance with real-time insights.</p>
          </div>
          <div className="feature-card">
            <FaGamepad className="feature-icon" />
            <h3>Educational Games</h3>
            <p>Boost learning through fun and interactive quizzes and activities.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2 className="section-title">Why Choose E School Hub?</h2>
        <p>
          At E School Hub, we provide a safe and innovative online learning experience tailored for young learners.
        </p>
        <ul className="benefits-list">
          <li>✔️ Structured courses for Junior to 5th Standard.</li>
          <li>✔️ Engaging & child-friendly platform.</li>
          <li>✔️ Secure login for students, parents, and educators.</li>
          <li>✔️ Dedicated Help & Support Section.</li>
        </ul>
      </section>

      {/* Call to Action */}
      <div className="cta-section">
        <h2>Join the Learning Revolution!</h2>
        <p>Start your journey with E School Hub today.</p>
        <Link to="/register" className="cta-btn">Get Started Now</Link>
      </div>
    </div>
  );
}

export default Home;
