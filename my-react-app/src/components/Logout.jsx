import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./css-style/Logout.css";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userToken"); // Remove authentication token
    navigate("/login"); // Redirect to login page
  };

  return (
    <motion.div
      className="logout-container"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="logout-title">Are you sure you want to logout?</h2>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </motion.div>
  );
};

export default Logout;
