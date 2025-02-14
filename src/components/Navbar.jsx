import { Link } from "react-router-dom";
import "./css-style/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/src/images_icons/kindergarten.png" alt="E School Hub Logo" className="logo-img" />
        <h2>E-School Hub</h2> 
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Profile">Profile</Link></li>
        <li><Link to="/Academic">Courses</Link></li>
        <li><Link to="/Result">Results</Link></li>
        <li><Link to="/Store">Store</Link></li>
        <li><Link to="/Help">Help</Link></li>
        <li><Link to="/Logout">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
