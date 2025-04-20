import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const location = useLocation();
  const hideLayoutRoutes = ["/", "/register", "/login"]; // Added "/" to hide Navbar on Home
  const showLayout = !hideLayoutRoutes.includes(location.pathname);

  return (
    <div className="layout-container">
      {showLayout && <Navbar />}
      <main className="content">{children}</main>
      {showLayout && <Footer />}
    </div>
  );
};

export default Layout;
