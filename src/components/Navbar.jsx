import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./css-style/Navbar.module.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      className={styles.navbar}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.logo}>
        <img
          src="./src/components/images_icons/kindergarten.png"
          alt="E School Hub Logo"
          className={styles.logoImg}
        />
        <h2>E-School Hub</h2>
      </div>

      <div
        className={`${styles.menuToggle} ${isMobileMenuOpen ? styles.active : ''}`}
        onClick={toggleMenu}
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.active : ''}`}>
        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/Profile" onClick={toggleMenu}>Profile</Link></li>
        <li><Link to="/Academic" onClick={toggleMenu}>Courses</Link></li>
        <li><Link to="/Result" onClick={toggleMenu}>Dashboard</Link></li>
        <li><Link to="/Store" onClick={toggleMenu}>Store</Link></li>
        <li><Link to="/Help" onClick={toggleMenu}>Help</Link></li>
        <li><Link to="/Logout" onClick={toggleMenu}>Logout</Link></li>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
