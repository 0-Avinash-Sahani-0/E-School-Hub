import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
// import logo from '../images_icons/kindergarten.png';
import './css-style/Home.css';
import Navbar from './Navbar';


function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
        <img src="/src/images_icons/kindergarten.png" alt="E School Hub Logo" className="logo-img" />
        </div>
        <h2 className="logo">E-School Hub</h2>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          &#9776;
        </button>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Academic">Courses</Link></li>
          <li><Link to="/Profile">Profile</Link></li>
          <li><Link to="/Result">Results</Link></li>
          <li><Link to="/Store">Store</Link></li>
          <li><Link to="/Help">Help</Link></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="home-container">
        <header className="header">
        <img src="/src/images_icons/kindergarten.png" alt="E School Hub Logo" className="logo-img" />
          <h1 className="title">Welcome to E School Hub</h1>
          <p className="subtitle">
            Empowering young minds through interactive, fun, and safe online learning.
          </p>
        </header>

        <section className="features">
          <div className="feature-card">
            <h2>Interactive Lessons</h2>
            <p>Access engaging lessons tailored for kids from Junior to 5th Standard.</p>
          </div>
          <div className="feature-card">
            <h2>Progress Tracking</h2>
            <p>Track your academic performance and improve step by step.</p>
          </div>
          <div className="feature-card">
            <h2>Educational Games</h2>
            <p>Learn while you play through our exciting quizzes and activities!</p>
          </div>
        </section>

        <section className="about">
          <h2>Why Choose E School Hub?</h2>
          <p>
            At E School Hub, we believe every child deserves an enriching, personalized, and safe 
            learning experience.
          </p>
          <ul className="benefits-list">
            <li>Comprehensive academic courses.</li>
            <li>Easy-to-use platform with child-friendly design.</li>
            <li>Secure login for parents, educators, and students.</li>
            <li>Support available through an extensive Help section.</li>
          </ul>
        </section>

        <div className="buttons">
          <Link to="/register">
            <button className="button">Get Started</button>
          </Link>
          <Link to="/login">
            <button className="button">Log In</button>
          </Link>
        </div>
      </div>

    
    </>
  );
}

export default Home;
