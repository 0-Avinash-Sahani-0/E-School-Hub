import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home'; // Assuming you have a Home page
import Academic from './components/Academic';
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Results from "./components/Result";
import Store from "./components/Store";
import Help from "./components/Help";
import Footer from './components/Footer';
// import Logout from "./components/Logout";

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <Router>
      {Navbar}
      <Navbar />
      
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route 
            path="/login" 
            element={<Login setToken={(token) => { localStorage.setItem('token', token); setToken(token); }} />} 
          />
          <Route path="/Academic" element={token ? <Academic /> : <Navigate to="/login" />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Result" element={<Results />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/Help" element={<Help />} />
        </Routes>
      </div>
      {Footer}
      <Footer />
    </Router>
  );
}

export default App;
