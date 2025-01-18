import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Importing some custom CSS for styling

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <h1 className="title">Welcome to E School Hub</h1>
        <p className="subtitle">An Interactive Online Learning Platform for Kids</p>
      </header>

      <section className="features">
        <div className="feature-card">
          <h2>Learn at Your Own Pace</h2>
          <p>Fun and engaging lessons in a variety of subjects.</p>
        </div>
        <div className="feature-card">
          <h2>Interactive Activities</h2>
          <p>Enjoy games and quizzes to test your knowledge!</p>
        </div>
        <div className="feature-card">
          <h2>Safe & Secure</h2>
          <p>Your safety and learning are our top priority!</p>
        </div>
      </section>

      <div className="buttons">
        <Link to="/register">
          <button className="button">Sign Up</button>
        </Link>
        <Link to="/login">
          <button className="button">Log In</button>
        </Link>
      </div>

      <footer className="footer">
        <p>&copy; 2025 E School Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
