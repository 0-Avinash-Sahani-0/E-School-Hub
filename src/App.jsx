// App.jsx
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import Register from './components/Register';
import Login from './components/Login';
import Home from './components/home';
import Academic from './components/Academic';
import Profile from './components/Profile';
import Results from './components/Result';
import Store from './components/Store';
import Help from './components/Help';
import Layout from './components/Layout';
import PaymentPage from './components/PaymentPage';
import ExamPage from './components/ExamPage';
import Logout from './components/Logout'; // ✅ Add this import

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route 
            path="/login" 
            element={
              <Login setToken={(token) => {
                localStorage.setItem('token', token);
                setToken(token);
              }} />
            } 
          />
          <Route path="/Academic" element={token ? <Academic /> : <Navigate to="/login" />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Result" element={<Results />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/exam" element={<ExamPage studentName="Aman Gupta" classLevel="Class 1" />} />

          {/* ✅ NEW: Route to handle logout */}
          <Route path="/Logout" element={<Logout setToken={setToken} />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
