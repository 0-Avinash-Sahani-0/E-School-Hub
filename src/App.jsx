import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home'; // Assuming you have a Home page
import Academic from './components/Academic';


function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <>
      <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />           {/* Your Home page */}
          <Route path="/register" element={<Register />} /> Register page
          {/* <Route path="/login" element={<Login />} />       Login page */}
          {/* <Route path="/Academic" element={<Academic />} />   */}
          <Route path="/login" element={<Login setToken={(token) => { localStorage.setItem('token', token); setToken(token); }} />} />
          <Route path="/Academic" element={token ? <Academic /> : <Navigate to="/Academic" />} />
        </Routes>
      </div>
    </Router>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p>This is The React Application</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
