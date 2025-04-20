import React from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaChartLine, FaGamepad } from 'react-icons/fa';
import styles from './css-style/Home.module.css'; // Use CSS Modules for better isolation
import logo from './images_icons/kindergarten.png';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      {/* Hero Section */}
      <header className={styles.heroSection}>
        <div className={styles.heroContent}>
          <img src={logo} alt="E School Hub Logo" className={styles.heroLogo} width={80} />
          <h1 className={styles.heroTitle}>Welcome to <span>E School Hub</span></h1>
          <p className={styles.heroSubtitle}>
            Empowering young minds through interactive, fun, and safe online learning.
          </p>
          <div className={styles.heroButtons}>
            <Link to="/register" className={styles.heroBtn}>Get Started</Link>
            <Link to="/login" className={`${styles.heroBtn} ${styles.secondary}`}>Log In</Link>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>What We Offer</h2>
        <div className={styles.featureCards}>
          <div className={styles.featureCard}>
            <FaBook className={styles.featureIcon} />
            <h3>Interactive Lessons</h3>
            <p>Engaging, curriculum-based lessons for Junior to 5th Standard students.</p>
          </div>
          <div className={styles.featureCard}>
            <FaChartLine className={styles.featureIcon} />
            <h3>Progress Tracking</h3>
            <p>Monitor and improve academic performance with real-time insights.</p>
          </div>
          <div className={styles.featureCard}>
            <FaGamepad className={styles.featureIcon} />
            <h3>Educational Games</h3>
            <p>Boost learning through fun and interactive quizzes and activities.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <h2 className={styles.sectionTitle}>Why Choose E School Hub?</h2>
        <p>
          At E School Hub, we provide a safe and innovative online learning experience tailored for young learners.
        </p>
        <ul className={styles.benefitsList}>
          <li>✔️ Structured courses for Junior to 5th Standard.</li>
          <li>✔️ Engaging & child-friendly platform.</li>
          <li>✔️ Secure login for students, parents, and educators.</li>
          <li>✔️ Dedicated Help & Support Section.</li>
        </ul>
      </section>

      {/* Call to Action */}
      <div className={styles.ctaSection}>
        <h2>Join the Learning Revolution!</h2>
        <p>Start your journey with E School Hub today.</p>
        <Link to="/register" className={styles.ctaBtn}>Get Started Now</Link>
      </div>
    </div>
  );
};

export default Home;
