import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./css-style/Logout.module.css";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userToken"); // Remove authentication token
    navigate("/"); // ✅ Redirect to home page
  };

  return (
    <motion.div
      className={styles.logoutContainer}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={styles.logoutTitle}>Are you sure you want to logout?</h2>
      <button className={styles.logoutButton} onClick={handleLogout}>Logout</button>
    </motion.div>
  );
};

export default Logout;
