// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';    // Import Layout for main pages
import Home from './pages/Home';             // Home page
import About from './pages/About';           // About page
import Login from './pages/Login';           // Login page (without layout)
import Register from './pages/Register';     // Register page (without layout)

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes without Layout (Login & Register) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Routes with Layout */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
